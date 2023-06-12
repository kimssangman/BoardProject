// @types/mongodb.ts

/**-----------------------------------------------------
 * mongoose 글로벌 type 설정
 -----------------------------------------------------*/
import { Mongoose } from "mongoose";

/* eslint-disable no-var */

declare global {
    var mongoose: {
        promise: Promise<Mongoose> | null;
        conn: Mongoose | null;
    };
}