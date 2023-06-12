import dbConnect from '@/lib/db/dbConnect';
import User, { UserSchema } from '@/lib/db/user/user.model';
import * as yup from 'yup';




export async function GET(req: any, res: any) {

    return new Response(JSON.stringify({ message: 'dd' }), {
        status: 400,
    });
};
