'use client'


import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Link from 'next/link';
import { writePost } from '@/services/board/writePost';


type Form = {
    title: string,
    contents1: string,
    contents2: string,
}



export default function WriteForm() {


    // 라우팅
    const router = useRouter();



    const [form, setForm] = useState<Form>({
        title: '',
        contents1: '',
        contents2: ''
    })


    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        // 게시글 작성
        writePost(form)
            .then((res: any) => {
                // 라우팅
                router.replace("/main/board");

            })
            .catch(() => {

            })
    }






    return <section className='flex justify-center items-center w-screen'>
        <div>
            <form onSubmit={onSubmit} className='w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white'>
                {/* <p className='text-center'>게시글</p> */}
                <span className='w-full border-2'></span>
                {/* title */}
                <label htmlFor="title" className='font-semibold'>제목</label>
                <input className='text-black' type="text" id='title' name="title" required autoFocus value={form.title} onChange={onChange} />
                {/* contents1 */}
                <label htmlFor="contents1" className='font-semibold'>항목</label>
                <input className='text-black' type="text" id='contents1' name="contents1" required autoFocus value={form.contents1} onChange={onChange} />
                {/* contents2 */}
                <label htmlFor="contents2" className='font-semibold'>내용</label>
                <textarea className='text-black' id='contents2' name='contents2' required autoFocus value={form.contents2} onChange={onChange} />
                <button className='bg-yellow-300 text-black font-bold mt-5 hover:bg-yellow-400'>작성</button>
                <Link href='/main/board' className='bg-green-300 text-black font-bold hover:bg-green-400 text-center'>돌아가기</Link>
            </form>
        </div>
    </section>
}
