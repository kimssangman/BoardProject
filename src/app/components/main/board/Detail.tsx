'use client'

import React, { useEffect, useState } from 'react';

import { detailPost } from '@/services/board/detail';


interface Post {
    title: string;
    contents1: string;
    contents2: string;
}


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
            console.log(response);
        } catch (error) {
            // 오류 처리
        }
    };




    return (
        <section>
            {response && (
                <>
                    <div>{response.title}</div>
                    <div>{response.contents1}</div>
                    <div>{response.contents2}</div>
                </>
            )}
        </section>
    );


}
