import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react'

export default async function page() {
    const session = await getServerSession(authOptions);
    console.log('main/page>> ', session);
    return (
        <div>메인 페이지 입니닷</div>
    )
}
