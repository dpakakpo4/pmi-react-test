import React, { useCallback, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StoreContext from '../../../core/store/store-context';
import ProductForm from '../../product-form';
import './index.css';

interface AddProductPageProps {
}

function AddProductPage(props: AddProductPageProps) {
    const { sku } = useParams();
    const navigate = useNavigate();
    const { products, setProducts } = useContext(StoreContext);

    const productToEdit = products.find((product) => {
        return product.sku === sku
    });


    const handleOnSubmit = useCallback(
        (product: any) => {
            const filteredProducts = products.filter((product) => product.sku !== sku);
            setProducts([product, ...filteredProducts]);
            navigate('/');
        },
        [],
    );


    return (
        <div className='add-page'>
            <div className="add-page-content">
                <ProductForm productToEdit={productToEdit} products={products} handleOnSubmit={handleOnSubmit} />
            </div>
        </div>
    )
}

export default AddProductPage;