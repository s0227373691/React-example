import React from "react";
import styled from "styled-components";

import ProductList from "../containers/ProductList.jsx";

const Hot = () => {
  return (
    <Container>
      <EmptyDiv />
      <ProductList />
    </Container>
  );
};

export default Hot;

// set Styled-components
const Container = styled.div`
  padding: 20px;
`;

const EmptyDiv = styled.div`
  height: 115px;
  border-bottom: 2px solid #aaa;
`;
