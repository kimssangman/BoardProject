// lib/db/dbConnect.ts

/**------------------------------------------------------------
 * mongodb 연결
 * @link https://supern0va.tistory.com/28
 * 
 * 1. npm i cross-env 
 * 2. env 파일 작성 및 package 파일 script 수정
 * 3. @types/mongodb.ts 파일 작성 (declare global type setting)
 * 4. dbConnect.ts 파일 작성
------------------------------------------------------------*/
import mongoose from "mongoose";

const DB_URI = process.env.MONGODB_URI || "";

// mongoose type global로 설정
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose
            .set({ debug: true, strictQuery: false })
            .connect(DB_URI)
            .then((mongooseInstance) => {
                console.log('데이터베이스에 연결되었습니다.')
                return mongooseInstance;
            });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;
