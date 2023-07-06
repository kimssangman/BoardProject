import dbConnect from '@/lib/db/dbConnect';
import Board from '@/lib/db/board/Board.model';
import { NextResponse } from 'next/server'

export async function GET(response: NextResponse) {

    try {

        /**--------------------------------------
        * 게시글 목록 가져오기
        --------------------------------------*/
        await dbConnect();

        const board = await Board.aggregate([
            {
                $project: {
                    index: 1,
                    title: 1,
                    contents1: 1,
                    contents2: 1,
                    createdAt: 1
                }
            },
            {
                $sort: {
                    index: -1
                }
            }
        ])


        if (board) {
            return new NextResponse(JSON.stringify(board), {
                status: 200,
            });
        }
    }
    catch (error) {
        return new NextResponse(JSON.stringify({ message: '게시글 가져오기 실패!', state: 'error' }), {
            status: 405,
        });
    }
}