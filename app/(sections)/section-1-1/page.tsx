"use client"
import Lesson from "@/app/ui/section/Lesson";
import LessonListEl from "@/app/ui/section/LessonListEl";
import { quiz_1_1 } from "@/app/quizzes/quiz-1-1";
import { getLessonData } from "@/app/utils/helpers";

export default function Section_1_1() {
    return (
        <Lesson lessonData={getLessonData('1-1')} quiz={quiz_1_1}>
            <LessonListEl paragraphId="1-1-1">
                In vielen Ausgaben ist der Text der ersten Auflage links und der Text der zweiten Auflage rechts abgedruckt.
                Das liegt daran, dass Kant die Einleitung bei der zweiten Auflage gründlich überarbeitet und ergänzt hat.
            </LessonListEl>
            <LessonListEl paragraphId="1-1-2">
                Denke daran: Die Seitenzahlen der ersten Auflage werden mit „A“ und die der zweiten mit „B“ angeführt.
                Es ist gute Praxis, beide Seitenzahlen (man nennt sie auch „Paginierungen“) anzugeben,
                wenn eine Textstelle in beiden Auflagen vorkommt.
                Zum Beispiel ist der Satz: <i>„Gedanken ohne Inhalt sind leer,
                    Anschauungen ohne Begriffe sind blind“</i>, bei A51/B75 zu finden.
                Das mag am Anfang mühsam erscheinen, aber man gewöhnt sich dran.
            </LessonListEl>
            <LessonListEl paragraphId="1-1-3" pageNumber="B1">
                <i>„Dass alle unsere Erkenntnis...“</i> – Unterscheidung zwischen Erkenntnis,
                die „mit“ der Erfahrung beginnt, und solcher, die „aus“ der Erfahrung entspringt.
                Nur letztere ist empirisch/a posteriori, weil bei ihr die Erfahrung die Quelle der Erkenntnis ist.
                Doch erstere ist nicht-empirisch/a priori, da man zwar erst mal Erfahrung braucht,
                um sich über diese Art der Erkenntnis Gedanken zu machen, ihre Quellen jedoch nicht in der Erfahrung liegen.
                Laut Kant hat sogar Erfahrung Elemente, die a priori erkannt werden.
            </LessonListEl>
            <LessonListEl paragraphId="1-1-4" isQuestion>
                Versuche, dadurch den Satz zu verstehen: <i>„Der Zeit nach geht also keine Erkenntnis in uns vor der Erfahrung vorher,
                    und mit dieser fängt alle an.“</i> (B1)
            </LessonListEl>
            <LessonListEl paragraphId="1-1-5" pageNumber="B2" isQuestion>
                Erkläre den Unterschied zwischen „a priori“ bzw. “nicht-empirisch“
                und „a posteriori“ bzw. „empirisch“ mit eigenen Worten.
                Ist Physik a priori oder a posteriori? Könnte sie vielleicht sogar von beidem etwas haben?
            </LessonListEl>
            <LessonListEl paragraphId="1-1-6">
                Übrigens bedeutet „a priori“ wörtlich „im Vorhinein“ und „a posteriori“ heißt „im Nachhinein“.
                Es ist in der Forschung umstritten,
                inwiefern „a priori“ mit „nicht-empirisch“ und „a posteriori“ mit „empirisch“ gleichzusetzen sind.
            </LessonListEl>
            <LessonListEl paragraphId="1-1-7" pageNumber="B2f.">
                Kant nennt eine Erkenntnis „schlechterdings“ (= völlig) a priori,
                wenn die Quelle überhaupt nicht in der Erfahrung liegt.
                Das Beispiel mit dem Haus ist nur im uneigentlichen Sinn a priori;
                denn man konnte aus den bekannten Naturgesetzen zwar ableiten, dass das Haus einstürzen würde,
                doch diese Gesetze kenne ich nur aus der Erfahrung.
                Kant bezeichnet diese Art der Erkenntnis gelegentlich als „comparative a priori“;
                doch in der Regel meint „a priori“, dass etwas völlig ohne Erfahrung erkannt wird.
            </LessonListEl>
            <LessonListEl paragraphId="1-1-8" pageNumber="B3-6">
                Kant stellt je zwei Eigenschaften von Erkenntnissen a priori und a posteriori dar.
                Erkenntnisse a priori haben Notwendigkeit und strenge Allgemeinheit,
                während Erkenntnisse a posteriori „zufällig“ (= kontingent) sind
                und nur über komparative Allgemeinheit durch Induktion (also Ableitung aus der Erfahrung) verfügen.
                Das heißt, Sätze, die a priori gelten,
                könnten nicht anders sein und sie gelten für alle Gegenstände, die darunter fallen.
                Beispiel: „Alle Veränderung hat eine Ursache“ könnte nicht anders sein und es gibt keine Veränderungen ohne Ursache.
                Hingegen kann ich bei dem empirischen Satz: „Alle Körper sind schwer“, nicht wissen,
                ob es nicht auch anders sein könnte und ob manche Körper keine Schwere haben.
            </LessonListEl>
            <LessonListEl paragraphId="1-1-9" pageNumber="A6f./B10f.">
                Für Kant haben die meisten Begriffe Teilbegriffe, die bei dem Begriff, in dem sie enthalten sind,
                mitgedacht werden – so zum Beispiel der Begriff „Ausdehnung“ in dem Begriff „Körper“.
                Daher ist das Urteil „Alle Körper sind ausgedehnt“ analytisch, weil in ihm bloß verdeutlicht wird,
                was in dem Begriff des Körpers dunkel gedacht worden ist.
                Das Urteil „Alle Körper sind schwer“ ist hingegen synthetisch,
                da Körper ohne den Begriff der Schwere gedacht werden und durch den bloßen Vergleich der Begriffe nicht festzustellen ist,
                ob das Urteil wahr ist.
            </LessonListEl>
            <LessonListEl paragraphId="1-1-10" isQuestion>
                Findest du weitere Beispiele für analytische und synthetische Urteile?
                Sind alle Urteile entweder analytisch oder synthetisch?
            </LessonListEl>
            <LessonListEl paragraphId="1-1-11" pageNumber="A9/B12-A10/B14" isQuestion>
                Erläutere, warum Kant bei synthetischen Urteilen a priori eine Schwierigkeit sieht,
                die es bei analytischen Urteilen oder synthetischen Urteilen a posteriori nicht gibt.
            </LessonListEl>
            <LessonListEl paragraphId="1-1-12" pageNumber="B14-17">
                Kant hält mathematische Urteile für synthetisch a priori.
                Hier ist nicht der Ort, um uns mit seiner Philosophie der Mathematik zu beschäftigen.
                Doch denke einen Augenblick über seine Behauptung nach, dass der Satz „7 + 5 = 12“ nicht analytisch, sondern synthetisch sei.
                Findest du das plausibel? Beziehe dich dabei auf Kants Definitionen von analytischen und synthetischen Urteilen.
            </LessonListEl>
            <LessonListEl paragraphId="1-1-13" pageNumber="A10/B24-A16/B29" isQuestion>
                Das Projekt einer Kritik der reinen Vernunft (welches dem Buch den Namen gibt)
                könnte auch als „Metaphilosophie“ bezeichnet werden, da hier die Vernunft über die eigenen Möglichkeiten und Grenzen richtet.
                Wie verhält sich dieses Projekt zu einer (von Kant nicht ausgeführten) Transzendentalphilosophie?
            </LessonListEl>
            <LessonListEl paragraphId="1-1-14" pageNumber="A11/B24">
                <i>„Inbegriff“</i> = Gesamtheit (aller Vorstellungen, aller Gegenstände, etc.)
            </LessonListEl>
            <LessonListEl paragraphId="1-1-15" pageNumber="A11/B24f.">
                <i>„Ein Organon der reinen Vernunft…“</i> – Eine Wissenschaft stellt ein Organon dar,
                wenn sie in der Lage ist, unsere Erkenntnisse zu erweitern.
                Im Gegensatz dazu enthält ein Kanon nicht Grundsätze zur Erweiterung der Erkenntnisse,
                sondern zum richtigen Gebrauch der Erkenntnisvermögen.
            </LessonListEl>
        </Lesson>
    )
}