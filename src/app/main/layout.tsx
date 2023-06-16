import Provider from '@/context/Provider';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import MainBanner from '../components/layout/MainBanner';

import { Open_Sans } from 'next/font/google';




const sans = Open_Sans({ subsets: ['latin'] });


export const metadata = {
    title: {
        default: '김상민',
        template: '김상민 | %s'
    },
    description: '풀스택 개발자 김상민',
    icons: {
        icon: '/favicon.ico',
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={sans.className}>
            <body className='flex flex-col w-full max-w-screen mx-auto'>
                {/* provider를 사용하여 전역변수 사용하기 */}
                <Provider>
                    <Header />
                    <MainBanner />
                    <main className='grow bg-gray-50'>{children}</main>
                    <Footer />
                </Provider>
            </body>
        </html>
    )
}
