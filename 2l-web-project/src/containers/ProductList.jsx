import React from 'react';
import styled from 'styled-components';
import Product from '../components/Product';
import { products } from './Products.js';

const ProductList = () => {
  const productComponent = products.map(({ i, name, url, price }) => {
    return <Product key={i} url={url} name={name} price={price} />;
  });

  return <ProductsConstainer>{productComponent}</ProductsConstainer>;
};

export default ProductList;


// set Styled-components
const ProductsConstainer = styled.ul`
  margin: 0;
  padding: 10px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
