import React from "react";
import { useLocation } from "react-router-dom";
import { SERVER_URL } from "../../utils/utils";

function Navbar({ user }) {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");
  const url = splitLocation[1].split("_");

  return (
    <nav
      class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
      id="navbarBlur"
      navbar-scroll="true"
    >
      <div class="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class="breadcrumb-item text-sm">
              <a class="opacity-5 text-dark" href="javascript:;">
                Home
              </a>
            </li>
            <li class="breadcrumb-item text-sm text-dark" aria-current="page">
              {user.isAdmin
                ? "Administrator"
                : user.position === "santri"
                ? "Santri"
                : ""}
            </li>
            <li
              class="breadcrumb-item text-sm text-dark active"
              aria-current="page"
            >
              {url[0] === "daftar"
                ? "Tables"
                : url[0] === "web"
                ? "Website Pages"
                : ""}
            </li>
          </ol>
          <h6 class="font-weight-bolder mb-0 text-capitalize">
            {user.position === "santri"
              ? `${url[0]} ${url[1]}`
              : url[1] === "dashboard"
              ? url[1]
              : "Daftar " + url[1]}
          </h6>
        </nav>
        <div
          class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
            {/* <div class="input-group input-group-outline">
                  <label class="form-label">Type here...</label>
                  <input type="text" class="form-control" />
                </div> */}
          </div>
          <ul class="navbar-nav  justify-content-end">
            <li class="nav-item d-flex align-items-center">
              <a
                href="javascript:;"
                class="nav-link text-body font-weight-bold px-0"
              >
                <img
                  src={`${SERVER_URL}images/${user.picture}`}
                  alt="profile-picture"
                  width="38"
                  id="profile-pict"
                  style={{
                    borderRadius: "50%",
                    height: " 2.6em",
                    width: "2.6em",
                    objectFit: "cover",
                    marginRight: ".5em",
                  }}
                />
                <span class="d-sm-inline d-none">{user.name}</span>
              </a>
            </li>
            <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a
                href="javascript:;"
                class="nav-link text-body p-0"
                id="iconNavbarSidenav"
              >
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
            {/* <li class="nav-item px-3 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-body p-0">
                <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
              </a>
            </li> */}
            {/* <li class="nav-item dropdown pe-2 d-flex align-items-center">
              <a
                href="javascript:;"
                class="nav-link text-body p-0"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-bell cursor-pointer"></i>
              </a>
              <ul
                class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                aria-labelledby="dropdownMenuButton"
              >
                <li class="mb-2">
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    <div class="d-flex py-1">
                      <div class="my-auto">
                        <img
                          src="./assets/img/team-2.jpg"
                          class="avatar avatar-sm  me-3 "
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          <span class="font-weight-bold">New message</span> from
                          Laur
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mb-2">
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    <div class="d-flex py-1">
                      <div class="my-auto">
                        <img
                          src="./assets/img/small-logos/logo-spotify.svg"
                          class="avatar avatar-sm bg-gradient-dark  me-3 "
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          <span class="font-weight-bold">New album</span> by
                          Travis Scott
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
