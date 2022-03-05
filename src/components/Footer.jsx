import React from "react";

function Footer() {
  return (
    <section id="footer">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-2">
            <div class="brand-wrapper">
              <img
                src="assets/img/logo.png"
                alt="logo"
                width="140"
                height="50"
              />
              <br />
            </div>
          </div>
          <div class="col-md-4">
            <div class="sosmed">
              <span>Ikuti kami :</span>
              <a
                href="https://web.facebook.com/shelma.sofa"
                target="_blank"
                class="sosmed-wrapper"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com/shanikaservicesofa/"
                target="_blank"
                class="sosmed-wrapper"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/6287771542472"
                target="_blank"
                class="sosmed-wrapper"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
              <a
                href="mailto:shanikaservicesofa@gmail.com"
                target="_blank"
                class="sosmed-wrapper"
              >
                <i class="far fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-11">
            <p>
              &copy; Copyright 2010 - <span class="year"></span>, Pesantren
              Habiburrahman
              <br />
              Dibuat oleh{" "}
              <a href="https://ricky03knowhere.github.io" target="_blank">
                @ricky_knowhere
              </a>{" "}
              | Dengan Template dari{" "}
              <a href="https://colorlib.com/" target="_blank">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
