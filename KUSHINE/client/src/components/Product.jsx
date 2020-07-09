import React from "react";
import styled from "styled-components";

// TODO:調整標籤命名, 畫面調整
const Product = ({ id, name, url, price }) => {
  return (
    <ProductContainer>
      <a href="index.html" target="_blank">
        <ProductImg url={url} />
        <p>{name}</p>
        <section>${price}</section>
      </a>
    </ProductContainer>
  );
};

export default Product;

// set Stlyed-components
const ProductContainer = styled.li`
  width: 200px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgb(230, 228, 228);
    margin-top: 0px;
    margin-bottom: 20px;
    transition: 0.7s;
  }

  &:active {
    margin: 10px;
    transition: 0.1s;
  }
`;

const ProductImg = styled.div`
  width: 100%;
  height: 200px;
  background-image:  url(${props => props.url});
  background-size: cover;
`;
