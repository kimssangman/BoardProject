/**--------------------------------------------
 * token 발행을 NextAuth 방식으로 하기 때문에
 * 현재는 사용 안 함
 --------------------------------------------*/


// 'use client'

// import { useRouter } from 'next/navigation';
// import React, { ChangeEvent, FormEvent, useState } from 'react'
// import Banner, { BannerData } from './Banner';
// import Link from 'next/link';
// import { signIn } from '@/services/login/signIn';


// type Form = {
//     id: string,
//     pw: string
// }


// export default function SignInForm() {
//     // 라우팅
//     const router = useRouter();



//     const [form, setForm] = useState<Form>({
//         id: '',
//         pw: '',
//     })

//     // 배너
//     const [banner, setBanner] = useState<BannerData | null>(null);


//     const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setForm(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     }

//     const onSubmit = (e: FormEvent) => {
//         e.preventDefault();

//         // 로그인
//         signIn(form)
//             .then((res) => {
//                 setBanner({ message: res.message, state: res.state })
//                 if (res.state === 'success') {
//                     localStorage.setItem('token', res.token)
//                     setTimeout(() => {
//                         // 라우팅
//                         router.replace("/");
//                     }, 1000)
//                 } else {
//                     setTimeout(() => {
//                         setBanner(null);
//                     }, 1000)
//                 }
//             })
//             .catch(() => {
//                 setBanner({ message: '전송실패!', state: 'error' });
//             })
//     }





//     return <section className='flex justify-center items-center w-screen h-screen'>
//         <div>
//             {banner && <Banner banner={banner} />}

//             <form onSubmit={onSubmit} className='w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white'>
//                 <p className='text-center'>로그인</p>
//                 <span className='w-full border-2'></span>
//                 {/* id */}
//                 <label htmlFor="id" className='font-semibold'>Id</label>
//                 <input className='text-black' type="text" id='id' name="id" required autoFocus value={form.id} onChange={onChange} />
//                 {/* pw */}
//                 <label htmlFor="pw" className='font-semibold'>PW</label>
//                 <input className='text-black' type="password" id='pw' name="pw" required autoFocus value={form.pw} onChange={onChange} />
//                 <button className='bg-yellow-300 text-black font-bold mt-5 hover:bg-yellow-400'>로그인</button>
//                 <Link href='/' className='bg-green-300 text-black font-bold hover:bg-green-400 text-center'>돌아가기</Link>
//             </form>
//         </div>
//     </section>
// }



