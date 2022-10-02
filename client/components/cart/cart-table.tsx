import React from 'react'
import { IMinifiedCart } from '../../types/cart'
import { formatDollars } from '../../utils/formatters'

const CartTable = ({ cart }: { cart: IMinifiedCart[] }) => {
    return (
        <table className='table w-full max-w-3xl'>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((x, i) =>
                    <tr key={x.id}>
                        <td>{x.product.title}</td>
                        <td>{formatDollars(x.product.price)}</td>
                        <td>{x.quantity}</td>
                        <td>{formatDollars(x.quantity * x.product.price)}</td>
                    </tr>
                )}
            </tbody>
            <tfoot >
                <tr >
                    <td className='text-base font-bold'>Total</td>
                    <td></td>
                    <td></td>
                    <td className='text-base font-bold'>{formatDollars(cart.reduce((a, x) => a + (x.product.price * x.quantity), 0))}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default CartTable