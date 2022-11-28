import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import { changeTitle } from "../utils/utils.js";

class Info extends Component {
  componentDidMount() {
    changeTitle("Info");
  }

  render() {
    return (
      <section id="info">
        <div class="container">
          <PageTitle title="Info" />

          {/* <!-- LOKASI START --> */}
          <div class="row justify-content-center info-wrapper">
            <div class="col-md-6 map-wrapper" id="lokasi">
              <div class="card">
                <h3>
                  <i class="fa fa-map-marker-alt mr-2"></i>Lokasi
                </h3>
                <iframe
                  class="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15835.249809290719!2d107.9498433!3d-7.1476729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd8a52e01deed2cf5!2sAl%20Ghifari%20Banyuresmi!5e0!3m2!1sen!2sid!4v1646538580464!5m2!1sen!2sid"
                  allowfullscreen="true"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div class="row col-md-6 info" id="kontak">
              <div class="col-md-12">
                <div class="card kontak">
                  <div class="row justify-content-around">
                    <div class="col-md-4 title">
                      <h3>
                        <i class="fas fa-envelope  mb-2"></i>
                        <br />
                        Kontak
                      </h3>
                    </div>
                    <div class="col-md-6 body">
                      <h3>
                        <i class="fab fa-whatsapp mr-2"></i>Whatsapp
                      </h3>
                      <a href="https://wa.me/6287771542472" target="_blank">
                        087771542472
                      </a>
                      <hr class="x-hr" />
                      <hr class="y-hr" />
                      <h3>
                        <i class="fa fa-at mr-2"></i>Email
                      </h3>
                      <a
                        href="mailto:shanikaservicesofa@gmail.com"
                        target="_blank"
                      >
                        shanikaservicesofa@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <ul class="list-group list-group-flush alamat">
                  <li class="list-group-item">
                    <h3>
                      <i class="fa fa-map-marked-alt mr-2"></i>Alamat
                    </h3>
                  </li>
                  <li class="list-group-item">Jl. H. Hasan Arif No.203</li>
                  <li class="list-group-item">
                    Des. Banyuresmi 44191, Kec. Banyuresmi
                  </li>
                  <li class="list-group-item">
                    Kabupaten Garut, Jawa Barat, Indonesia
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- LOKASI END --> */}
        </div>
      </section>
    );
  }
}

export default Info;
