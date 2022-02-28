import React, { Component } from "react";
import Carousel from "../components/Carousel";
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
      </div>
    );
  }
}

export default Home;
