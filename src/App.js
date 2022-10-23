import React, { Component, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Navbar from "./components/Navbar";
import Wave2 from "./components/waves/Wave2";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Kurikulum from "./pages/Kurikulum";
import Pendaftaran from "./pages/Pendaftaran";
import { appendScript } from "./utils/utils";

export class App extends Component {
  componentDidMount() {
    appendScript(
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    );
    appendScript("/assets/js/popper.min.js");
    appendScript("/assets/js/bootstrap.min.js");
    appendScript("/assets/js/jquery.slicknav.min.js");
    appendScript(
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
    );
    appendScript("/assets/js/slick.min.js");
    appendScript("/assets/js/jquery.scrollUp.min.js");
    appendScript("/assets/js/main.js");
    appendScript("/assets/js/script.js");
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <LoginModal />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home/*" element={<Home />} />
            <Route exact path="/kurikulum/*" element={<Kurikulum />} />
            <Route exact path="/info/*" element={<Info />} />
            <Route exact path="/pendaftaran/*" element={<Pendaftaran />} />
          </Routes>
        </main>
        <Wave2 />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
