import React from 'react';
import './css_scss/Product.css';

const Product = ({ name, url, price }) => {
  return (
    <li className='product'>
      <img src={url} alt='Not Found' />
      <p>{name}</p>
      <section>${price}</section>
    </li>
  );
};

export default Product;
