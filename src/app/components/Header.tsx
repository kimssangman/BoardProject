import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className='flex justify-between items-center p-5 pl-20 bg-lime-600'>
            <Link href={"/"}>
                <h4 className='text-2xl font-bold'>{"김상민"}</h4>
            </Link>
            <nav className='flex gap-4 bg-slate-200'>
                <Link href='/'>home</Link>
                <Link href='/about'>about</Link>
                <Link href='/posts'>posts</Link>
                <Link href='/contact'>contact</Link>
            </nav>
        </header>
    )
}
