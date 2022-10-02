import Image from 'next/image';
import React from 'react'
import { TProduct } from '../../types/types';

const Carousel: React.FC<{ products: TProduct[] }> = ({ products }) => {
    return (<section className='w-full'>
        <div className="carousel w-full h-64 overflow-hidden rounded-2xl">
            <div id="item1" className="carousel-item w-full">
                <Image src={process.env.NEXT_PUBLIC_CMS_URL + products[0].picture.url} alt={products[0].picture.alternativeText} className="w-full" width={1536} height={700} />
            </div>
            <div id="item2" className="carousel-item w-full">
                <Image src={process.env.NEXT_PUBLIC_CMS_URL + products[1].picture.url} alt={products[1].picture.alternativeText} className="w-full" width={1536} height={700} />
            </div>
            <div id="item3" className="carousel-item w-full">
                <Image src={process.env.NEXT_PUBLIC_CMS_URL + products[2].picture.url} alt={products[2].picture.alternativeText} className="w-full" width={1536} height={700} />
            </div>
            <div id="item4" className="carousel-item w-full">
                <Image src={process.env.NEXT_PUBLIC_CMS_URL + products[3].picture.url} alt={products[3].picture.alternativeText} className="w-full" width={1536} height={700} />
            </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
            <a href="#item4" className="btn btn-xs">4</a>
        </div>
    </section>
    )
}

export default Carousel;