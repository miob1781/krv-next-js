"use client"
import { ReactElement } from "react"
import Image from "next/image"
import WelcomeTocSection from "./ui/WelcomeTocSection/WelcomeTocSection"
import BookImage from "@/app/images/cpr_image.jpg"
import { sectionsData } from "./consts/sections-data"
import { SectionData } from "./types"
import styles from "@/app/page.module.css"

export default function Page() {
    /** function to render the table of content */
    function renderWelcomeTocSections(): ReactElement[] {
        return sectionsData.map((sectionData: SectionData, index: number) => (
            <WelcomeTocSection
                key={sectionData.lessonId}
                sectionData={sectionData}
                sectionNumber={index + 1}
            />
        ))
    }

    /** gets image of cover of the first edition of the Critique of Pure Reason depending on screen size */
    function getImage(small: boolean): ReactElement {
        return <Image
            className={small ? `${styles["book-cover-img"]} ${styles["small"]}` : styles["book-cover-img"]}
            src={BookImage}
            alt="Deckblatt der ersten Ausgabe der Kritik der reinen Vernunft von 1781"
            title="Deckblatt der ersten Ausgabe der Kritik der reinen Vernunft von 1781"
        />
    }

    return (
        <div className={styles["Welcome"]}>
            <h1>Lies die Kritik der reinen Vernunft!</h1>
            <div className={styles["welcome-text-cont"]}>
                {getImage(false)}
                <p>
                    Studiere Immanuel Kants berühmtestes Werk in deiner eigenen Geschwindigkeit – wann und wo immer du willst.
                    Mit detaillierten Lektürehinweisen und Quizzes, die dich Stück für Stück durch das schwierige Werk begleiten.
                    Zudem hast du Platz für deine eigenen Notizen und du behältst jederzeit deinen Lernfortschritt im Blick.
                </p>
                <p>
                    Der Kurs richtet sich an alle, die sich intensiv mit der <i>Kritik der reinen Vernunft</i> beschäftigen
                    wollen – egal, ob sie Philosophie studieren, aber dieses Werk nicht in der Lehre angeboten wird,
                    oder ob sie immer schon den Traum hatten, sich mit der "Kritik" zu befassen.
                </p>
                <div>
                    {getImage(true)}
                </div>
                <p>
                    Dies ist erst der Anfang. Doch wenn dieses E-Learning-Angebot fertiggestellt ist, dann soll es 18 Kapiteln bestehen,
                    die einer oder mehreren Lektionen bestehen, die jeweils mit einem Quiz abgeschlossen werden.
                    Zudem soll jedes Kapitel durch eine Übersicht mit relevanter Primär- und Sekundärliteratur abgeschlosssen werden.
                    Zu den Kapiteln sollen eine Auflistung von Ressourcen und Hilfmitteln und möglicherweuse weitere Materialien hinzukommen.
                </p>
            </div>
            <h2>Kursinhalt</h2>
            <div>{renderWelcomeTocSections()}</div>
        </div>
    )
}
