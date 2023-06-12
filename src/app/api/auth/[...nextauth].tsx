// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import { connectDB } from "@/util/database";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import bcrypt from "bcrypt";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions = {
//     providers: [
//         GithubProvider({
//             clientId: "f999d91216b2be253700",
//             clientSecret: "289a3607579760c5c54c814612b7ec2f5fb66f10",
//         }),

//         CredentialsProvider({
//             //1. 로그인페이지 폼 자동생성해주는 코드
//             name: "credentials",
//             credentials: {
//                 email: { label: "email", type: "text" },
//                 password: { label: "password", type: "password" },
//             },

//             //2. 로그인요청시 실행되는코드
//             //직접 DB에서 아이디,비번 비교하고
//             //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
//             async authorize(credentials) {
//                 let db = (await connectDB).db("farm");
//                 let user = await db.collection("user_cred").findOne({ email: credentials?.email });
//                 if (!user) {
//                     console.log("해당 이메일은 없음");
//                     return null;
//                 }
//                 const pwcheck = await bcrypt.compare(credentials?.password, user.password);
//                 if (!pwcheck) {
//                     console.log("비번틀림");
//                     return null;
//                 }
//                 return user;
//             },
//         }),
//     ],

//     //3. jwt 써놔야 잘됩니다 + jwt 만료일설정
//     session: {
//         strategy: "jwt",
//         maxAge: 30 * 24 * 60 * 60, //30일
//     } as const,
//     // SessionStrategy 또는 undefined이어야 합니다. 따라서 session.strategy를 문자열 대신 올바른 유형으로 설정해야 합니다. 위의 코드에서 as const를 사용하여 session.strategy의 유형을 명시적으로 지정하고 있습니다. 이를 통해 타입 호환성 오류를 해결할 수 있습니다.
//     //as const는 TypeScript에서 리터럴 타입을 생성하기 위해 사용되는 문법입니다.

//     callbacks: {
//         //4. jwt 만들 때 실행되는 코드
//         //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
//         jwt: async ({ token, user }) => {
//             if (user) {
//                 token.user = {};
//                 token.user.name = user.name;
//                 token.user.email = user.email;
//             }
//             return token;
//         },
//         //5. 유저 세션이 조회될 때 마다 실행되는 코드
//         session: async ({ session, token }) => {
//             session.user = token.user;
//             return session;
//         },
//     },

//     secret: "qwer1234",
//     adapter: MongoDBAdapter(connectDB),
// };
// export default NextAuth(authOptions);
