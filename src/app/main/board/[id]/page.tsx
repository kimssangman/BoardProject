import Detail from '@/app/components/main/board/Detail'
import React from 'react'

type Props = {
    params: { id: any };
};



/**---------------------------------------
 * [id]에 해당하는 params 값을 넘기고 싶을 때
        
        type Props = {
            params: { id: any };
        };
  
        page({ params: { id } }: Props)

        이렇게 하면 [id] 값이 나오며 
        자식 컴포넌트에게는 props로 전달해야함


        서버에서는
        export async function GET(request: NextRequest, { params }: { params: { id: string } })
        console.log('params 정보 >>> ', params.id)

        이렇게하면 [id] 값을 받을 수 있다.
 ---------------------------------------*/
export default function page({ params: { id } }: Props) {

    return (
        <Detail pageId={id} />
    )
}