import React, { Component } from "react";
import Hotel from "../cards/Hotel";
import Axios from "axios";

class HotelList extends Component {
  constructor() {
    super();
    this.state = {
      hotelList: [],
      isEmpty: arr => arr.length === 0,
    };
  }
  componentDidMount() {
    alert();
    const { area, pageNumber } = this.state;
    const url = `https://hotels4.p.rapidapi.com/properties/list?currency=USD&locale=${area}&sortOrder=PRICE&destinationId=1506246&pageNumber=${pageNumber}&checkIn=2020-01-08&checkOut=2020-01-15&pageSize=25&adults1=1`;
    Axios.get(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "5a1568ed77msh896d3f9612ed275p140b94jsn917c60c22662",
      },
    })
      .then(res => {
        this.setState({ hotelList: res.data.data.body.searchResults });
        // console.log(this.state.hotelList);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { results } = this.state.hotelList;
    // console.log(results);
    /* Debug Info */
    try {
      const hotels = results.map((hotel, key) => {
        return <Hotel key={key} hotel={hotel} />;
      });
      console.log("[Success]", hotels);
    } catch (e) {
      console.log("[Failed]", results);
      console.warn(e); // or console.error(e)
    }

    if (Array.isArray(results)) {
      const hotels = results.map((hotel, key) => {
        //   { id, name, thumbnailUrl, address }, key
        return <Hotel key={key} hotel={hotel} />;
      });
      return hotels;
    } else {
      return <h2> Loading, ...</h2>;
    }
  }
}

export default HotelList;

// return (this.state.isEmpty(this.state.hotelList) ? (
//     <h2>No match data</h2>
//   ) : (
//     hotels
//   ))
