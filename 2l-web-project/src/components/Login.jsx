import React from "react";
import styled from "styled-components";

const Login = a => {
  return (
    <LoginContainer>
      <h2>Sign In</h2>
      <FormGroup>
        <input type="text" placeholder="Email Adress" />
        <input type="password" placeholder="Password" />
      </FormGroup>
    </LoginContainer>
  );
};

const LoginContainer = styled.section``;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
`;

export default Login;
