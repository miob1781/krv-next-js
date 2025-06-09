"use client"
import { PropsWithChildren, useContext } from "react";
import { usePathname } from "next/navigation";
import Account from "../ui/account/Account";
import { AuthContext } from "../context/auth.context";
import { AuthContextTypes } from "../types";
import Loading from "./loading";

export default function SectionLayout({ children }: PropsWithChildren) {
    const { isLoggedIn, isLoading } = useContext(AuthContext) as AuthContextTypes;
    const section: string = usePathname();
    const splittedPathname = section.split('-');
    const isLesson: boolean = splittedPathname.length === 3;
    
    if (isLoading) return <Loading />

    if (isLesson && !isLoggedIn) {
        return <Account section={section} />
    } else {
        return children;
    }
}