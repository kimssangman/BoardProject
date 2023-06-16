// import io from "socket.io-client";
// import useSWRSubscription from "swr/subscription";

// export default function useData() {
//     const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL
//     console.log(socketUrl)
//     const { data, error } = useSWRSubscription(socketUrl, (key, { next }) => {
//         // console.log(socketUrl)
//         const socket = io(key);

//         socket.on("connect", () => {
//             console.log("Socket connected");
//         });

//         socket.on("change", (change) => {
//             next(null, change);
//         });

//         return () => socket.close();
//     });

//     return { data, error };
// }
