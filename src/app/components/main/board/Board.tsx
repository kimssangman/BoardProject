'use client'

import React, { useState } from 'react';
import TableForm from './TableForm';
import WriteButton from './WriteButton';
import Search from './../../util/Search';


export default function Board() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value: any) => {
        setSearchValue(value);
    };

    return (
        <section>
            <div style={{ maxWidth: 1200, marginInline: 'auto', padding: '40px 20px 20px 20px' }}>
                <div className="flex justify-between">
                    <Search onSearch={handleSearch} />
                    <WriteButton />
                </div>
                <TableForm searchValue={searchValue} />
            </div>
        </section>
    );
}
