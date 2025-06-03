import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import Image from "next/image"
import styles from "./NavBar.module.css"
import KantImage from "@/app/images/Kant-image.jpg";

interface Props {
    small?: boolean
}

/** navbar with icons linking to start page and account page */
export default function NavBar({ small = false }: Props) {
    return (
        <div className={styles["nav-cont"]}>
            <nav className={small ? `${styles["NavBar"]} ${styles["small"]}` : styles["NavBar"]}>
                <Link href="/" title="Zur Startseite">
                    <FontAwesomeIcon className={styles["home-icon"]} icon={faHouse} />
                </Link>
                <Link href="/account" title="Zum Account">
                    <FontAwesomeIcon className={styles["account-icon"]} icon={faUser} />
                </Link>
            </nav>
            {small && <Image
                className={`${styles["kant-image"]} ${styles["small"]}`}
                src={KantImage}
                alt="Immanuel Kant"
                title="Immanuel Kant"
            />}
        </div>
    )
}