import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

// Route
import Hot from "../mainpages/Hot";
import NotFoundPage from "../mainpages/NotFoundPage";

const MainProductCategory = () => {
  const routesPath = ["/hot", "/accessories", "/allproducts", "/couple", "/madamsstyle", "/mensstyle", "/newarrivals", "/newdiscount", "/oddsizes", "/about"];
  return (
    <ProductCategoryContainer>
      <Switch>
        <Route exact path="/" />
        <Route path={routesPath} component={Hot} />
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

