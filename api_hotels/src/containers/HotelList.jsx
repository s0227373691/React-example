import React, { Component } from "react";
import Hotel from "../cards/Hotel";

class HotelList extends Component {
  constructor() {
    super();
    this.state = {
      hotelList: [],
    };
  }

  render() {
    const { hotelList } = this.state;
    // console.log(hotelList);
      const hotelListComponent = hotelList.map((hotel, key) => {
        return <Hotel key={key} hotel={hotel} />;
      });
      return hotelListComponent;

  }
}

export default HotelList;
