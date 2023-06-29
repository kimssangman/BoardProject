'use client'

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Time from '../util/Time';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useRecoilState } from 'recoil';
import { textState } from '@/recoil/atoms/states';

export default function Header(props: any) {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const dropdownRef = useRef<HTMLDivElement | null>(null);


    /**----------------------------
     * 사용자 session 확인
     ----------------------------*/
    const session: any = useSession();

    console.log('          ')
    console.log('main/page.ts 유저 토큰 정보');
    console.log(session);
    console.log('------------------------------')


    useEffect(() => {
        setIsOpen(false);
    }, []);


    /**--------------------------------------------------------------------
     * 상민
     * useRef를 사용하여 dropdown의 DOM 요소에 대한 참조를 생성하고 
     * useEffect에서 mousedown 이벤트를 등록, mousedown 이벤트가 발생하면
     * dropdown을 클릭한 경우에는 isOpen 값을 변경하지 않고, 
     * dropdown 외부를 클릭한 경우에는 isOpen 값을 false로 변경
     * 이후 useEffect의 clean-up 함수에서 이벤트 리스너를 제거
    --------------------------------------------------------------------*/
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);



    const handleSignOut = () => {
        signOut();
        router.push("/signIn");
    };

    return (
        <header className="fixed z-10 border-b border-[#ddd] h-[85px] w-screen leading-[85px] bg-white" >
            <div className="max-w-screen-2xl mx-auto">
                <Link href="/main" className="float-left inline-flex absolute left-[6%]">
                    <Image src="/images/profile.png" width={30} height={40} alt="logo" className="pt-[10px]" />
                    <span>반갑습니다</span>
                </Link>

                <nav className="w-[630px] float-right">
                    <p className="w-[230px] float-left border-r border-borderColor mx-5">
                        <Time />
                    </p>
                    <div ref={dropdownRef} className="relative inline-block text-left">
                        <div onClick={toggleDropdown} className="cursor-pointer">
                            <Image src="/images/profile.png" width={30} height={30} alt="user" className="inline-block ml-[40px]" />
                            <span className="ml-[20px]">{session?.data?.user.name} 님</span>
                        </div>

                        {isOpen && (
                            <div
                                className="absolute divide-y divide-gray-100 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                            >
                                <div className="px-4 py-3 text-sm text-gray-700 leading-6">
                                    <p>내정보</p>
                                    {/* <p className="font-medium truncate">{user?.email}</p> */}
                                </div>
                                <div className="py-1" role="none">
                                    <button
                                        onClick={handleSignOut}
                                        className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                        role="menuitem"
                                        id="menu-item-3"
                                    >
                                        Sign out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>

        // <header className="fixed z-10 border-b border-[#ddd] h-[85px] w-screen leading-[85px] bg-white">
        //     <h1 className="inline-block absolute left-[6%] text-cyan-700 font-bold ">
        //         <Link href={"/"} className='text-2xl'>반가워요</Link>
        //     </h1>
        //     <div className="max-w-screen-xl mx-auto px-14">
        //         <nav className="float-right px-4 sm:px-0">
        //             <button onClick={handleSignOut}>로그아웃</button>
        //         </nav>
        //     </div>
        // </header>
    );
}
