import React, { useReducer, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AddProductPage from '../components/pages/add-edit-product';
import ProductList from '../components/pages/product-list';

import useLocalStorage from '../core/hooks/useLocalStorage';
import StoreContext from '../core/store/store-context';

function AppRouter() {
    const [products, setProducts] = useLocalStorage('pmi', []);

    return (
        <StoreContext.Provider value={{ products, setProducts }}>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/new-product" element={<AddProductPage />} />
                <Route path="/edit-product/:sku" element={<AddProductPage />} />
                <Route path='*' element={<ProductList />} />
            </Routes>
        </StoreContext.Provider>
    )
}

export default AppRouter;