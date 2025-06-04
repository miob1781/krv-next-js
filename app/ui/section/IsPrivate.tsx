"use client"
import { JSX, PropsWithChildren, useContext } from "react"
import { redirect, usePathname } from "next/navigation"
import { AuthContext } from "@/app/context/auth.context"
import { AuthContextTypes } from "@/app/types"
import Loading from "./Loading"


/** component called when user switches to a lesson route */
export default function IsPrivate({ children }: PropsWithChildren) {
    const { isLoggedIn, isLoading } = useContext(AuthContext) as AuthContextTypes;
    const pathname = usePathname();
    const splittedPathname = pathname.split('-');
    const isLesson: boolean = splittedPathname.length === 3;

    if (isLoading) return <Loading />
    if (isLesson && !isLoggedIn) {
        redirect(`/account?section=${splittedPathname[1]}-${splittedPathname[2]}`)
    } else {
        return children as JSX.Element
    }
}