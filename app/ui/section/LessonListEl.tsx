"use client"
import { PropsWithChildren, ReactElement, useCallback, useContext, useEffect, useState } from "react"
import Note from "@/app/ui/notes/Note"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "@/app/context/auth.context"
import { AuthContextTypes, LessonNotes } from "@/app/types"
import styles from "./LessonListEl.module.css"
import noteStyles from "../notes/Note.module.css"

interface Props {
    paragraphId: string
    pageNumber?: string
    isQuestion?: boolean
}

/** paragraph of lesson */
export default function LessonListEl({ children, paragraphId, pageNumber, isQuestion = false }: PropsWithChildren<Props>) {
    const { notes } = useContext(AuthContext) as AuthContextTypes

    const [note, setNote] = useState("")
    const [noteInputOpened, setNoteInputOpened] = useState(false)
    const [notesLoaded, setNotesLoaded] = useState(false)

    /** class of paragraph, dependent on whether the paragraph is a question to the user */
    const textContainerClass: string = isQuestion
        ? `${styles["lesson-list-text"]} ${styles["lesson-question"]}`
        : styles["lesson-list-text"]

    /** gets notes of lesson */
    const getLessonNotes = useCallback((): LessonNotes | undefined => {
        // get lessonId from paragraphId
        const lessonId: string = paragraphId.split("-").slice(0, 2).join("-")

        // get notes of lesson
        const lessonNotes: LessonNotes | undefined = notes.find((lessonNotesObject: LessonNotes) => lessonNotesObject.lessonId === lessonId)
        return lessonNotes
    }, [notes, paragraphId])

    /** returns note of paragraph from notes from DB if note exists or else empty string */
    const getNote = useCallback((lessonNotes: LessonNotes): string => {
        const note: string = lessonNotes.notes.find(note => note.paragraphId === paragraphId)?.text || ""
        setNotesLoaded(true)
        return note
    }, [paragraphId])

    // renders note after notes of section have been loaded
    useEffect(() => {
        const lessonNotes: LessonNotes | undefined = getLessonNotes()
        lessonNotes && !notesLoaded && setNote(getNote(lessonNotes))
    }, [getLessonNotes, getNote, notes, notesLoaded])

    /** returns plus icon to add note */
    function getPlusIcon(small: boolean): ReactElement {
        return (
            <FontAwesomeIcon
                icon={faCirclePlus}
                title="Notiz hinzufügen"
                className={small ? `${noteStyles["plus-icon"]} ${noteStyles["small"]}` : noteStyles["plus-icon"]}
                onClick={() => setNoteInputOpened(true)}
            />
        )
    }

    /** gets grid-row value of paragraph */
    function getGridRow(): string {
        const paragraphNumber: number = Number(paragraphId.split("-")[2])
        const gridRow: string = String(paragraphNumber + 1)
        return gridRow
    }

    /** gets note */
    function getNoteComponent(small: boolean): ReactElement {
        return (
            <Note
                paragraphId={paragraphId}
                gridRow={getGridRow()}
                plusIcon={getPlusIcon(false)}
                note={note}
                setNote={setNote}
                noteInputOpened={noteInputOpened}
                setNoteInputOpened={setNoteInputOpened}
                small={small}
            />
        )
    }

    return (
        <>
            <div className={styles["page-number-cont"]} style={{ gridRow: getGridRow(), paddingTop: isQuestion ? "15px" : 0 }}>
                <span className={styles["page-number"]}>{pageNumber}</span>
            </div>
            <div className={textContainerClass} style={{ gridRow: getGridRow() }}>
                <p>
                    {pageNumber && <span className={styles["small-page-number-cont"]}>{pageNumber}: </span>}
                    {children}
                    {!note && getPlusIcon(true)}
                </p>
                {getNoteComponent(true)}
            </div>
            {getNoteComponent(false)}
        </>
    )
}