import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Modals
import Login from "../modals/Login";
import Register from "../modals/Register";
// Icons
import IconUser from "./png/user.png";
import IconShoppingCart from "./png/shopping-cart.png";
import IconContact from "./png/contact.png";
import IconSearch from "./png/search.png";

class NavBtnGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLoginModal: false,
      displayRegisterModal: false
    }
  }

  // modalOpen = openModal => {
  //   switch (openModal) {
  //     case 'login':
  //       this.setState({ displayLoginModal: true, displayRegisterModal: false })
  //       break;
  //     case 'register':
  //       this.setState({ displayLoginModal: false, displayRegisterModal: true })
  //       break;

  //   }
  // }

  modalOpenLogin = () => this.setState({ displayLoginModal: true, displayRegisterModal: false })
  modalOpenRegister = () => this.setState({ displayLoginModal: false, displayRegisterModal: true })

  modalAllClose = () => this.setState({ displayLoginModal: false, displayRegisterModal: false })

  render() {
    return (
      <Fragment>
        <BtnGrpoupContainer>
          <BtnList>
            <BtnItem>
              <Icon src={IconUser} alt="Not Found" />
              <Link to="" onClick={this.modalOpenLogin}>註冊/登入會員</Link>
            </BtnItem>
            <BtnItem>
              <Icon src={IconShoppingCart} alt="Not Found" />
              <Link to="/shoppingCart">購物車</Link>
            </BtnItem>
            <BtnItem>
              <Icon src={IconContact} alt="Not Found" />
              <Link to="/contactUs">聯絡我們</Link>
            </BtnItem>
            <BtnItemSearch>
              <Icon src={IconSearch} alt="Not Found" />
              <input type="text" placeholder="找商品" />
              <Link to="">搜尋</Link>
            </BtnItemSearch>
          </BtnList>
        </BtnGrpoupContainer>
        <Login show={this.state.displayLoginModal} modalOpened={this.modalOpenRegister} modalClosed={this.modalAllClose} />
        <Register show={this.state.displayRegisterModal} modalOpened={this.modalOpenLogin} modalClosed={this.modalAllClose} />
      </Fragment>
    );
  }
};

export default NavBtnGroup;

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

a {
  text-decoration: none;
  color: rgb(97, 96, 96);
  display: flex;
  align-items: center;
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

const Icon = styled.img`
margin-right: 5px;
`;
