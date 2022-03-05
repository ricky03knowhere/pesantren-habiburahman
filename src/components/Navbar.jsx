import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const { hash } = location;
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
                          url === "" || url === "#carousel" ? "active" : ""
                        }
                      >
                        <a href="/#carousel">Home</a>
                      </li>
                      <li
                        className={
                          url === "#profile" || url === "#pengajar"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/#profile">Profil</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/#profile">Profil Pesantren</Link>
                          </li>
                          <li>
                            <Link to="/#pengajar">Profil Pengajar</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={
                          url === "kurikulum" ||
                          url === "kurikulum#jadwal" ||
                          url === "kurikulum#kitab" ||
                          url === "kurikulum#ekstrakulikuler"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/kurikulum">Kurikulum</Link>
                        <ul className="submenu">
                          <li>
                            <Link
                              activeClassName="active"
                              to="/kurikulum#jadwal"
                            >
                              Jadwal Kegiatan
                            </Link>
                          </li>
                          <li>
                            <Link
                              activeClassName="active"
                              to="/kurikulum#kitab"
                            >
                              Kitab yang Dikaji
                            </Link>
                          </li>
                          <li>
                            <Link
                              activeClassName="active"
                              to="/kurikulum#ekstrakulikuler"
                            >
                              Ekstrakulikuler
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={
                          url === "info" ||
                          url === "info#alamat" ||
                          url === "info#kontak"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/info">Info</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/info#alamat">Alamat</Link>
                          </li>
                          <li>
                            <Link to="/info#kontak">Kontak</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={
                          url === "pendaftaran" ||
                          url === "pendaftaran#syarat" ||
                          url === "pendaftaran#tahapan" ||
                          url === "pendaftaran#biaya"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/pendaftaran">Pendaftaran</Link>
                        <ul className="submenu">
                          <li>
                            <Link
                              activeClassName="active"
                              to="/pendaftaran#syarat"
                            >
                              Syarat Pendafraran
                            </Link>
                          </li>
                          <li>
                            <Link
                              activeClassName="active"
                              to="/pendaftaran#tahapan"
                            >
                              Tahapan Pendaftaran
                            </Link>
                          </li>
                          <li>
                            <Link
                              activeClassName="active"
                              to="/pendaftaran#biaya"
                            >
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
