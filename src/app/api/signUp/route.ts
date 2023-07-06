import dbConnect from '@/lib/db/dbConnect';
import User from '@/lib/db/user/user.model';
import * as yup from 'yup';
import { NextResponse } from 'next/server'

const bodySchema = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    pw: yup.string().required(),
});

export async function POST(req: Request, res: Response) {
    const body = await req.json();

    if (!bodySchema.isValidSync(body)) {
        return new Response(JSON.stringify({ message: '회원가입에 실패함!' }), {
            status: 400,
        });
    }

    try {
        /**--------------------------------------
        * 데이터 유효성 검사
        --------------------------------------*/
        await bodySchema.validate(body);

        /**--------------------------------------
        * 회원가입 처리 로직
        --------------------------------------*/
        await dbConnect();
        const { id, name, pw } = body;

        /**--------------------------------------
        * password 해싱
        --------------------------------------*/
        const bcrypt = require('bcrypt');
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(pw, salt);

        /**--------------------------------------
        * 저장
        --------------------------------------*/
        const signUp = new User({ id, name, pw: hashedPass });
        await signUp.save();

        return new NextResponse(JSON.stringify({ message: '회원가입에 성공함!' }), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: '회원가입에 실패함!' }), {
            status: 500,
        });
    }
}