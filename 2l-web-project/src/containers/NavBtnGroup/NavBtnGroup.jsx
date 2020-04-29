import React from 'react';
import './css_scss/NavBtnGroup.css';

// Icons
import IconUser from './png/user.png';
import IconShoppingCart from './png/shopping-cart.png';
import IconContact from './png/contact.png';
import IconSearch from './png/search.png';

const NavBtnGroup = () => {
  return (
    <div className='user_fn_btn_group'>
      <ul>
        <li>
          <img src={IconUser} alt='Not Found' />
          <a href=''>登入會員</a>
        </li>
        <li>
          <img src={IconShoppingCart} alt='Not Found' />
          <a href=''>購物車</a>
        </li>
        <li>
          <img src={IconContact} alt='Not Found' />
          <a href=''>聯絡我們</a>
        </li>
        <li className='search'>
          <img src={IconSearch} alt='Not Found' />
          <input type='text' placeholder='找商品' />
          <a>搜尋</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBtnGroup;
