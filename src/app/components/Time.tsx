'use client'

import { useEffect, useState } from "react"

export default function Time() {
    const [date, setDate] = useState<Date>();

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return <>{date ?
        <>{date.getFullYear()}
            .{("0" + String(date.getMonth() + 1)).slice(-2)}
            .{("0" + String(date.getDate())).slice(-2)} {("0" + String(date.getHours())).slice(-2)}:{("0" + String(date.getMinutes())).slice(-2)}:{("0" + String(date.getSeconds())).slice(-2)}</>
        :
        <>loading...</>}</>
}