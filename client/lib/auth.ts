import { fetchJson } from "./api"

export const signIn = ({ email, password }: { email: string, password: string }) => {
    return fetchJson(`${process.env.NEXT_PUBLIC_APP_URL}/api/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        })
    })
}

export const getUserData = async () => {
    try {
        const user = await fetchJson(`${process.env.NEXT_PUBLIC_APP_URL}/api/user`);
        return user;
    } catch (err) {
        return undefined;
    }
}