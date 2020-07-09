import React, { Fragment, useState } from "react";
import styled from "styled-components";
import axios from 'axios';

import BackDrop from './BackDrop';

const Register = ({ show, modalOpened, modalClosed }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const {
    name,
    email,
    password,
    password2
  } = formData;

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      alert('Passwords do not match');
    }
    else {

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }

        const body = JSON.stringify({
          name,
          email,
          password
        });
        await axios.post('/api/users', body, config);
        alert('Registration success!!');

      } catch (err) {
        console.error(err.response.data);
        alert('Registration failed!!');
      }

    }
  }

  const RegisterComponent () => (
    <Fragment>
      <Modal>
        <Title>Create your account</Title>
        <FormGroup onSubmit={e => onSubmit(e)}>
          <InputUserName value={name} onChange={onChange} />
          <InputEmail value={email} onChange={onChange} />
          <InputPassword value={password} onChange={onChange} />
          <InputPassword2 value={password2} onChange={onChange} />
          <BtnSubmit />
        </FormGroup>
        <Login>
          Have an account? &nbsp;
            <ToggleModal onClick={modalOpened}>Sign in now</ToggleModal>
        </Login>
      </Modal>
      <BackDrop show={show} clicked={modalClosed} />
    </Fragment>
  )

  return show ? RegisterComponent : null
};

export default Register;


const Modal = styled.section`
  width: 500px;
  padding: 25px;   
  border-radius: 5px;
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
  border-radius:5px;
`;

const InputUserName = styled(Input).attrs({
  type: 'text',
  name: 'name',
  placeholder: 'User Name',
  required: true
})``;

const InputEmail = styled(Input).attrs({
  type: 'email',
  name: 'email',
  placeholder: 'Email Address',
  minLength: '6'
})``;

const InputPassword = styled(Input).attrs({
  type: 'password',
  name: 'password',
  placeholder: 'Password',
  minLength: '6'
})``;

const InputPassword2 = styled(Input).attrs({
  type: 'password',
  name: 'password2',
  placeholder: 'Confirm Password',
  minLength: '6'
})``;

const BtnSubmit = styled.input.attrs({
  type: "submit",
  value: "Sign up"
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

const Login = styled.p`
  color: rgb(83, 83, 83);
`;

const ToggleModal = styled.a`
  color: rgb(83, 135, 255);

  &:hover{
    cursor: pointer;
    color: rgb(131, 168, 255);

  }

`;
