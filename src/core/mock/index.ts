import { EProductType } from "../store/store-types";

export const fakeData = [
    {
        sku: 'DVD100', name: 'DVD', price: 10.40, type: EProductType.dvd, imageUrl: 'https://res.cloudinary.com/dqijnm0k3/image/upload/v1641897625/z4sgkfjnhflycjm0nicx.jpg', createDate: Date.now(), specificAttribute: {
            name: 'size',
            value: '600'
        }
    },
    {
        sku: 'BOOK100', name: 'Book', price: 20.50, type: EProductType.book, imageUrl: 'https://res.cloudinary.com/dqijnm0k3/image/upload/v1641897625/z4sgkfjnhflycjm0nicx.jpg', createDate: Date.now(), specificAttribute: {
            name: 'weight',
            value: '600'
        }
    },
    {
        sku: 'FURN100', name: 'Furniture', price: 40.30, type: EProductType.furniture, imageUrl: 'https://res.cloudinary.com/dqijnm0k3/image/upload/v1641897625/z4sgkfjnhflycjm0nicx.jpg', createDate: Date.now(), specificAttribute: {
            name: 'dimensions',
            value: '20x100x50'
        }
    }]