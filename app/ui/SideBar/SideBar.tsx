import { ReactElement } from "react"
import Link from "next/link"
import { sectionsData } from "@/app/consts/sections-data"
import { SectionData } from "@/app/types"
import styles from "./SideBar.module.css"

/** sidebar with navbar, Kant image and table of content */
export default function Sidebar() {

    /** returns title of table of content in Sidebar */
    function renderTitles(): ReactElement[] {
        return sectionsData.map((sectionData: SectionData, index: number) => (
            <div key={sectionData.lessonId} className={styles["sidebar-title-cont"]}>
                <span className={styles["sidebar-num"]}>{`${index + 1}. `}</span>
                <Link
                    href={`/section-${sectionData.lessonId}`}
                    className={styles["sidebar-title"]}
                >{sectionData.title}</Link>
            </div>
        ))
    }

    return (
        <div className={styles["Sidebar"]}>
            <h3>Inhalt</h3>
            <div>{renderTitles()}</div>
        </div>
    )
}