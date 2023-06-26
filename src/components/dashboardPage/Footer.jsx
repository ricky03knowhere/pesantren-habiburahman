import React from "react";

function Footer() {
  return (
    <footer class="footer py-4  ">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col mb-lg-0 mb-4">
            <div class="copyright text-center text-sm text-muted">
              &copy; Copyright 2014 - {new Date().getFullYear()}, Pesantren
              Habiburrahman
              <br />
              {/* Dibuat oleh{" "}
              <a href="https://ricky03knowhere.github.io" className="text-primary" target="_blank">
                @ricky_knowhere
              </a>{" "}
              | Dengan Template dari{" "}
              <a
                href="https://www.creative-tim.com/product/material-dashboard"
                className="text-primary" target="_blank"
              >
                Creative Tim
              </a> */}
            </div>
          </div>
          {/* <div class="col-lg-6">
                  <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com"
                        class="nav-link text-muted"
                        target="_blank"
                      >
                      
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/presentation"
                        class="nav-link text-muted"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/blog"
                        class="nav-link text-muted"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/license"
                        class="nav-link pe-0 text-muted"
                        target="_blank"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
