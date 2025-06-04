"use client"
import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/context/auth.context";
import styles from "./Lesson.module.css"
import { AuthContextTypes, LessonData, QuizPart } from "@/app/types";
import Quiz from "@/app/ui/quiz/Quiz";

interface Props {
    lessonData: LessonData
    quiz: QuizPart[]
}

/** displays lesson, content is ordered as a grid with paragraphs and page numbers, texts and notes */
export default function Lesson({ children, lessonData, quiz }: PropsWithChildren<Props>) {
    const { loadNotes } = useContext(AuthContext) as AuthContextTypes

    const [quizOn, setQuizOn] = useState(false)

    // loads notes after mount
    useEffect(() => {
        loadNotes(lessonData.lessonId)
    }, [lessonData.lessonId, loadNotes])

    /** lesson, displayed if quizOn is false */
    const lesson = (
        <div className={styles["lesson-cont"]}>
            <div className={styles["lesson-header"]}>
                <h2>{lessonData.title}</h2>
                <h3>{lessonData.pages}</h3>
            </div>
            {children}

            {/* If the user clicks the quiz button at the end of the lesson, the quiz is rendered. */}
            <div className={styles["lesson-end-button-cont"]}>
                <button
                    className={styles["lesson-end-button"]}
                    title="Zum Quiz"
                    onClick={() => setQuizOn(true)}
                >Gehe zum Quiz<span className={styles["lesson-end-button-second-half"]}>, um die Lektion abzuschließen.</span></button>
            </div>
        </div>
    )

    // displays either lesson or quiz, dependent on state
    return quizOn ? <Quiz lessonId={lessonData.lessonId} quiz={quiz} title={lessonData.title} /> : lesson
}