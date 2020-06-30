import React, { Component } from "react";
import Hotel from "../cards/Hotel";

class HotelList extends Component {

  render(){
    const {props:{hotelList}} = this;
    const hotelListComponent = hotelList.map((hotel, key) => {
      return <Hotel key={key} hotel={hotel} />;
    });
    return hotelListComponent;
  }
};

export default HotelList;
