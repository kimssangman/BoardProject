'use client';

import { signUp } from '@/services/login/signUp';
import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Banner, { BannerData } from '../util/Banner';
import { useRouter } from "next/navigation";




type Form = {
    id: string,
    name: string,
    pw: string
}

export default function SignUpForm() {
    // 라우팅
    const router = useRouter();

    // 세팅
    const [form, setForm] = useState<Form>({
        id: '',
        name: '',
        pw: ''
    })

    // default_data
    const default_data = {
        id: '',
        name: '',
        pw: ''
    }

    // 배너
    const [banner, setBanner] = useState<BannerData | null>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 회원가입
        signUp(form)
            .then(() => {
                setBanner({ message: '회원가입 성공!', state: 'success' })
                // 초기화
                setForm(default_data)
                setTimeout(() => {
                    // 라우팅
                    router.replace("/");
                }, 2000)
            })
            .catch(() => {
                setBanner({ message: '전송실패!', state: 'error' });
            })
    }




    return <section className='flex justify-center items-center w-screen h-screen'>
        <div>
            {banner && <Banner banner={banner} />}

            <form onSubmit={onSubmit} className='w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white'>
                <p className='text-center'>회원가입</p>
                <span className='w-full border-2'></span>
                {/* id */}
                <label htmlFor="id" className='font-semibold'>Id</label>
                <input type="text" id='id' name='id' required autoFocus value={form.id} onChange={onChange} className='text-black' />
                {/* name */}
                <label htmlFor="name" className='font-semibold'>Name</label>
                <input type="text" id='name' name='name' required value={form.name} onChange={onChange} className='text-black' />
                {/* pw */}
                <label htmlFor="pw" className='font-semibold'>PW</label>
                <input type="password" id='pw' name='pw' required value={form.pw} onChange={onChange} className='text-black' />
                <button className='bg-yellow-300 text-black font-bold mt-5 hover:bg-yellow-400'>회원가입</button>
                <Link href='/' className='bg-green-300 text-black font-bold hover:bg-green-400 text-center'>돌아가기</Link>
            </form>
        </div>
    </section >

}
