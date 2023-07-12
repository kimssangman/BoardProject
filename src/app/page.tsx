import Image from 'next/image'
import SignUp from './components/login/SignUpForm'
import Link from 'next/link'

export default function Home() {
    return (
        <section className='flex justify-center items-center w-screen h-screen'>
            <div className='flex flex-col text-center border p-[50px] bg-white rounded-[40px] drop-shadow-xl'>
                <Image src="/images/login.png" width={200} height={200} alt="logo" className='m-auto drop-shadow-xl' />
                <Link href='/signIn' className='border hover:bg-yellow-400 rounded-xl py-1 px-4 mt-8 drop-shadow-xl border-yellow-300 bg-yellow-400'>로그인</Link>
                <Link href='/signUp' className='border hover:bg-gray-200 rounded-xl py-1 px-4 mt-3 drop-shadow-xl'>비회원 로그인</Link>
            </div>

        </section>
    )
}
