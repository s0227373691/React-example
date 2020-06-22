import React, { Component } from "react";
import SerachArea from "./components/SerachArea";
import Axios from "axios";

import HotelList from "./containers/HotelList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchAreaList: [1, 2],
      selectedArea: "",
      isEmpty: arr => arr.length === 0,
    };
  }
  componentDidMount() {
    Axios.get("https://hotels4.p.rapidapi.com/get-meta-data", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "cc42a37c11msh5dab4b92bf9777fp123a6ajsn7e4ad1f77129",
      },
    })
      .then(res => {
        // console.log(res.data);
        this.setState({ searchAreaList: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange = e => {
    this.setState({ selectedArea: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <SerachArea
          searchAreaList={this.state.searchAreaList}
          changed={this.onChange}
        />
        {this.state.isEmpty(this.state.searchAreaList) ? null : (
          <HotelList selectedArea={this.state.selectedArea} />
        )}
      </div>
    );
  }
}

export default App;
