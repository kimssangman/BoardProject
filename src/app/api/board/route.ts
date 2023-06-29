import dbConnect from '@/lib/db/dbConnect';
import Board from '@/lib/db/board/Board.model';
import { NextResponse } from 'next/server'

export async function GET(response: NextResponse) {

    try {

        /**--------------------------------------
        * 게시글 목록 가져오기
        --------------------------------------*/
        await dbConnect();

        const board = await Board.find();

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