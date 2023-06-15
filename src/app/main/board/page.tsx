import BoardList from '@/app/components/main/board/BoardList';
import React from 'react'

export default function BoardPage() {
    return (
        <section style={{ maxWidth: 1200, marginInline: "auto", padding: 20, background: 'blue' }}>

            <BoardList />

        </section>
    );
}
