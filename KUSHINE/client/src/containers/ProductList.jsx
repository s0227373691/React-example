import React from "react";
import styled from "styled-components";
import Product from "../components/Product";

// TODO:調整標籤命名
const ProductList = () => {
  return (
    <ProductsConstainer>
      {products.map(({ id, url, name, price }) => {
        return <Product key={id} url={url} name={name} price={price} />;
      })}
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

// TODO:改變資料存放至MongoDB Atlas
// set Products data
const products = [
  {
    id: 1,
    name: "潮男服飾】春季寬松慵懶風絲質",
    url: require("../containers/imgClothes/11bbe986530242ac110004.jpg"),
    price: 238,
  },
  {
    id: 2,
    name: "男裝| 無印良品MUJI",
    url: require("./imgClothes/78bde1cbfe19abe234239f1e3a9c05be.jpg"),
    price: 305,
  },
  {
    id: 3,
    name: "英倫男裝流行搭配",
    url: require("./imgClothes/3155375_L.jpg"),
    price: 655,
  },
  {
    id: 4,
    name: "2011初秋潮男服饰搭配",
    url: require("./imgClothes/20180322172021_259.jpg"),
    price: 700,
  },
  {
    id: 5,
    name: "春夏流行服飾【創翊韓都】針織罩衫男裝寬鬆V領針織外套",
    url: require("./imgClothes/3044393271363031.jpg"),
    price: 359,
  },
  {
    id: 6,
    name: "大尺碼 白襯衫 襯衫 男 加肥 大男服飾 小尺碼 寬鬆 白 襯衫",
    url: require("./imgClothes/201109151717292557.jpg"),
    price: 670,
  },
];
