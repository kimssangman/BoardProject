'use client'

import usePath from "@/data/use-path";
import { useEffect } from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
    const { pathData } = usePath();

    useEffect(() => {
        if (pathData !== undefined && pathData === true) {
            console.log('not defined provider >>>', pathData)
        }
    }, [pathData])

    return (<>{children}</>)
}