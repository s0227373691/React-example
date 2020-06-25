import React, { Component } from "react";
import Hotel from "../cards/Hotel";

const HotelList = ({ hotelList }) => {
  const hotelListComponent = hotelList.map((hotel, key) => {
    return <Hotel key={key} hotel={hotel} />;
  });
  return hotelListComponent;
};

export default HotelList;
