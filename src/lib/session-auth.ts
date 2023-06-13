import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from '@/lib/db/dbConnect';
import User from '@/lib/db/user/user.model';


export const authOptions: NextAuthOptions = {
    /**-----------------------------------
     * 사용자 지정 로그인 페이지
     -----------------------------------*/
    pages: {
        signIn: "/signIn",
    },

    /**-----------------------------------
     * jwt 만료일설정
     * SessionStrategy 또는 undefined이어야 합니다. 따라서 session.strategy를 문자열 대신 올바른 유형으로 설정해야 합니다.
     * 위의 코드에서 as const를 사용하여 session.strategy의 유형을 명시적으로 지정하고 있습니다. 이를 통해 타입 호환성 오류를 해결할 수 있습니다.
     * as const는 TypeScript에서 리터럴 타입을 생성하기 위해 사용되는 문법입니다.
     -----------------------------------*/
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60, //1일
    },
    providers: [
        // 깃허브 계정 연동
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            /**-----------------------------------
             * 로그인페이지 폼 자동생성해주는 코드
             -----------------------------------*/
            // name: "credentials",
            name: "Sign in",
            credentials: {
                id: {
                    label: "id",
                    type: "text",
                },
                pw: { label: "pw", type: "password" },
            },

            /**-----------------------------------
             * 로그인요청시 실행되는코드
             * 직접 DB에서 아이디,비번 비교하고
             * 아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
             -----------------------------------*/
            async authorize(credentials) {
                await dbConnect();

                if (!credentials?.id || !credentials.pw) {
                    return null;
                }

                let user = await User.findOne({ id: credentials?.id });
                if (!user) {
                    console.log("해당 아이디는 없음");
                    return null;
                }

                /**-----------------------------------
                 * password hash compare
                 -----------------------------------*/
                const bcrypt = require('bcrypt');
                const isMatched = await bcrypt.compare(credentials?.pw, user.pw);

                if (!isMatched) {
                    console.log("비번틀림");
                    return null;
                }
                return user;
            },
        }),
    ],


    callbacks: {
        /**-----------------------------------
         * 유저 세션이 조회될 때 마다 실행되는 코드
         -----------------------------------*/
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey,
                },
            };
        },
        /**-----------------------------------
         * jwt 만들 때 실행되는 코드
         * user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
         -----------------------------------*/
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey,
                };
            }
            return token;
        },
    },

    secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
