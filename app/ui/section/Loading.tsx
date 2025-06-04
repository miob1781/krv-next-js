import Image from "next/image"
import ApprehensionImage from "@/app/images/Hagemann-Kant.png"
import styles from "@/app/ui/section/Loading.module.css"

/** loading screen */
export default function Loading() {
    return (
        <div className={styles["Loading"]}>
            <div className={styles["loading-inner-cont"]}>
                <Image src={ApprehensionImage} alt="" />
                <p>Synthesis der Apprehension...</p>
            </div>
        </div>
    )
}