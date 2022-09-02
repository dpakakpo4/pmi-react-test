import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EProductType, IProduct } from '../../core/store/store-types';
import { SpecificForm } from '../forms';
import Product from '../product';
import './index.css'

interface ProductFormProps {
    handleOnSubmit: (product: any) => void;
    productToEdit?: IProduct;
    products: IProduct[]
}
function ProductForm(props: ProductFormProps) {
    const navigate = useNavigate();
    const [product, setProduct] = useState(() => {
        return {
            name: props.productToEdit ? props.productToEdit.name : '',
            sku: props.productToEdit ? props.productToEdit.sku : '',
            price: props.productToEdit ? props.productToEdit.price : 0,
            imageUrl: props.productToEdit ? props.productToEdit.imageUrl : '',
            createDate: props.productToEdit ? props.productToEdit.createDate : 0,
            type: props.productToEdit ? props.productToEdit.type : EProductType.book,
            height: props.productToEdit ? props.productToEdit.height : 0,
            width: props.productToEdit ? props.productToEdit.width : 0,
            length: props.productToEdit ? props.productToEdit.length : 0,
            size: props.productToEdit ? props.productToEdit.size : 0,
            weight: props.productToEdit ? props.productToEdit.weight : 0,
        };
    });

    const { name, sku, price, imageUrl, type, height, width, length, size, weight } = product;
    const [errorMsg, setErrorMsg] = useState('');

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const values = [name, sku, price, imageUrl, type];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const product: IProduct = {
                sku,
                name,
                price,
                type,
                imageUrl,
                createDate: Date.now(),
                width,
                height,
                size,
                length,
            };
            props.handleOnSubmit(product);
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        switch (name) {
            case 'price':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setProduct((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setProduct((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    const onImageChange = async (imageList: FileList | null) => {
        const data = new FormData()
        data.append("file", imageList[0] as File);
        data.append("upload_preset", "pmi-preset")
        data.append("cloud_name", "dqijnm0k3")
        await fetch("https://api.cloudinary.com/v1_1/dqijnm0k3/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                setProduct(productData => ({ ...productData, ["imageUrl"]: data.url }));
            })
            .catch(err => console.log(err));
    }

    const naviGateBack = () => {
        navigate('/');
    }

    return (
        <form className='product-form' noValidate onSubmit={handleOnSubmit}>
            <div className='product-form-header'>
                <div className='product-form-title'>
                    <h1>Add Product</h1>
                </div>
                <div className='product-form-actions'>
                    <button type='submit'>Save</button>
                    <button onClick={naviGateBack}>Cancel</button>
                </div>
            </div>
            <div className="product-form-content">
                <div>
                    <div className='form-field'>
                        <label htmlFor="sku">SKU</label>
                        <input required onChange={handleInputChange} type="text" name="sku" value={product.sku} id="sku" placeholder='#sku' />
                    </div>


                    <div className='form-field'>
                        <label htmlFor="name">Name</label>
                        <input required onChange={handleInputChange} type="text" name="name" value={product.name} id="name" placeholder='#name' />
                    </div>

                    <div className="form-field">
                        <label>Product Image</label>
                        <label className='as-input required' htmlFor="image">Upload</label>
                        <input required type="file" name="image" onChange={(e) => onImageChange(e.target.files)} accept='image/*' id="image" placeholder='#image' />
                    </div>


                    <div className='form-field'>
                        <label htmlFor="price">Price</label>
                        <input required onChange={handleInputChange} type="number" name="price" value={product.price} id="price" placeholder='#price' />
                    </div>


                    <div className="form-field">
                        <label htmlFor="productType">Product type</label>
                        <select name="type" value={product.type} onChange={e => handleInputChange(e)} id="type">
                            <option value="dvd">DVD</option>
                            <option value="book">Book</option>
                            <option value="furniture">Furniture</option>
                        </select>
                    </div>
                    <div className="specific-attribute-field">
                        <SpecificForm type={type} values={product} handleChange={handleInputChange} />
                    </div>
                </div>
                <div className="add-page-product-preview">
                    <Product presenterMode handleSelect={() => { }} name={name} sku={sku} price={price} imgUrl={imageUrl}/>
                </div>
            </div>
        </form>
    )
}

export default ProductForm;