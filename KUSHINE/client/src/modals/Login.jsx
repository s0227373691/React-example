import React, { Component, Fragment } from "react";
import styled from "styled-components";

import BackDrop from './BackDrop';

class Login extends Component {

  render() {
    const { show, modalOpened, modalClosed } = this.props;
    return (
      this.props.show ?
        (<Fragment>
          <Modal>
            <h2>Sign in to KUSHINE</h2>
            <FormGroup>
              <Input type="text" placeholder="Email Adress" />
              <Input type="password" placeholder="Password" />
              <input type="submit" value="Sign in" />
              {/* <Submit>Sign in</Submit> */}
            </FormGroup>
            <p>New to KUSHINE? &nbsp;
              <CreateAccount onClick={modalOpened}>Create an account.</CreateAccount>
            </p>
          </Modal>
          <BackDrop show={show} clicked={modalClosed} />
        </Fragment>) : null
    );
  }
};

export default Login;

const Modal = styled.section`
  width: 500px;
  padding: 25px;   
  border-radius: 10px;
  position: fixed;
  z-index: 999;
  top: 20%;
  left: calc(50% - 250px);
  background-color: white;
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
  border-color: rgb(144, 144, 144);
  border-radius:5px;
`;

const Submit = styled.div`
  width: max-content;
  margin-left: auto;
  padding:7px;
  cursor: pointer;
  background-color: rgb(111, 191, 211);
  border-radius: 5px;
  color: white;

  &:hover{
    color: gray;
  }
`;

const CreateAccount = styled.a`
  color: rgb(83, 135, 255);

  &:hover{
    cursor: pointer;
    color: rgb(131, 168, 255);

  }

`;
