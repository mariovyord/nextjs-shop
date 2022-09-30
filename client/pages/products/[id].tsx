import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react'
import { getProductById, getProducts } from '../../lib/products';
import { TProduct } from '../../types/types';

const ProductDetails = ({ product }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><Image src={process.env.NEXT_PUBLIC_API_URL + product.picture.url} alt={product.picture.alt} width={600} height={400} /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
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
            revalidate: 300,
        }
    } catch (err) {
        return { notFound: true, }
    }
}

