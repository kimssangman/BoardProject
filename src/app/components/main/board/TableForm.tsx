'use client'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { postList } from '@/services/board/postList';
import { useEffect, useState } from 'react';
import moment from 'moment';



export default function TableForm({ searchValue }: any) {
    const router = useRouter();
    const [post, setPost] = useState([]);
    const [filteredPost, setFilteredPost] = useState([]);

    useEffect(() => {
        getPostList();
    }, []);

    useEffect(() => {
        // 검색값이 변경될 때마다 데이터 필터링
        const filteredPost = post.filter((row: any) => row.title.includes(searchValue));
        // 필터링된 데이터 설정
        setFilteredPost(filteredPost);
    }, [searchValue, post]);

    const getPostList = async () => {
        try {
            const response = await postList();
            setPost(response); // 데이터를 변수에 저장
        } catch (error) {
            // 오류 처리
        }
    };

    // 게시글 상세보기
    const goPage = (item: any) => {
        router.replace(`/main/board/${item._id}`);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">번호</TableCell>
                        <TableCell align="center">제목</TableCell>
                        <TableCell align="right">등록일</TableCell>
                        <TableCell align="center">조회수</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredPost.map((row: any, index) => (
                        <TableRow onClick={() => goPage(row)} key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row" align="center">
                                {row.index}
                            </TableCell>
                            <TableCell align="left">{row.title}</TableCell>
                            <TableCell align="right">{moment(row.createdAt).format('YYYY-MM-DD HH:mm:ss')}</TableCell>
                            <TableCell align="center">{row.title}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
