export type Form = {
    id: string,
    pw: string
}

// 로그인
export async function signIn(form: Form) {
    console.log(form)
    try {
        const params = new URLSearchParams(form)
        console.log(params)
        // 동적 params일 경우
        // const res = await fetch(`/api/posts/[id]`)

        // params 넘길때
        const res = await fetch(`/api/signIn?${params}`)

        if (res.ok) {
            const data = await res.json();
            console.log(data);
            return data;
        } else {
            throw new Error('로그인에 실패함!');
        }
    } catch (error) {
        // 오류 처리
    }
}
