import { getNextSequenceValue } from '@/lib/db/counter/counter.model';
import dbConnect from '@/lib/db/dbConnect';
import Board from '@/lib/db/board/Board.model';
import * as yup from 'yup';
import { NextResponse } from 'next/server'

const bodySchema = yup.object().shape({
    title: yup.string().required(),
    contents1: yup.string().required(),
    contents2: yup.string().required(),
});

export async function POST(req: Request, res: Response) {
    const body = await req.json();

    if (!bodySchema.isValidSync(body)) {
        return new Response(JSON.stringify({ message: '게시글 작성에 실패함!' }), {
            status: 400,
        });
    }

    try {
        /**--------------------------------------
        * 데이터 유효성 검사
        --------------------------------------*/
        await bodySchema.validate(body);

        /**--------------------------------------
        * 게시글 저장 처리 로직
        --------------------------------------*/
        await dbConnect();
        const { title, contents1, contents2 } = body;
        const index = await getNextSequenceValue("index");

        /**--------------------------------------
        * 저장
        --------------------------------------*/
        const savePost = new Board({ index, title, contents1, contents2 });
        await savePost.save();

        return new NextResponse(JSON.stringify({ message: '게시글 작성 성공함!' }), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: '게시글 작성 실패함!' }), {
            status: 500,
        });
    }
}