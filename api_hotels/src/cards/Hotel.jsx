import React, { Component } from "react";
import styled from "styled-components";

import HotelDetailInfo from '../modals/HotelDetailInfo'

class Hotel extends Component {
  constructor() {
    super();
    this.state = {
      displayModal: false,
    }
  }

  modalOpen = () => this.setState({ displayModal: true })

  modalClose = () => this.setState({ displayModal: false })

  render() {
    const {
      modalOpen,
      modalClose,
      props:{hotel:{
        id,
        name,
        thumbnailUrl,
        address: {
          streetAddress,
          locality,
          countryName,
          postalCode,
        },
        ratePlan: {
          price: { current },
        },
      }}
    } = this;
    return (
      <Container data-id={id}>
        <HotelImg src={thumbnailUrl} onClick={modalOpen}></HotelImg>
        <HotelInfo>
          <HotelName onClick={modalOpen}>{name}</HotelName>
          <HotelAddress>{`${streetAddress},${locality},${countryName} ${postalCode}`}</HotelAddress>
          <HotelPrice>{current}</HotelPrice>
        </HotelInfo>
        <HotelDetailInfo show={this.state.displayModal} modalClose={modalClose} />
      </Container>
    );
  }
};

export default Hotel;

const Container = styled.article`
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid rgb(111, 191, 211);
  border-radius: 5px;

  &:hover {
    background-color: rgb(212, 238, 255);
  }
`;

const HotelInfo = styled.div`
  width:100%;
  padding: 15px 25px;
`;

const HotelImg = styled.img`
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const HotelName = styled.h4`
  font-size: 22px;
  margin: 0;

  &:hover{
    text-decoration:underline;	
    cursor: pointer;
  }

`;

const HotelAddress = styled.p`
  font-size: 16px;
  color: #6b6b6b;
  margin: 0;

`;

const HotelPrice = styled.div`
  font-size: 20px;
  text-align: end;
`;
