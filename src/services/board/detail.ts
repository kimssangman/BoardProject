// 게시글 상세보기
export async function detailPost(_id: any) {
    // 동적 params 넘길때
    const res = await fetch(`/api/board/${_id}`)

    const data = await res.json();

    return data
}
