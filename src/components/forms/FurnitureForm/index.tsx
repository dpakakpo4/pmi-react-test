import React from 'react'
import { IProduct } from '../../../core/store/store-types';


interface Props {
    values: IProduct;
    handleChange: (event: any) => void;
}
function FurnitureForm({ values, handleChange }: Props) {
    return (
        <div className='form-field'>
            <label htmlFor="Height">Height</label>
            <input type="text" name="height"  onChange={handleChange} id="Height" placeholder='#height' />
            <span className='error'></span>

            <label htmlFor="width">Width</label>
            <input type="text" name="width" id="width" onChange={handleChange} placeholder='#width' />
            <span className='error'></span>

            <label htmlFor="length">Length</label>
            <input type="text" name="length" id="length" onChange={handleChange} placeholder='#length' />
            <span className='error'></span>

            <div className='description'>
                Please provide dimensions
            </div>
        </div>
    )
}

export default FurnitureForm;