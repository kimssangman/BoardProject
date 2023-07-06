// /**--------------------------------------------
//  * token 발행을 NextAuth 방식으로 하기 때문에
//  * 현재는 사용 안 함
//  --------------------------------------------*/


// import dbConnect from '@/lib/db/dbConnect';
// import User from '@/lib/db/user/user.model';
// import * as yup from 'yup';
// import { NextRequest, NextResponse } from 'next/server'


// const bodySchema = yup.object().shape({
//     id: yup.string().required(),
//     pw: yup.string().required(),
// });


// export async function POST(request: NextRequest) {
//     const id = request.nextUrl.searchParams.get('id')
//     const pw = request.nextUrl.searchParams.get('pw')

//     if (!bodySchema.isValidSync({ id: id, pw: pw })) {
//         return new Response(JSON.stringify({ message: '로그인에 실패함!' }), {
//             status: 400,
//         });
//     }

//     try {
//         /**--------------------------------------
//         * 데이터 유효성 검사
//         --------------------------------------*/
//         await bodySchema.validate({ id: id, pw: pw });

//         /**--------------------------------------
//         * 로그인 처리 로직
//         --------------------------------------*/
//         await dbConnect();

//         const user = await User.findOne({
//             id: id,
//         });

//         // password hash compare
//         const bcrypt = require('bcrypt');
//         try {
//             const isMatched = await bcrypt.compare(pw, user.pw);

//             if (isMatched) {
//                 /**--------------------------------------
//                 * jwt 로직
//                 --------------------------------------*/
//                 const jwt = require('jsonwebtoken');

//                 //id랑 name 넣고
//                 const payload = {
//                     _id: user._id,
//                     id: user.loginId,
//                     name: user.name,
//                     isAdmin: true,
//                 };

//                 const jwtOption = {
//                     expiresIn: "1d",
//                 };

//                 const token = jwt.sign(payload, process.env.JWT_SECRET, jwtOption);



//                 return new NextResponse(JSON.stringify({ message: '로그인에 성공함!', state: 'success', token, payload }), {
//                     status: 200,
//                 });
//             } else {
//                 return new NextResponse(JSON.stringify({ message: '로그인 실패!', state: 'error' }), {
//                     status: 401,
//                 });
//             }


//         } catch (err) {
//             console.error(err);
//             // 오류 처리 로직
//             return new NextResponse(JSON.stringify({ message: '로그인 실패!', state: 'error' }), {
//                 status: 401,
//             });
//         }
//     } catch (error) {
//         return new NextResponse(JSON.stringify({ message: '로그인 실패!', state: 'error' }), {
//             status: 405,
//         });
//     }
// }