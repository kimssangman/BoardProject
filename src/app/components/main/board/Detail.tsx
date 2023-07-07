'use client'

import React, { useEffect, useState } from 'react';
import { CodeBlock, dracula } from "react-code-blocks";

import { detailPost } from '@/services/board/detail';



interface Post {
    title: string;
    contents1: string;
    contents2: string;
}

type Theme = {
    // Other properties...
    mode?: string;
    // Other properties...
};


export default function Detail(props: any) {
    const [post, setPost] = useState<Post | null>(null);
    const response = post;



    useEffect(() => {
        getPostList();
    }, []);


    const getPostList = async () => {
        try {
            const response: any = await detailPost(props.pageId);
            setPost(response);
        } catch (error) {
            // 오류 처리
        }
    };


    /**--------------------------------------------
     * Code Block 사용하기
     * 
     * npm i react-code-blocks
     * 
     * https://www.npmjs.com/package/react-code-blocks
     --------------------------------------------*/


    return (
        <section>
            {response && (
                <>
                    <div>
                        <div>{response.title}</div>
                        <div>{response.contents1}</div>

                        <CodeBlock
                            text={response.contents2}
                            language='python'
                            showLineNumbers={true}
                            startingLineNumber={1} // startingLineNumber 속성 추가
                            wrapLongLines={false} // wrapLongLines 속성 추가
                            theme={{ ...dracula, mode: 'dark' }}
                        />
                    </div>

                </>
            )}
        </section>
    );


}
