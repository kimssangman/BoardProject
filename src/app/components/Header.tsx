'use client'

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

export default function Header() {
    const handleSignOut = () => {
        signOut();
    };

    return (
        <header className="fixed z-10 border-b border-[#ddd] h-[85px] w-screen leading-[85px] bg-white">
            <h1 className="inline-block absolute left-[6%] text-cyan-700 font-bold">
                <Link href={"/"}>김상민</Link>
            </h1>
            <div className="max-w-screen-xl mx-auto px-14">
                <nav className="float-right px-4 sm:px-0">
                    <button onClick={handleSignOut}>로그아웃</button>
                </nav>
            </div>
        </header>
    );
}
