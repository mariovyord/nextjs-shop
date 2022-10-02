import { fetchJson } from "../lib/api";
import { useQuery } from '@tanstack/react-query';
import { USER_QUERY_KEY } from "../constants/constants";

const getUserData = async () => {
    try {
        const user = await fetchJson(`${process.env.NEXT_PUBLIC_APP_URL}/api/user`);
        return user;
    } catch (err) {
        return null;
    }
}

export const useUser = () => {
    const query = useQuery(
        [USER_QUERY_KEY],
        getUserData, {
        staleTime: 30_000, // ms
        cacheTime: Infinity,
    });

    return {
        user: query.data,
    }
}