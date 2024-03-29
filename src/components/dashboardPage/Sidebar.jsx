import React from "react";
import { handleClickLogout } from "../../interfaces";

function Sidebar({ isAdmin }) {
  const santri = [
    { icon: "dashboard", link: "santri_dashboard", title: "Dashboard" },
    {
      icon: "receipt_long",
      link: "form_pembayaran",
      title: "Pembayaran",
    },
    {
      icon: "history",
      link: "history_pembayaran",
      title: "History Pembayaran",
    },
    { icon: "language", link: "/", title: "Website Pesantren" },
  ];

  const admin = [
    { icon: "dashboard", link: "/admin_dashboard", title: "Dashboard" },
    {
      icon: "receipt_long",
      link: "/daftar_pembayaran",
      title: "Pembayaran SPP",
    },
    { icon: "school", link: "/daftar_santri", title: "Daftar Santri" },
    {
      icon: "supervisor_account",
      link: "/daftar_pengajar",
      title: "Daftar Pengajar",
    },
    { icon: "language", link: "/", title: "Website Pesantren" },
    { icon: "", link: "/", title: "Website Pages" },
    { icon: "payments", link: "/web_biaya", title: "Biaya SPP" },
    { icon: "book", link: "/web_kitab", title: "Daftar Kitab" },
    {
      icon: "sports_basketball",
      link: "/web_ekstrakulikuler",
      title: "Daftar Ekstrakulikuler",
    },
  ];

  let navlinkItems = isAdmin ? admin : santri;

  return (
    <aside
      class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
      id="sidenav-main"
    >
      <div class="sidenav-header">
        <i
          class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a class="navbar-brand m-0" href="/" target="_blank">
          <img
            src="/assets/img/logo2.png"
            class="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span class="ms-1 font-weight-bold text-white">
            {isAdmin ? "Admin" : "Santri"} Dashboard
          </span>
        </a>
      </div>
      <hr class="horizontal light mt-0 mb-2" />
      <div
        class="collapse navbar-collapse  w-auto  max-height-vh-100"
        id="sidenav-collapse-main"
      >
        <ul class="navbar-nav">
          {navlinkItems.map((el) =>
            el.icon === "" ? (
              <li class="nav-item mt-3">
                <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                  {el.title}
                </h6>
              </li>
            ) : (
              <li class="nav-item">
                <a class="nav-link text-white " href={el.link}>
                  <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i class="material-icons opacity-10">{el.icon}</i>
                  </div>
                  <span class="nav-link-text ms-1">{el.title}</span>
                </a>
              </li>
            )
          )}
          <li class="nav-item mt-3">
            <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
              Account pages
            </h6>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="user_profile">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">person</i>
              </div>
              <span class="nav-link-text ms-1">Profile</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-white "
              href="#!"
              onClick={handleClickLogout}
            >
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">logout</i>
              </div>
              <span class="nav-link-text ms-1">Logout</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <div class="sidenav-footer position-absolute w-100 bottom-0 ">
        <div class="mx-3">
          <a
            class="btn bg-gradient-primary mt-4 w-100"
            href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree"
            type="button"
          >
            Upgrade to pro
          </a>
        </div>
      </div> */}
    </aside>
  );
}

export default Sidebar;
