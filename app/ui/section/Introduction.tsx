"use client"
import { ReactElement, ReactNode } from "react";
import IntroTocEl from "@/app/ui/section/IntroTocEl";
import { SectionData, LessonData } from "@/app/types";
import styles from "./Introduction.module.css"

interface Props {
    children: ReactNode
    sectionData: SectionData
}

/** displays introductory text and table of content for sections */
export default function Introduction({ children, sectionData }: Props) {

    /** renders table of content of lessons of the section */
    function renderLessonTitles(): ReactElement {
        return (
            <>
                {sectionData.lessons.map((lesson: LessonData, index: number) => (
                    <IntroTocEl
                        key={lesson.lessonId}
                        lessonId={lesson.lessonId}
                        numberOfSection={index + 1}
                        title={lesson.title}
                    />
                ))}
            </>
        )
    }

    return (
        <div className={styles["Intro"]}>
            <header>
                <h2>{sectionData.title}</h2>
            </header>
            <main>
                <div className={styles["intro-text"]}>{children}</div>
                <h3>Lektionen</h3>
                {renderLessonTitles()}
            </main>
        </div>
    )
}