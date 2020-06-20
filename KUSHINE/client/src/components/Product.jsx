import React from "react";
import styled from "styled-components";

const Product = ({ id, name, url, price }) => {
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
    background-image: url(${url});
    background-size: cover;
  `;

  return (
    <ProductContainer>
      <a href="index.html" target="_blank">
        <ProductImg />
        <p>{name}</p>
        <section>${price}</section>
      </a>
    </ProductContainer>
  );
};

export default Product;
