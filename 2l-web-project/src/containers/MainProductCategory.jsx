import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

// Route
import Login from "../components/Login";
import Hot from "../mainpages/Hot";
import NotFoundPage from "../mainpages/NotFoundPage";

const MainProductCategory = () => {
  return (
    <ProductCategoryContainer>
      <Switch>
        <Route exact path="/login" component={Login} />

        <Route path="/hot" component={Hot} />
        <Route path="/accessories" component={Hot} />
        <Route path="/allproducts" component={Hot} />
        <Route path="/couple" component={Hot} />
        <Route path="/madamsstyle" component={Hot} />
        <Route path="/mensstyle" component={Hot} />
        <Route path="/newarrivals" component={Hot} />
        <Route path="/newdiscount" component={Hot} />
        <Route path="/oddsizes" component={Hot} />
        <Route path="/about" component={Hot} />

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
