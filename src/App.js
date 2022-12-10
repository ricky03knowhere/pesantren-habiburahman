import React, { Component, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Navbar from "./components/Navbar";
import Wave2 from "./components/waves/Wave2";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Kurikulum from "./pages/Kurikulum";
import DashboardLayout from "./pages/layouts/DashboardLayout";
import AppRoute from "./pages/layouts/AppRoute";
import MainLayout from "./pages/layouts/MainLayout";
import Pendaftaran from "./pages/Pendaftaran";
import SantriDashboard from "./pages/SantriDashboard";
import SantriRegister from "./pages/SantriRegister";
import { appendScript } from "./utils/utils";

export class App extends Component {
  componentDidMount() {
    appendScript("/assets/js/core/popper.min.js");
    appendScript("/assets/js/core/bootstrap.min.js");
    appendScript("/assets/js/plugins/perfect-scrollbar.min.js");
    appendScript("/assets/js/plugins/smooth-scrollbar.min.js");
    appendScript("/assets/js/plugins/chartjs.min.js");
    appendScript("https://buttons.github.io/buttons.js");
    appendScript("/assets/js/material-dashboard.min.js?v=3.0.2");

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
        <AppRoute exact path="/" component={Home} layout={MainLayout} />{" "}
        <AppRoute exact path="/home/*" component={Home} layout={MainLayout} />{" "}
        <AppRoute
          exact
          path="/kurikulum/*"
          component={Kurikulum}
          layout={MainLayout}
        />{" "}
        <AppRoute exact path="/info/*" component={Info} layout={MainLayout} />{" "}
        <AppRoute
          exact
          path="/pendaftaran/*"
          component={Pendaftaran}
          layout={MainLayout}
        />{" "}
        <AppRoute
          exact
          path="/register"
          component={SantriRegister}
          layout={MainLayout}
        />{" "}
        <AppRoute
          exact
          path="/admin/*"
          component={AdminDashboard}
          layout={DashboardLayout}
        />{" "}
        <AppRoute
          exact
          path="/santri/*"
          component={SantriDashboard}
          layout={DashboardLayout}
        />{" "}
      </BrowserRouter>
    );
  }
}

{
  /* <AppRoute exact path="/" component={<Home />} layout={<MainLayout />} />
<AppRoute
  exact
  path="/home"
  component={<Home />}
  layout={<MainLayout />}
/>
<AppRoute
  exact
  path="/kurikulum"
  component={<Kurikulum />}
  layout={<MainLayout />}
/>
<AppRoute
  exact
  path="/info"
  component={<Info />}
  layout={<MainLayout />}
/>
<AppRoute
  exact
  path="/pendaftaran"
  component={<Pendaftaran />}
  layout={<MainLayout />}
/> */
}

export default App;
