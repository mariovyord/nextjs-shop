import { fetchJson } from "../lib/api";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USER_QUERY_KEY } from "../constants/constants";

export const useSignOut = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation(async () => {
        await fetchJson(`${process.env.NEXT_PUBLIC_APP_URL}/api/signout`);
    })

    return {
        signOut: async () => {
            try {
                await mutation.mutateAsync();
                queryClient.setQueryData([USER_QUERY_KEY], null);
                return true;
            } catch (err) {
                return false;
            }
        },
    }
}