export type Form = {
    id: string,
    pw: string
}

// 로그인
export async function signIn(form: Form) {


    const params = new URLSearchParams(form)

    // 동적 params 넘길때
    // const res = await fetch(`/api/posts/${id}`)

    // 정적 params 넘길때
    const res = await fetch(`/api/signIn?${params}`)

    const data = await res.json();
    console.log(data)

    return data
}
