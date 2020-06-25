import React from "react";
import styled from "styled-components";

const Hotel = props => {
  const {
    id,
    name,
    thumbnailUrl,
    ratePlan: {
      price: { current },
    },
  } = props.hotel;
  return (
    <Container data-id={id}>
      <HotelImg src={thumbnailUrl}></HotelImg>
      <div>
        <HotelName>{name}</HotelName>
        <HotelPrice>{current}</HotelPrice>
      </div>
    </Container>
  );
};

export default Hotel;

const Container = styled.article`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid rgb(111, 191, 211);
  border-radius: 5px;

  &:hover {
    background-color: rgb(212, 238, 255);
  }
`;

const HotelImg = styled.img`
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const HotelName = styled.h4`
  font-size: 18px;
`;

const HotelPrice = styled.div`
  font-size: 20px;
`;
