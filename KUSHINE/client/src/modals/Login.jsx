import React, { Fragment, useState } from "react";
import styled from "styled-components";

import BackDrop from './BackDrop';



const Login = ({ show, modalOpened, modalClosed }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData)
  }

  const LoginCompoenet =
    (<Fragment>
      <Modal>
        <Title>Sign in to KUSHINE</Title>
        <FormGroup onSubmit={e => onSubmit(e)}>
          <InputEmail value={email} onChange={e => onChange(e)} />
          <InputPassword value={password} onChange={e => onChange(e)} />
          <BtnSubmit />
        </FormGroup>
        <CreateAccount>New to KUSHINE? &nbsp;
          <ToggleModal onClick={modalOpened}>Create an account.</ToggleModal>
        </CreateAccount>
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

const Title = styled.h2`
  color: #3493fb;
    
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

const InputEmail = styled(Input).attrs({
  type: 'email',
  name: 'email',
  placeholder: 'Email Address',
  required: true
})``;

const InputPassword = styled(Input).attrs({
  type: 'password',
  name: 'password',
  placeholder: 'Password'
})``;

const BtnSubmit = styled.input.attrs({
  type: "submit",
  value: "Start shopping"
})`
  width: 100%;
  margin: 10px 0;
  padding:10px;
  cursor: pointer;
  background-color: #3493fb;
  border: 1px;
  border-radius: 5px;
  color: white;
  font-size: 18px;

  &:hover{
    opacity: 0.8;
  }
`;

const CreateAccount = styled.p`
  color: rgb(83, 83, 83);
`;

const ToggleModal = styled.a`
  color: rgb(83, 135, 255);

  &:hover{
    cursor: pointer;
    color: rgb(131, 168, 255);

  }

`;
