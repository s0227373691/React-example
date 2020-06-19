import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

// Route
import Hot from "../mainpages/Hot";
import NotFoundPage from "../mainpages/NotFoundPage";

const MainProductCategory = () => {
  return (
    <ProductCategoryContainer>
      <Switch>
        <Route exact path="/" />
        <Route path={["/hot", "/accessories", "/allproducts", "/couple", "/madamsstyle", "/mensstyle", "/newarrivals", "/newdiscount", "/oddsizes", "/about"]} component={Hot} />
        <Route component={NotFoundPage} />
      </Switch>
    </ProductCategoryContainer>
  );
};

export default MainProductCategory;

// set Styled-components
const ProductCategoryContainer = styled.main`
  width: 100%;
  padding: 10px;
`;

const EmptyDiv = styled.div`
  height: 128px;
  border-bottom: 2px solid #aaa;
`;
