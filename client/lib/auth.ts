import { fetchJson } from "./api"

export const signOut = async () => {
    return fetchJson(`${process.env.NEXT_PUBLIC_APP_URL}/api/signout`)
}

