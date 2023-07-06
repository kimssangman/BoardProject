// import useSWR from "swr";
// import { Cookies } from 'js-cookie';
// import { jwt_decode } from 'jwt-decode';


// async function getUser() {
//     const access_token = Cookies.get("accessToken");

//     let decodedToken: any;
//     let username = undefined;
//     let email = undefined;
//     if (access_token) {
//         decodedToken = jwt_decode(access_token);
//         username = decodedToken.username;
//         email = decodedToken.email;
//     }

//     if (username && access_token) {
//         return { username, email };
//     } else {
//         // not authorized
//         const error: any = new Error("Not authorized!");
//         error.status = 403;
//         throw error;
//     }
// }

// export default function useUser() {
//     const { data, mutate, error } = useSWR("getUser", getUser);

//     const loading = !data && !error;
//     const loggedOut = error && error.status === 403;
//     const userData = error ? undefined : data;
//     return {
//         loading,
//         loggedOut,
//         user: userData,
//         mutate,
//     };
// }
