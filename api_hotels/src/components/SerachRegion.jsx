import React, { Component } from "react";
import { connect } from 'react-redux'
import styled from "styled-components";

import { fetchSerachRegion } from '../actions/serachRegionAction'

class SerachArea extends Component {
  //  = ({ searchRegionList, changed }) => {

  componentWillMount() {
    this.props.fetchSerachRegion();
  }

  render() {
    console.log(this.props)
    const optionContainer = this.props.fetchRegion.map(
      // ({ name, hcomLocale }, i) => (
      (item, i) => (
        <option key={i} value={item.hcomLocale}>
          {item.name}
        </option>
      )
    );
    return (
      <Container>
        <Title>Choose regions</Title>
        <DropDownList>
          {/* <DropDownList onChange={changed}> */}
          <option value="">Please choose</option>
          {/* <option value="es_AR">ARGENTINA</option>
            <option value="es_BZ">BELIZE</option> */}
          {optionContainer}
        </DropDownList>
      </Container>
    )

  }
};

const mapStateToProps = state => ({
  fetchRegion: state.fetchRegion.items,
});

export default connect(mapStateToProps, { fetchSerachRegion })(SerachArea);

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
