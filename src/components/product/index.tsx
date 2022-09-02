import React, { useContext, useEffect, useState } from 'react';
import './index.css';

import placeholder from '../../assets/dvd.jpg';

import { formatCurrency } from '../../core/utils/utils';
import StoreContext from '../../core/store/store-context';

interface ProductProps {
    handleSelect: (sku: string) => void;
    name: string;
    sku: string;
    price: number;
    imgUrl: string;
    presenterMode?: boolean;
    isChecked?: boolean;
}

function Product(props: ProductProps) {
    const handleOnClick = (): void => {
        props.handleSelect(props.sku);
    }

    return (
        <div className='product' onClick={handleOnClick}>
            {!props.presenterMode && <div className='product-checkbox'>
                <input type="checkbox" checked={props.isChecked} name='selected' />
            </div>}
            <div className='product-cover'>
                <img src={props.imgUrl.length !== 0 ? props.imgUrl : placeholder} className='product-cover-image' alt="product-image" />
                <div className='product-price'>
                    <div>{formatCurrency(props.price)}</div>
                </div>
            </div>
            <div>
                <div className='product-details'>
                    <div className='product-sku'>{props.sku}</div>
                    <div className='product-name'>
                        <a href={props.imgUrl} target={'_blank'}>{props.name}</a>
                    </div>
                    <div className='product-specific'></div>
                </div>
            </div>
        </div>
    )
}

export default Product;