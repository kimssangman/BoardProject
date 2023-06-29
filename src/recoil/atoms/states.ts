/**------------------------------------------------------
 * recoil 사용법
   1. npm install recoil

   2. atoms 파일 생성
        import { atom } from 'recoil';

        export const textState = atom({
            key: 'textState',
            default: '',
        });

   3. app_layout에 
        import { RecoilRoot } from 'recoil'; 

        <RecoilRoot> {children} </RecoilRoot> 감싸기

   4. set하고 싶은 곳에 
        import { useRecoilState } from 'recoil';
        import { textState } from '@/recoil/atoms/states';
        
        const [text, setText] = useRecoilState(textState);

    5. get하고 싶은 곳에
        import { useRecoilValue } from 'recoil';
        import { textState } from '@/recoil/atoms/states';

        const getTextState = useRecoilValue(textState);
 ------------------------------------------------------*/

//atom.js
import { atom } from 'recoil';

export const textState = atom({
    key: 'textState',
    default: '',
});




// export interface CartItemsModel {
//     name: string;
//     price: number;
// }

// export interface destinationsModel {
//     [key: string]: number;
// }

// export interface InventoryModel {
//     name: string;
//     price: number;
//     img: string;
//     name_eng: string;
//     category: string;
// }
