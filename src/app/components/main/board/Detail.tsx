'use client'

import React from 'react'
import { useEffect, useState } from 'react';

import { detailPost } from '@/services/board/detail';
import { useRouter } from 'next/navigation';




export default function Detail(props: any) {
    const [post, setPost] = useState([]);

    useEffect(() => {

        getPostList();
    }, []);

    const getPostList = async () => {
        try {
            const response = await detailPost(props.pageId);
        } catch (error) {
            // 오류 처리
        }
    };




    return (
        <div>Detail</div>
    )
}
