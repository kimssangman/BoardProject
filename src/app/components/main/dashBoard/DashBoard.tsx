"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { cache, use } from "react";
import Loading from "../../util/Loading";


type User = {
    id: number;
    name: string;
    email: string;
};

const getUsers = cache(() =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
);


export default function DashBoard() {

    /**---------------------------------
     * onUnauthenticated() 함수가 session을 가지고 있는지 파악하여
     * 없으면 redirect 해줍니다.
     ---------------------------------*/
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/signIn");
        },
    });

    if (status === "loading") {
        return <div className="flex justify-center items-center h-screen">
            <Loading />
        </div>

    }

    let users = use<User[]>(getUsers());


    return (
        <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 20, }}>
                {users.map((user) => (
                    <div
                        key={user.id}
                        style={{ border: "1px solid #ccc", textAlign: "center" }}
                    >
                        <img
                            src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                            alt={user.name}
                            style={{ height: 180, width: 180, margin: 'auto' }}
                        />
                        <h3>{user.name}</h3>
                    </div>
                ))}
            </div>
        </main>
    )
}


{/* <section className="max-w-screen-xl mx-auto px-4">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 bg-gray-400">
                <li className="h-[180px] w-[180px] bg-green-400"></li>
                <li className="h-[180px] w-[180px] bg-green-400"></li>
                <li className="h-[180px] w-[180px] bg-green-400"></li>
                <li className="h-[180px] w-[180px] bg-green-400"></li>
                <li className="h-[180px] w-[180px] bg-green-400"></li>
            </ul>
        </section> */}