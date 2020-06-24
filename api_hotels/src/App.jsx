import React, { Component } from "react";
import SerachRegion from "./components/SerachRegion";
import Axios from "axios";

import HotelList from "./containers/HotelList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchRegionList: [],
      region: "",
      hotelList: [],
      isEmpty: arr => (arr.length === 0) ? true : false

    };
  }
  componentDidMount() {
    this.getRegion();
  }

  getRegion = () => {
    //options for get region 
    Axios.get("https://hotels4.p.rapidapi.com/get-meta-data", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "cc42a37c11msh5dab4b92bf9777fp123a6ajsn7e4ad1f77129",
      },
    })
      .then(res => {
        // console.log(res.data);
        this.setState({ searchRegionList: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getHotelList = () => {
    const { region } = this.state;
    const url = `https://hotels4.p.rapidapi.com/properties/list?currency=USD&locale=${region}&sortOrder=PRICE&destinationId=1506246&pageNumber=1&checkIn=2020-01-08&checkOut=2020-01-15&pageSize=25&adults1=1`;
    Axios.get(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "5a1568ed77msh896d3f9612ed275p140b94jsn917c60c22662",
      },
    })
      .then(res => {
        this.setState({ hotelList: res.data.data.body.searchResults.results });
        // console.log(this.state.hotelList);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange = async e => {
    await this.setState({ region: e.target.value });
    this.getHotelList();
  };

  render() {
        const {searchRegionList ,hotelList , isEmpty} = this.state
        return (
      <div className="App">
        <SerachRegion
          searchRegionList={searchRegionList}
          changed={this.onChange}
        />
        {isEmpty(hotelList) ? null : (
          <HotelList hotelList={this.state.hotelList} />
        )}
      </div>
    );
  }
}

export default App;
