import React from 'react'
import { fetchJson } from '../../lib/api';
import { IMinifiedCart } from '../../types/cart';
import { useQuery } from '@tanstack/react-query';
import PageHeading from '../../components/common/heading';
import CartTable from '../../components/cart/cart-table';

const Cart = () => {
    const query = useQuery(['cartItems'], async () => await fetchJson('/api/cart'));
    const cart = query.data as IMinifiedCart[];

    return (
        <div>
            <PageHeading>Your Cart</PageHeading>
            {cart && <CartTable cart={cart} />}

        </div>
    )
}

export default Cart;