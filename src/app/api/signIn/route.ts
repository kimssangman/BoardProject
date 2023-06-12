import dbConnect from '@/lib/db/dbConnect';
import User, { UserSchema } from '@/lib/db/user/user.model';
import * as yup from 'yup';
import { NextRequest, NextResponse } from 'next/server'


export async function GET(request: NextRequest) {
    return new Response("Hello, Next.js!");
}