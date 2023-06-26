import axios from "axios";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SERVER_URL } from "../utils/utils";
import { handleClickLogout } from "../interfaces";
// import { Link as Link, animateScroll as scroll } from "react-scroll";

function Navbar({ user }) {
  const { pathname, hash } = useLocation();
  const splitLocation = pathname.split("/");
  const url = splitLocation[1] + hash;
console.log("user ==>> ", user);
  return (
    <header>
      {/* Header Start */}
      <div className="header-area header-transparrent" id="navbar">
        <div className="main-header header-sticky">
          <div className="container">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xl-2 col-lg-2 col-md-2">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="/assets/img/logo2.png"
                      alt="logo"
                      width={"70"}
                      className="p-1"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-10">
                {/* Main-menu */}
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li
                        className={
                          url === "" ||
                          url === "home" ||
                          url === "home/carousel"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/home/carousel" className="tagmenu">
                          Home
                        </Link>
                      </li>
                      <li
                        className={
                          url === "home/profile" || url === "home/pengajar"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/home/profile" className="tagmenu">
                          Profil
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/home/profile">Profil Pesantren</Link>
                          </li>
                          <li>
                            <Link to="/home/pengajar">Profil Pengajar</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={
                          url === "kurikulum" ||
                          url === "kurikulum/jadwal" ||
                          url === "kurikulum/kitab" ||
                          url === "kurikulum/kulikuler"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/kurikulum" className="tagmenu">
                          Kurikulum
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/kurikulum/jadwal">Jadwal Kegiatan</Link>
                          </li>
                          <li>
                            <Link to="/kurikulum/kitab">Kitab yang Dikaji</Link>
                          </li>
                          <li>
                            <Link to="/kurikulum/kulikuler">
                              Ekstrakulikuler
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={
                          url === "info" ||
                          url === "info/alamat" ||
                          url === "info/kontak"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/info" className="tagmenu">
                          Info
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/info/lokasi">Alamat</Link>
                          </li>
                          <li>
                            <Link to="/info/kontak">Kontak</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={
                          url === "pendaftaran" ||
                          url === "pendaftaran/syarat" ||
                          url === "pendaftaran/alur" ||
                          url === "pendaftaran/biaya"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/pendaftaran" className="tagmenu">
                          Pendaftaran
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/pendaftaran/syarat">
                              Syarat Pendafraran
                            </Link>
                          </li>
                          <li>
                            <Link to="/pendaftaran/alur">Alur Pendaftaran</Link>
                          </li>
                          <li>
                            <Link to="/pendaftaran/biaya">
                              Biaya Pendaftaran
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {!user ? (
                        <li
                        // className={
                        //   url === "" || url === "login" || url === "login"
                        //     ? "active"
                        //     : ""
                        // }
                        >
                          <Link
                            to="#!"
                            className="tagmenu"
                            data-toggle="modal"
                            data-target="#modal-99"
                          >
                            Login
                          </Link>
                        </li>
                      ) : (
                        <>
                          <li>
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
                              }}
                            />
                          </li>
                          <li>
                            <a href="#!" className="tagmenu">
                              {user.name}
                            </a>
                            <ul class="submenu">
                              {user.isAdmin ? (
                                <span className="badge admin">Admin</span>
                              ) : user.position === "guest" ? (
                                <span className="badge guest">Guest</span>
                              ) : user.position === "santri" ? (
                                <span className="badge santri">Santri</span>
                              ) : (
                                <span className="badge pengajar">Pengajar</span>
                              )}

                              {user.isAdmin ? (
                                <li>
                                  <Link to="/admin_dashboard">
                                    <i class="fa fa-tachometer-alt mr-2"></i>
                                    Dashboard
                                  </Link>
                                </li>
                              ) : user.position === "santri" ? (
                                <li>
                                  <Link to="/santri_dashboard">
                                    <i class="fa fa-tachometer-alt mr-2"></i>
                                    Dashboard
                                  </Link>
                                </li>
                              ) : (
                                <li>
                                  <Link to="/register">
                                    <i class="fa fa-edit mr-2"></i> Daftar
                                    Santri
                                  </Link>
                                </li>
                              )}

                              <li>
                                <Link to="/user_profile">
                                  <i class="fa fa-user-circle mr-2"></i> Profile
                                </Link>
                              </li>
                              <li>
                                <a href="#!" onClick={handleClickLogout}>
                                  <i class="fa fa-sign-out-alt mr-2"></i> Logout
                                </a>
                              </li>
                            </ul>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </header>
  );
}

export default Navbar;
