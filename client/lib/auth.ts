import { fetchJson } from "./api"

export const signIn = ({ email, password }: { email: string, password: string }) => {
    return fetchJson('/auth/local', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            identifier: email,
            password,
        })
    })
}