'use client'

import usePath from '@/data/use-path';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'



// selected props를 같이 넘겨주려다가 그냥 item과 title이 같은 것을 찾았음
export default function MainBanner_button(props: any, selected: any) {

    /**------------------------------
     * 현재 라우팅 path를 확인
     ------------------------------*/
    const pathName = usePathname()

    const buttonList = [
        { title: '대시보드', path: '/main' },
        { title: '게시판', path: '/main/board' },
        { title: '정보', path: '/main/information' },
        { title: '실적', path: '/main/performance' },
        { title: '자료', path: '/main/data' }
    ];


    /**------------------------------
     * Provider 사용하여 cache 된 Data 사용하기
     ------------------------------*/
    const { pathData, mutate } = usePath();
    useEffect(() => {
        // console.log('mainBanner >>>>>>>', pageData)
        console.log('mainBanner >>>>>>>', pathData)
    }, []);


    /**--------------------------------------
     * 자식 컴포넌트 -> 부모 컴포넌트 데이터 전달
     * 
     * 자식 컴포넌트 : props.onData를 사용하여 값을 넘긴다
     * 부모 컴포넌트 : <ChildComponent onData={HandleDataFromChild}></ChildComponent> 부모 handler로 데이터 처리
     --------------------------------------*/
    // useEffect(() => {

    //     // 콜백 함수를 호출하여 데이터를 전달
    //     props.onData(pageData);

    // }, [pageData]);




    return (
        <ul className='flex text-xl gap-1'>
            {
                buttonList.map((item, index) => (
                    // className={`${isClicked ? '클릭 시 추가되길 원하는 클래스명' : ''} 클릭여부 관계없이 필요한 클래스명들`}
                    <li className={`${pathName === item.path ? 'bg-gray-50' : 'bg-gray-900 bg-opacity-50 text-white'} px-[84.5px] py-2  cursor-pointer`} key={index} onClick={() => props.onData({ title: item.title, path: item.path })}>{item.title}</li>
                ))
            }
        </ul>
    )
}