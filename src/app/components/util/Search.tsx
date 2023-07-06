import React, { useState } from 'react';

/**----------------------------------------------
 * Search bar의 데이터 감지해서 TableForm.tsx로 넘기기
 * 
 * 1. Search bar에 입력값 상태를 관리하도록 useState 훅을 사용
 * 2. 부모 컴포넌트로 전달(Search.tsx -> Board.tsx)
 * 3. Board 컴포넌트에서 searchValue 상태를 관리하고, 이를 TableForm 컴포넌트로 전달
 * 4. TableForm 컴포넌트에서 검색값을 받아와 필터링하여 데이터를 표시
 ----------------------------------------------*/
export default function Search({ onSearch }: any) {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e: any) => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSearch(searchValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div className="flex">
                    <div className="flex rounded-md overflow-hidden w-[100%]">
                        <input
                            type="text"
                            placeholder='제목을 입력하세요.'
                            className="w-full rounded-md rounded-r-none"
                            value={searchValue}
                            onChange={handleInputChange}
                        />
                        <button className="bg-blue-500 text-white px-6 text-lg font-semibold py-1 rounded-r-md" type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
