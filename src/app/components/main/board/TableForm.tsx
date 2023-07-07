'use client'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/navigation';
import { postList } from '@/services/board/postList';
import { useEffect, useState } from 'react';
import moment from 'moment';



export default function TableForm({ searchValue }: any) {
    const router = useRouter();
    const [post, setPost] = useState([]);
    const [filteredPost, setFilteredPost] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        getPostList();
    }, []);



    useEffect(() => {
        // 검색값이 변경될 때마다 데이터 필터링
        const filteredPost = post.filter((row: any) =>
            row.title.includes(searchValue)
        );
        // 필터링된 데이터 설정
        setFilteredPost(filteredPost);
        setCurrentPage(1); // 검색값 변경 시 현재 페이지를 1로 초기화
    }, [searchValue, post]);



    const getPostList = async () => {
        try {
            // api를 다이나믹으로 쓰려면 cache 옵션을 쓰라는데.....
            // const response = await (await fetch('/api/board', { cache: 'no-store' })).json();

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

    // 페이지 변경 시 실행되는 함수
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // 필터링된 게시물 목록에서 현재 페이지에 해당하는 항목들을 반환하는 함수
    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredPost.slice(startIndex, endIndex);
    };

    // 페이지 번호 목록을 반환하는 함수
    const getPageNumbers = () => {
        const totalPages = Math.ceil(filteredPost.length / itemsPerPage);
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    };

    return <section>
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
                    {getCurrentPageItems().map((row: any, index) => (
                        <TableRow
                            onClick={() => goPage(row)}
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
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

        <div className="flex justify-center mt-4">
            {getPageNumbers().map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    disabled={pageNumber === currentPage}
                    className={`mr-2 px-4 py-2 rounded ${pageNumber === currentPage
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-700'
                        }`}
                >
                    {pageNumber}
                </button>
            ))}
        </div>
    </section >



}
