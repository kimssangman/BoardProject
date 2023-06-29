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


function createData(
    index: number,
    title: string,
    date: string,
    views: number,
) {
    return { index, title, date, views };
}

const rows = [
    createData(5, '흑석 한강 센트레빌 입주', '2023.07.07', 5),
    createData(4, '굿디자인 4건 선정', '2023.05.02', 37),
    createData(3, '해상풍력발전사업 진출 본격 시동', '2023.02.04', 5),
    createData(2, '전세 사기 급증', '2023.01.09', 11),
    createData(1, '한국도로공사 최우수현장 선정', '2023.01.01', 9),
];



export default function TableForm() {
    const router = useRouter();

    const [post, setPost] = useState([]);

    useEffect(() => {
        getPostList();
    }, []);

    const getPostList = async () => {
        try {
            const response = await postList();
            setPost(response); // 데이터를 변수에 저장

            console.log(response); // 업데이트된 데이터 확인
        } catch (error) {
            // 오류 처리
        }
    };


    // 게시글 상세보기
    const goPage = (item: any) => {
        router.replace(`/main/board/${item._id}`)
    }



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
                    {post.map((row: any, index) => (
                        <TableRow onClick={() => goPage(row)} key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row" align="center">
                                {index}
                            </TableCell>
                            <TableCell align="left">{row.title}</TableCell>
                            <TableCell align="right">{row.updatedAt}</TableCell>
                            <TableCell align="center">{row.title}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}