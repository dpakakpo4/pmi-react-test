import React, { useContext, useMemo, useState } from 'react';
import Product from '../../product';
import { useNavigate } from "react-router-dom";

import './index.css';
import StoreContext from '../../../core/store/store-context';
import Pagination from '../../pagination';

const PageSize = 1;

function ProductList() {
  const { products, setProducts } = useContext(StoreContext);
  const [selectedProductsId, setSelectedProductsId] = useState<string[]>([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const handleOnSelect = (sku: string) => {
    let productsIds = selectedProductsId;
    let isChecked = selectedProductsId?.includes(sku) as boolean;
    if (!isChecked) {
      productsIds.push(sku);
    }
    if (isChecked) {
      let removeProductIndex = productsIds.findIndex(id => id === sku);
      productsIds.splice(removeProductIndex, 1);
    }
    setSelectedProductsId([...productsIds]);
  }

  const massDelete = () => {
    let remainingProducts = products.filter(item => !selectedProductsId.includes(item.sku));
    let remainingSelectedIds = selectedProductsId.filter(item => remainingProducts.find(product=>product.sku === item));
    setProducts([...remainingProducts]);
    setSelectedProductsId([...remainingSelectedIds]);
  }


  const currentProducts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const checkIfChecked = (sku: string)=> selectedProductsId?.includes(sku);

  return (
    <div className='product-list-page'>
      <div className='product-list-page-header'>
        <div className='product-list-page-title'>
          <h1>Product List</h1>
        </div>
        <div className='product-list-page-actions'>
          {selectedProductsId.length === 0 && <button onClick={() => navigate('/new-product')}>Add</button>}
          {selectedProductsId.length === 1 && <button onClick={() => navigate(`/edit-product/${selectedProductsId[0]}`)}>Edit</button>}
          {selectedProductsId.length > 1 && <button disabled>Edit</button>}
          <button disabled={selectedProductsId.length === 0} onClick={massDelete}>Mass Delete</button>
        </div>
      </div>
      <div className="product-list-page-content">
        <div className="product-list">
          {
            currentProducts.map((item) => (
              <Product key={`tem_${item.sku}`} isChecked={checkIfChecked(item.sku)} handleSelect={handleOnSelect} sku={item.sku} name={item.name} price={item.price} imgUrl={item.imageUrl} />
            ))
          }
        </div>
        <div className="pagination-container">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={products.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductList;