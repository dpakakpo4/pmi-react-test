import React from 'react'
import { IProduct } from '../../../core/store/store-types';

interface Props {
    values: IProduct;
    handleChange: (event: any) => void;
}

function DVDForm({values, handleChange}: Props) {
    return (
        <div className='form-field'>
            <label htmlFor="size">Size</label>
            <input type="text" name="sku" onChange={handleChange} id="size" placeholder='#size' />
            <span className='error'></span>
            <div className='description'>
                Please provide size
            </div>
        </div>
    )
}

export default DVDForm;