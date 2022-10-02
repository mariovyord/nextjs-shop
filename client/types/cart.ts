export interface IMinifiedCart {
    id: string,
    product: {
        id: string,
        title: string,
        price: number,
    },
    quantity: number,
}

export interface ICartItem {
    id: number;
    user: User;
    product: Product;
    quantity: number;
    created_at: Date;
    updated_at: Date;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    created_at: Date;
    updated_at: Date;
    picture: Picture;
}

export interface Picture {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    created_at: Date;
    updated_at: Date;
}

export interface Formats {
    thumbnail: Medium;
    medium: Medium;
    small: Medium;
}

export interface Medium {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path: null;
    url: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    role: number;
    created_at: Date;
    updated_at: Date;
}
