import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { fetchJson } from "../../lib/api";
import { ICartItem } from "../../types/cart";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { jwt } = req.cookies;

    if (!jwt) {
        return res.status(401).end();
    }

    const getNeededProps = (cartItems: ICartItem[]) => {
        return cartItems.map(x => ({
            id: x.id,
            product: {
                id: x.product.id,
                title: x.product.title,
                price: x.product.price,
            },
            quantity: x.quantity,
        }))
    }

    try {
        const fullCartData = await fetchJson(`${process.env.CMS_URL}/cart-items`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })

        return res.status(200).json(getNeededProps(fullCartData))
    } catch (err) {
        return res.status(401).end();
    }
}

export default handler;