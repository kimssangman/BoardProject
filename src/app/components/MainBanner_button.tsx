'use client'

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'



// selected props를 같이 넘겨주려다가 그냥 item과 title이 같은 것을 찾았음
export default function MainBanner_button(props: any, selected: any) {



    /**------------------------------
     * 현재 라우팅 path를 확인하여 /main일 경우
     * mainBanner_button li의 색상 변경하기 위한 코드
     ------------------------------*/
    const pathName = usePathname()
    useEffect(() => {
        if (pathName === '/main') {
            setPageData({ title: '대시보드', path: 'main' })
        }
    }, [pathName]);


    const [pageData, setPageData] = useState({ title: '대시보드', path: '/main' });
    const buttonList = [
        { title: '대시보드', path: 'main' },
        { title: '게시판', path: 'main/board' },
        { title: '정보', path: 'main/information' },
        { title: '실적', path: 'main/board' },
        { title: '홍보자료', path: 'main/information' }
    ];


    /**--------------------------------------
     * 자식 컴포넌트 -> 부모 컴포넌트 데이터 전달
     * 
     * 자식 컴포넌트 : props.onData를 사용하여 값을 넘긴다
     * 부모 컴포넌트 : <ChildComponent onData={HandleDataFromChild}></ChildComponent> 부모 handler로 데이터 처리
     --------------------------------------*/
    useEffect(() => {
        // 콜백 함수를 호출하여 데이터를 전달
        props.onData(pageData);
    }, [pageData]);





    return (
        <ul className='flex text-2xl gap-28'>
            {
                buttonList.map((item, index) => (
                    <li className={`px-8 bg-slate-50 border-sky-500 cursor-pointer ${pageData.title === item.title && 'bg-slate-500'}`} key={index} onClick={() => setPageData({ title: item.title, path: item.path })}>{item.title}</li>
                ))
            }
        </ul>
    )
}