import axios from "axios";
import useSWR from "swr";

const fetcher: any = (url: string) => axios.get(url);

export default function useSetup() {
    const { data, mutate, error } = useSWR("/api/mushroom/get-setting-data", fetcher);

    const loading = !data && !error;

    return {
        loading,
        setupData: data?.data,
        mutate,
    };
}
