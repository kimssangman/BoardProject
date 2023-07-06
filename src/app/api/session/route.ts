import { authOptions } from "@/lib/session-auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    const session = await getServerSession(authOptions);

    console.log('session/route', session)

    if (!session) {
        return new NextResponse(
            JSON.stringify({ status: "fail", message: "You are not logged in" }),
            { status: 401 }
        );
    }

    return NextResponse.json({
        authenticated: !!session,
        session,
    });
}
