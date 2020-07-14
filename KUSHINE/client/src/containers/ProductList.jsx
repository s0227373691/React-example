import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "../components/Product";

// TODO:調整標籤命名
const ProductList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:5000/api/products", {
        method: 'GET',
      })
        .then(res => res.json())
        .then(products => setProducts(products))
        .catch(err => console.log(err))

    } catch (err) {
      console.log(err)
    }
  }, [products.length])

  const productsComponent = () => {
    return (products.map((productInfo, i) => {
      return <Product key={i} productInfo={productInfo} />;
    }))
  }


  return (
    <ProductsConstainer>
      {products.length !== 0 ? productsComponent() : <h1>null</h1>}
    </ProductsConstainer>
  );
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




