import React from 'react';
import styled from 'styled-components';

const Product = ({ name, url, price }) => {
  return (
    <ProductContainer>
      <ProductImg src={url} alt='Not Found' />
      <p>{name}</p>
      <section>${price}</section>
    </ProductContainer>
  );
};

export default Product;


// set Stlyed-components 
const ProductContainer = styled.li`
  width: 200px;
  margin: 0 10px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 200px;
  cursor: pointer;
`;