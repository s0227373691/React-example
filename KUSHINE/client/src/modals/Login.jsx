import React, { Fragment, useState } from "react";
import styled from "styled-components";

import BackDrop from './BackDrop';



const Login = ({ show, modalOpened, modalClosed }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const LoginCompoenet =
    (<Fragment>
      <Modal>
        <h2>Sign in to KUSHINE</h2>
        <FormGroup>
          <EmailInput />
          <PasswordInput />
          {/* <input type="submit" value="Sign in" /> */}
          {/* <Submit>Sign in</Submit> */}
          <Submit />
        </FormGroup>
        <p>New to KUSHINE? &nbsp;
        <CreateAccount onClick={modalOpened}>Create an account.</CreateAccount>
        </p>
      </Modal>
      <BackDrop show={show} clicked={modalClosed} />
    </Fragment>)

  return show ? LoginCompoenet : null
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
  border: 1px solid rgb(144, 144, 144);
  // border-color: rgb(144, 144, 144);
  border-radius:5px;
`;

const EmailInput = styled(Input).attrs({
  type: 'email',
  placeholder: 'Email Address'
})``;

const PasswordInput = styled(Input).attrs({
  type: 'password',
  placeholder: 'Password'
})``;

const Submit = styled.input.attrs({
  type: "submit",
  value: "Start shopping"
})`
  width: 100%;
  margin-top: 10px;
  padding:10px;
  cursor: pointer;
  background-color: #3493fb;
  border: 1px;
  border-radius: 5px;
  color: white;

  &:hover{
    opacity: 0.8;
  }
`;

const CreateAccount = styled.a`
  color: rgb(83, 135, 255);

  &:hover{
    cursor: pointer;
    color: rgb(131, 168, 255);

  }

`;
