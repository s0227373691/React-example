import React from 'react';
import Product from '../../components/Product/Product.jsx';
import { products } from './Products.js';
import './css_scss/ProductList.css';

const ProductList = () => {
  const productComponent = products.map(({ i, name, url, price }) => {
    return <Product key={i} url={url} name={name} price={price} />;
  });

  return <ul className='productlist'>{productComponent}</ul>;
};

export default ProductList;
