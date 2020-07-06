import React, { Fragment, useState } from "react";
import styled from "styled-components";
import axios from 'axios';

import BackDrop from './BackDrop';

const Register = ({ show, modalOpened, modalClosed }) => {

  const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' });
  const { name, email, password, password2 } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) { console.log('Passwords do not match'); }
    else {
      const newUser = {
        name,
        email,
        password
      }

      console.log(newUser)

      try{
        const config = {
          headers:{
            'Content-Type': 'application/json' 
          }
        }

        const body = JSON.stringify(newUser);
        const res = await axios.post('/api/users', body, config);
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
          <h2>Create your account</h2>
          <FormGroup onSubmit={e => onSubmit(e)}>
            <Input type="text" name="name" value={name} onChange={onChange} placeholder="User Name" required />
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

// const Submit = styled.input.attrs({
//   type: "submit",
//   value: "submit"
// })`
//   width: max-content;
//   margin-left: auto;
//   padding:7px;
//   cursor: pointer;
//   background-color: rgb(111, 191, 211);
//   border-radius: 5px;
//   color: white;

//   &:hover{
//     color: gray;
//   }
// `;

const CreateAccount = styled.a`
  color: rgb(83, 135, 255);

  &:hover{
    cursor: pointer;
    color: rgb(131, 168, 255);

  }

`;
