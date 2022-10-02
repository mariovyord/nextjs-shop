import { fetchJson } from "../lib/api";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USER_QUERY_KEY } from "../constants/constants";

export const useSignIn = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation((data: { email: string, password: string }) => {
        return fetchJson(`${process.env.NEXT_PUBLIC_APP_URL}/api/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            })
        })
    })

    return {
        signIn: async ({ email, password }: { email: string, password: string }) => {
            try {
                const user = await mutation.mutateAsync({ email, password });
                queryClient.setQueryData([USER_QUERY_KEY], user);
                return true;
            } catch (err) {
                return false;
            }
        },
        signInIsLoading: mutation.isLoading,
        signInIsError: mutation.isError,
    }
}