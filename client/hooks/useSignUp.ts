import { fetchJson } from "../lib/api";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USER_QUERY_KEY } from "../constants/constants";

export const useSignUp = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation((data: { username: string, email: string, password: string }) => {
        return fetchJson(`${process.env.NEXT_PUBLIC_APP_URL}/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password,
            })
        })
    })

    return {
        signUp: async ({ username, email, password }: { username: string, email: string, password: string }) => {
            try {
                const user = await mutation.mutateAsync({ username, email, password });

                queryClient.setQueryData([USER_QUERY_KEY], user);
                return 'Success';
            } catch (err) {
                if (err.status === 401) {
                    return 'The email or username has already been taken'
                }
                return 'Something went wrong';
            }
        },
        signUpIsLoading: mutation.isLoading,
        signUpIsError: mutation.isError,
    }
}