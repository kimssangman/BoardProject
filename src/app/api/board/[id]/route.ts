import dbConnect from '@/lib/db/dbConnect';
import Board from '@/lib/db/board/Board.model';
import { NextRequest, NextResponse } from 'next/server'
import { useSearchParams } from 'next/navigation';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {


    console.log('params 정보 >>> ', params.id)

    try {

        /**--------------------------------------
        * 게시글 상세보기
        --------------------------------------*/
        await dbConnect();

        const board = await Board.findOne({
            _id: params.id
        });

        console.log(board)

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