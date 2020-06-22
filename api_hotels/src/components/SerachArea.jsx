import React from "react";
import styled from "styled-components";

const SerachArea = props => {
  const optionContainer = props.searchAreaList.map(
    ({ name, hcomLocale }, key) => {
      return (
        <option key={key} value={hcomLocale}>
          {name}
        </option>
      );
    }
  );
  return (
    <Container>
      <Title>Choose area</Title>
      <DropDownList onChange={props.changed}>
        <option value="">Please choose</option>
        <option value="es_AR">ARGENTINA</option>
        <option value="es_BZ">BELIZE</option>
        {optionContainer}
      </DropDownList>
    </Container>
  );
};

export default SerachArea;

const Container = styled.section`
  width: 500px;
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
`;

const DropDownList = styled.select`
  border-radius: 5px;
  padding: 15px;
  font-size: 16px;
`;
