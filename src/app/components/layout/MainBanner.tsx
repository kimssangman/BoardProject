'use client'

import React, { useState } from 'react'
import MainBanner_button from './MainBanner_button';
import { useRouter, usePathname } from "next/navigation";




export default function MainBanner() {
    const router = useRouter();
    const [title, setTitle] = useState({ title: '대시보드', path: '/main' })

    /**------------------------------
     * 현재 라우팅 path를 확인
     ------------------------------*/
    const pathName = usePathname()

    const buttonList = [
        { title: '대시보드', path: '/main' },
        { title: '게시판', path: '/main/board' },
        { title: '정보', path: '/main/information' },
        { title: '실적', path: '/main/board' },
        { title: '홍보자료', path: '/main/information' },
        { title: '게시글 작성', path: '/main/board/write' },
    ];

    const description = buttonList.filter(item => item.path === pathName)

    const HandleDataFromChild = (childData: any) => {
        setTitle(childData);
        console.log('자식에게 받은 data {title, path}  >>> ', childData)


        router.replace(childData?.path);
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
            <div className="relative bg-opacity-75 bg-gray-300 pt-6 h-[220px]">
                <div className="m-auto mx-auto px-4 text-center">
                    {
                        description.length > 0 ?
                            (<div>
                                <h1 className="text-5xl font-bold">{description[0]?.title}</h1>
                                <p className="text-lg mt-4">{description[0]?.title} 페이지입니다.</p>
                            </div>)
                            :
                            (<div>
                                <h1 className="text-5xl font-bold">상세 페이지</h1>
                                <p className="text-lg mt-4">상세 페이지입니다.</p>
                            </div>)
                    }


                </div>
                <div className='mt-[60px] flex justify-center'>
                    <MainBanner_button onData={HandleDataFromChild} selected={title} />
                </div>
            </div>
        </header>
    );

}