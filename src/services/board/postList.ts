
// 게시글 목록 가져오기
export async function postList() {
    const response = await fetch('/api/board', { cache: 'no-store' });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || '서버 요청 오류')
    }
    return data
}
