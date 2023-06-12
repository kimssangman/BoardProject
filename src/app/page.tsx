import Image from 'next/image'
import SignUp from './components/SignUpForm'
import Link from 'next/link'

export default function Home() {
    return (
        <section className='flex justify-center items-center w-screen h-screen'>
            <div>
                <Link href='/signUp' className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>회원가입 이동 버튼</Link>
            </div>

        </section>
    )
}
