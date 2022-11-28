import React, { Component } from "react";
import { Markup } from "interweave";
import PageTitle from "../components/PageTitle";
import { changeTitle } from "../utils/utils.js";
import { alurPendaftaran, persyaratan } from "../database/pendaftaran";
import Biaya from "../components/Biaya";

class Pendaftaran extends Component {
  componentDidMount() {
    changeTitle("Pendaftaran");
  }

  render() {
    let getPersyaratan = persyaratan.map((data) => (
      <li class="list-group-item">
        <i class="fas fa-check-square mr-3"></i>
        {data}
      </li>
    ));

    let getAlurPendaftaran = alurPendaftaran.map((data, i) => (
      <li class="list-group-item">
        <span class="number">0{i + 1}) </span>
        <Markup content={data} />
      </li>
    ));

    return (
      <section id="pendaftaran">
        <div class="container">
          <PageTitle title="Pendaftaran" />

          {/* <!-- PERSYARATAN START --> */}
          <div class="row justify-content-center persyaratan-wrapper" id="syarat">
            <div class="col-md-11">
              <h3 class="sub-title">Persyaratan</h3>
              <div class="card">
                <ul class="list-group list-group-flush">{getPersyaratan}</ul>
              </div>
            </div>
          </div>
          {/* <!-- PERSYARATAN END --> */}

          {/* <!--ALUR START--> */}
          <div class="row justify-content-center alur-wrapper" id="alur">
            <div class="col-md-11">
              <h3 class="sub-title">Alur Pendaftaran</h3>
              <div class="card">
                <ul class="list-group list-group-flush">
                  {getAlurPendaftaran}
                </ul>
              </div>
            </div>
          </div>
          {/* <!--ALUR END--> */}

          {/* <!--BIAYA START--> */}
          <Biaya />
          {/* <!-- BIAYA END --> */}
        </div>
      </section>
    );
  }
}

export default Pendaftaran;
