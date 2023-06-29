/**--------------------------------------------
 * token 발행을 NextAuth 방식으로 하기 때문에
 * 현재는 사용 안 함
 --------------------------------------------*/

export type Form = {
    id: string,
    pw: string
}

// 로그인
// export async function signIn(form: Form) {


//     const params = new URLSearchParams(form)

//     // 동적 params 넘길때
//     // const res = await fetch(`/api/posts/${id}`)

//     // 정적 params 넘길때
//     const res = await fetch(`/api/signIn?${params}`)

//     const data = await res.json();
//     // console.log(data)

//     return data
// }
