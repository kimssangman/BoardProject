'use client'

import React from 'react'
import TableForm from './TableForm'
import WriteButton from './WriteButton'

export default function Board() {
    return <section >

        <div style={{ maxWidth: 1200, marginInline: "auto", padding: '40px 20px 20px 20px' }}>
            <div>
                <WriteButton />
            </div>
            <TableForm />
        </div>

    </section>
}
