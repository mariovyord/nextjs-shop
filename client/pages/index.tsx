import React from 'react';
import Head from 'next/head'
import Catalog from '../components/catalog/catalog';
import { GetStaticProps, NextPage } from 'next';
import { getProducts } from '../lib/products';
import { TProduct } from '../types/types';
import { ApiError } from '../lib/api';
import Carousel from '../components/carousel/carousel';

const Home: NextPage<{ products: TProduct[] }> = ({ products }) => {
    return (
        <>
            <Head>
                <title>Next Shop</title>
            </Head>
            <div>
                <Carousel products={products} />
                <Catalog products={products} />
            </div>
        </>
    )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    try {
        const products = await getProducts() as TProduct[];

        return {
            props: {
                products,
            },
            revalidate: parseInt(process.env.REVALIDATE_SECONDS),
        }
    } catch (err) {
        if (err instanceof ApiError && err.status === 404) {
            return { notFound: true, }

        }
        throw err;
    }
}