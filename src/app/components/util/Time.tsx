'use client'

import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Time() {
    const [date, setDate] = useState<Date>();

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatDateString = (date: Date) => {
        const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
        const formattedDate = `${date.getFullYear()}.${(
            "0" + String(date.getMonth() + 1)
        ).slice(-2)}.${("0" + String(date.getDate())).slice(-2)} (${daysOfWeek[date.getDay()]
            }) ${("0" + String(date.getHours())).slice(-2)}:${(
                "0" + String(date.getMinutes())
            ).slice(-2)}:${("0" + String(date.getSeconds())).slice(-2)}`;

        return formattedDate;
    };

    return (
        <>
            {date ? (<>{formatDateString(date)}</>) : (<Loading />)}
        </>
    );
}
