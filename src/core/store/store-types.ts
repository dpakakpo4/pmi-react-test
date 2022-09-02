export const initialStoreState: StoreStateType = {
    products: []
}

export type StoreStateType = {
    products: IProduct[]
}

export interface IProduct {
    sku: string;
    name: string;
    price: number;
    imageUrl: string;
    type: EProductType;
    createDate: number;
    width?: number;
    length?: number;
    height?: number;
    size?: number;
    weight?: number;
}

export enum EProductType {
    dvd = 'dvd',
    book = 'book',
    furniture = 'furniture'
}
