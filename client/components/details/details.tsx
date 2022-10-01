import React from 'react';
import Image from 'next/image';
import { TProduct } from '../../types/types';

const Details: React.FC<{ product: TProduct }> = ({ product }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl mx-auto">
            <figure>
                <Image src={process.env.NEXT_PUBLIC_CMS_URL + product.picture.url} alt={product.picture.alternativeText} width={600} height={400} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Details;