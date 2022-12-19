import React from "react";
import Footer from "../../components/dashboardPage/Footer";
import Navbar from "../../components/dashboardPage/Navbar";
import Sidebar from "../../components/dashboardPage/Sidebar";

const DashboardLayout = ({ children, user }) => {
  if (!user || user.position === "guest") return (window.location.href = "/");
  return (
    <>
      <Sidebar isAdmin={user.isAdmin} />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        {/* <!-- Navbar --> */}
        <Navbar user={user} />
        {/* <!-- End Navbar --> */}
        <div class="container-fluid pb-4">
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
