import React, { Fragment, useState } from "react";
import styled from "styled-components";
import axios from 'axios';

import BackDrop from './BackDrop';

const Resgister = ({ show, modalOpened, modalClosed }) => {

  const [formData, setFormData] = useState({ username: '', email: '', password: '', password2: '' });
  const { username, email, password, password2 } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) { console.log('Passwords do not match'); }
    else {
      const newUser = {
        username,
        email,
        password
      }

      try{
        const config = {
          headers:{
            'Content-type': 'application/json' 
          }
        }

        const body = JSON.stringify(newUser);
        const res = await axios.post('/api/user', body, config);
        console.log(res.data);
      }catch(err){
        console.error(err.response.data);
      }

    }
  }

  return (
    show ?
      (<Fragment>
        <Modal>
          <h2>Sign up for KUSHINE</h2>
          <FormGroup onSubmit={e => onSubmit(e)}>
            <Input type="text" name="username" value={username} onChange={onChange} placeholder="User Name" required />
            <Input type="text" name="email" value={email} onChange={onChange} placeholder="Email Address" />
            <Input type="password" name="password" value={password} onChange={onChange} placeholder="Password" minLength='6' />
            <Input type="password" name="password2" value={password2} onChange={onChange} placeholder="Confirm Password" minLength='6' />
            <input type="submit" value="Sign up" />
            {/* <Submit>Sign up</Submit> */}
          </FormGroup>
          <CreateAccount onClick={modalOpened}>Sign in now</CreateAccount>
        </Modal>
        <BackDrop show={show} clicked={modalClosed} />
      </Fragment>) : null
  );
};

export default Resgister;


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

const Submit = styled.input.attrs({
  type: "submit",
  value: "submit"
})`
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
