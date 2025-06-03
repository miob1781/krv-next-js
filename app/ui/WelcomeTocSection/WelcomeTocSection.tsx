import { ReactElement, useState } from "react"
import Link from "next/link"
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SectionData } from "../../types"
import styles from "./WelcomeTocSection.module.css"

interface Props {
    sectionData: SectionData
    sectionNumber: number
}

/** title element in table of content of Welcome view */
export default function WelcomeTocSection({sectionData, sectionNumber}: Props) {
    const [expand, setExpand] = useState(false)

    /** icon to expand or collapse details */
    const icon: ReactElement = <FontAwesomeIcon icon={expand ? faAngleUp : faAngleDown} />

    return (
        <div className={styles["welcome-toc-outer-cont"]}>
        <p
            className={styles["welcome-toc-title-cont"]}
            title={expand ? "Details verbergen" : "Details zeigen"}
            onClick={() => setExpand(prevExpand => !prevExpand)}
        >
            {icon}<span className={styles["welcome-toc-title"]}>{sectionNumber}. {sectionData.title}</span>
        </p>
        <div>
            {expand && (
                <>
                    <p className={styles["welcome-toc-description"]}>{sectionData.description}</p>
                    <Link className={styles["welcome-toc-intro-link"]} href={`section-${sectionData.lessonId}`}>
                        <button type="button">Gehe zu den Lektionen</button>
                    </Link>
                </>
            )}
        </div>
    </div>
    )
}