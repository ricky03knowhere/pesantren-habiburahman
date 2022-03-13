import React from "react";
import { kegiatan1, kegiatan2, kegiatan3 } from "../database/kurikulum";

function Kegiatan() {
  let harian = kegiatan1.map((data, i) => (
    <div class="table-row">
      <div class="serial">{i + 1}</div>
      <div class="visit">{data[0]}</div>
      <div class="percentage">{data[1]}</div>
    </div>
  ));

  function fillKegiatan(variable) {
    return variable.map((data) => <li>{data}</li>);
  }

  let mingguan = fillKegiatan(kegiatan2);
  let tahunan = fillKegiatan(kegiatan3);
  return (
    <div class="row justify-content-center kegiatan" id="jadwal">
      <div class="col-md-11">
        <h3 class="sub-title">Jadwal Kegiatan</h3>
        <div class="accordion" id="accordionExample">
          <div class="card harian">
            <div class="card-header card-top" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Harian
                </button>
                <a
                  href="#!"
                  class="angle"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                >
                  <i class="fa fa-angle-left mr-2"></i>
                </a>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="progress-table-wrap">
                  <div class="progress-table">
                    <div class="table-head">
                      <div class="serial">#</div>
                      <div class="visit">Waktu</div>
                      <div class="percentage">Kegiatan</div>
                    </div>
                    {harian}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mingguan">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Mingguan
                </button>
                <a
                  href="#!"
                  class="angle collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                >
                  <i class="fa fa-angle-left mr-2"></i>
                </a>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <ul class="unordered-list">{mingguan}</ul>
              </div>
            </div>
          </div>
          <div class="card tahunan">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Tahunan
                </button>
                <a
                  href="#!"
                  class="angle collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                >
                  <i class="fa fa-angle-left mr-2"></i>
                </a>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="">
                  <ul class="unordered-list">{tahunan}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kegiatan;
