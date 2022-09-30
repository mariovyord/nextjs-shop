import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ApiError } from '../../lib/api';
import React from 'react'
import { getProductById, getProducts } from '../../lib/products';
import { TProduct } from '../../types/types';
import Details from '../../components/details/details';

const ProductDetails: NextPage<{ product: TProduct }> = ({ product }) => {
    return (
        <Details product={product} />
    )
}

export default ProductDetails;

export const getStaticPaths: GetStaticPaths = async () => {
    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
            paths: [],
            fallback: 'blocking',
        }
    }

    const products = await getProducts() as TProduct[];
    const paths = products.map(x => ({
        params: {
            id: x.id.toString(),
        }
    }));

    return {
        paths: paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;
    const { id } = params as { id: string }
    try {
        const product = await getProductById(id) as TProduct;

        return {
            props: {
                product,
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

