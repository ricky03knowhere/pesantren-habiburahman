import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Kurikulum from "./pages/Kurikulum";
import Pendaftaran from "./pages/Pendaftaran";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/kurikulum" element={<Kurikulum />} />
            <Route exact path="/info" element={<Info />} />
            <Route exact path="/pendaftaran" element={<Pendaftaran />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
