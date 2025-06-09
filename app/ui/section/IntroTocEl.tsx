"use client"
import { JSX, useContext, useMemo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "@/app/context/auth.context"
import { AuthContextTypes } from "@/app/types"
import styles from "./IntroTocEl.module.css"
import Link from "next/link"

interface Props {
    lessonId: string
    numberOfSection: number
    title: string
}

/** title element of table of content in Introduction view */
export default function IntroTocEl({ lessonId, numberOfSection, title }: Props) {
    const { lessonIds } = useContext(AuthContext) as AuthContextTypes

    // calculates if the respective lesson has been completed every time lessonIds has been updated
    const lessonDone: boolean = useMemo(() => {
        return lessonIds.includes(lessonId)
    }, [lessonIds, lessonId])

    // calculates if the respective lesson is disabled every time lessonIds has been updated
    const lessonDisabled: boolean = useMemo(() => {
        let disabled: boolean

        // the first lesson of a section is never disabled
        if (numberOfSection === 1) {
            disabled = false

        // the second lesson is disabled if the first lesson has not been completed
        } else if (numberOfSection === 2 && !lessonIds.includes(lessonId.slice(0, 2) + 1)) {
            disabled = true

        // checks if the second-last lesson before the current lesson has been completed
        } else if (!lessonIds.includes(lessonId.slice(0, 2) + String(Number(lessonId[2]) - 1))) {
            disabled = true
        } else {
            disabled = false
        }
        return disabled
    }, [lessonId, lessonIds, numberOfSection])

    /** checkmark at the end of element if lesson has been completed */
    const checkmark: JSX.Element = <FontAwesomeIcon className={styles["intro-checkmark"]} icon={faCircleCheck} />

    return (
        <div className={lessonDisabled ? `${styles["intro-toc-inner-cont"]} ${styles["disabled"]}` : styles["intro-toc-inner-cont"]}>
            {numberOfSection && <span
                className={styles["intro-toc-num"]}
            >{`${numberOfSection}. `}</span>}
            <Link
                onNavigate={(e) => lessonDisabled && e.preventDefault()}
                href={`/section-${lessonId}`}
                className={styles["intro-toc-title"]}
                prefetch
            >{title}{lessonDone && checkmark}</Link>
        </div>
    )
}