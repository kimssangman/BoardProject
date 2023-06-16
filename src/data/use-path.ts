/**
 * swr은 상태관리가 아니고 데이터 자체를 저장한다고 생각하자
 * 예를들어 게시판 글을 들어올 때 한번 불러와서 cache화 시키고
 * 매번 api 요청하는 게 아니라 cache되어 있는 데이터를 바로 꺼내쓸 수 있어서 속도면에서 되게 빠르다
 * get 할 때 많이 쓰자
 * 
 * 그리고 swr로 불러온 global data는 내가 직접 수정을 할 수 있는 개념이 아니다 -> 상태관리가 아니기 때문에 (데이터만 바라봄)
 */
import axios from "axios";
import useSWR, { mutate } from 'swr';

const fetcher: any = (url: string) => axios.get(url);

export default function usePath() {

    const initialData = '/main';
    const { data, mutate, error } = useSWR(null, { fallbackData: initialData });


    return {
        pathData: data,
        mutate,
    };
}
