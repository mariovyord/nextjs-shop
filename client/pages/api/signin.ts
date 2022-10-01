import { NextApiRequest, NextApiResponse } from "next";
import { fetchJson } from "../../lib/api";
import cookie from 'cookie';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') return res.status(405).end();

    try {
        const { email, password } = req.body;

        const { jwt, user } = await fetchJson(`${process.env.CMS_URL}/auth/local`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier: email,
                password,
            })
        })

        res.status(200)
            .setHeader('Set-Cookie', cookie.serialize('jwt', jwt, {
                path: '/api',
                httpOnly: true,
            }))
            .json({
                id: user.id,
                name: user.username,
            });

    } catch (err) {
        res.status(401).end();
    }
}

export default handler;