export type TProductPicture = {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: TFormats;
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

export type TFormats = {
    thumbnail: TMedium;
    medium: TMedium;
    small: TMedium;
}

export type TMedium = {
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

export type TProduct = {
    id: number,
    title: string,
    description: string,
    price: number,
    created_at: string,
    updated_at: string,
    picture: TProductPicture,
}