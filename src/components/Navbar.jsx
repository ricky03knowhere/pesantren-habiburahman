import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Link as Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const { pathname, hash } = useLocation();
  const splitLocation = pathname.split("/");
  const url = splitLocation[1] + hash;

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
                    <img src="/assets/img/logo.png" alt="logo" />
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
                        <Link to="home/carousel">Home</Link>
                      </li>
                      <li
                        className={
                          url === "home/profile" || url === "home/pengajar"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="home/profile">Profil</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="home/profile">Profil Pesantren</Link>
                          </li>
                          <li>
                            <Link to="home/pengajar">Profil Pengajar</Link>
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
                        <Link to="kurikulum">Kurikulum</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="kurikulum/jadwal">Jadwal Kegiatan</Link>
                          </li>
                          <li>
                            <Link to="kurikulum/kitab">Kitab yang Dikaji</Link>
                          </li>
                          <li>
                            <Link to="kurikulum/kulikuler">
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
                        <Link to="info">Info</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="info/lokasi">Alamat</Link>
                          </li>
                          <li>
                            <Link to="info/kontak">Kontak</Link>
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
                        <Link to="pendaftaran">Pendaftaran</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="pendaftaran/syarat">
                              Syarat Pendafraran
                            </Link>
                          </li>
                          <li>
                            <Link to="pendaftaran/alur">Alur Pendaftaran</Link>
                          </li>
                          <li>
                            <Link to="pendaftaran/biaya">
                              Biaya Pendaftaran
                            </Link>
                          </li>
                        </ul>
                      </li>
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
