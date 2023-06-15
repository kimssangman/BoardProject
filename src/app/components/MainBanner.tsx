'use client'

import React, { useEffect, useState } from 'react'
import MainBanner_button from './MainBanner_button';
import { useRouter } from "next/navigation";


export default function MainBanner() {
    const router = useRouter();
    const [title, setTitle] = useState({ title: '대시보드', path: '' })


    const HandleDataFromChild = (childData: any) => {
        setTitle(childData);
        console.log('childData title >>> ', childData)

        router.push(childData.path);
    };




    return (
        <header className="relative mt-[85px]">
            <div className="absolute inset-0 h-[220px]">
                <img
                    className="w-full h-full object-cover "
                    src="/images/meeting.jpg"
                    alt="Background Image"
                />
            </div>
            <div className="relative bg-opacity-75 bg-gray-300 pt-8 pb-3 h-[220px]">
                <div className="m-auto mx-auto px-4 text-center">
                    <div>
                        <h1 className="text-5xl font-bold">{title.title}</h1>
                        <p className="text-lg mt-4">{title.title} 페이지입니다.</p>
                    </div>

                </div>
                <div className='mt-12 flex justify-center'>
                    <MainBanner_button onData={HandleDataFromChild} selected={title} />
                </div>
            </div>
        </header>
    );

}
