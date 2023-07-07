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



/**------------------------------------------
 * GET 경로 처리기는 객체 와 함께 메서드를 사용할 때 기본적으로 정적으로 만들어지기 때문에
 * 
 * 동적으로 데이터를 받을 때 눈속임으로 POST로 만들어준다..
 * 그럴거면 POST 쓰지 왜....
 ------------------------------------------*/
export async function POST() { }