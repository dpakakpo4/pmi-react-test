import React from 'react'
import { IProduct } from '../../../core/store/store-types';


interface Props {
    values: IProduct;
    handleChange: (event: any) => void;
}
function BookForm({ }: Props) {
    return (
        <>
            <div className='form-field'>
                <label htmlFor="weight">Weight</label>
                <input type="text" name="weight" id="weight" placeholder='#weight' />
                <span className='error'></span>
                <div className='description'>
                    Please provide weight
                </div>
            </div>
        </>
    )
}

export default BookForm;