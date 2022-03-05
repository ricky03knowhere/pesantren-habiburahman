import React, { Component } from "react";
import Carousel from "../components/Carousel";
import Profile from "../components/Profile";
import Wave1 from "../components/waves/Wave1";

class Home extends Component {
  render() {
    return (
      <div>
        {/* CAROUSEL START */}
        <Carousel />
        {/* CAROUSEL END */}

        {/* WAVE1 */}
        <Wave1 />

        {/* PROFILE START */}
        <Profile />
        {/* PROFILE END */}
      </div>
    );
  }
}

export default Home;
