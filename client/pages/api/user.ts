import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { fetchJson } from "../../lib/api";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { jwt } = req.cookies;

    if (!jwt) {
        return res.status(401).end();
    }

    try {
        const user = await fetchJson(`${process.env.CMS_URL}/users/me`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })

        return res.status(200).json({
            id: user.id,
            name: user.username,
        })
    } catch (err) {
        return res.status(401).end();
    }
}