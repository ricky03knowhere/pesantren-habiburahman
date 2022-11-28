import React from "react";
import { Routes } from "react-router-dom";
import Footer from "../../components/Footer";
import LoginModal from "../../components/LoginModal";
import Navbar from "../../components/Navbar";
import Wave2 from "../../components/waves/Wave2";

const MainLayout = ({ children, user }) => (
  <>
    <Navbar user={user} />
    <LoginModal />
    <main>{children}</main>
    <Wave2 />
    <Footer />
  </>
);

export default MainLayout;
