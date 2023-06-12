import Image from 'next/image'
import SignUp from './components/SignUpForm'
import Link from 'next/link'

export default function Home() {
    return (
        <section className='flex justify-center items-center w-screen h-screen'>
            <div className='flex flex-col text-center'>
                <Link href='/signIn' className='bg-green-500 font-bold hover:bg-green-400 rounded-xl py-1 px-4 mt-2'>로그인 버튼</Link>
                <Link href='/signUp' className='bg-yellow-500 font-bold hover:bg-yellow-400 rounded-xl py-1 px-4 mt-2'>회원가입 버튼</Link>
            </div>

        </section>
    )
}
