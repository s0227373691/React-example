import React from "react";
import styled from "styled-components";

// Icons
import IconUser from "./png/user.png";
import IconShoppingCart from "./png/shopping-cart.png";
import IconContact from "./png/contact.png";
import IconSearch from "./png/search.png";

const NavBtnGroup = () => {
  // set Styled-components
  const BtnGrpoupContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `;

  const BtnList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    list-style: none;
  `;

  const BtnItem = styled.li`
    height: min-content;
    margin: 0 5px;
    padding: 5px 8px;
    display: flex;
    flex-direction: row;
    border-width: 1px;
    border-style: solid;
    border-color: #aaa;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: #f9f9f9;
    }
  `;

  const BtnItemSearch = styled(BtnItem)`
    &:hover {
      input {
        width: 100px;
        padding: 5px;
        transition: 0.5s;
      }
    }

    input {
      width: 0px;
      border: 0px;
      transition: 0.5s;
      outline: none;
    }
  `;

  const BtnIcon = styled.img`
    margin-right: 5px;
  `;

  const BtnLink = styled.a`
    text-decoration: none;
    color: rgb(97, 96, 96);
    display: flex;
    align-items: center;
  `;

  return (
    <BtnGrpoupContainer>
      <BtnList>
        <BtnItem>
          <BtnIcon src={IconUser} alt="Not Found" />
          <BtnLink href="">登入會員</BtnLink>
        </BtnItem>
        <BtnItem>
          <BtnIcon src={IconShoppingCart} alt="Not Found" />
          <BtnLink href="">購物車</BtnLink>
        </BtnItem>
        <BtnItem>
          <BtnIcon src={IconContact} alt="Not Found" />
          <BtnLink href="">聯絡我們</BtnLink>
        </BtnItem>
        <BtnItemSearch>
          <BtnIcon src={IconSearch} alt="Not Found" />
          <input type="text" placeholder="找商品" />
          <BtnLink>搜尋</BtnLink>
        </BtnItemSearch>
      </BtnList>
    </BtnGrpoupContainer>
  );
};

export default NavBtnGroup;
