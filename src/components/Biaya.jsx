import React from "react";
import { biayaPutra, biayaPutri } from "../database/pendaftaran";

function Biaya() {
  function totalCotainer(val) {
    return (
      <div class="table-head">
        <div class="serial"></div>
        <div class="percentage">total</div>
        <div class="visit">
          {val.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </div>
      </div>
    );
  }

  let total;

  function fillTable(variable) {
    total = 0;
    return variable.map((data, i) => {
      total += data[1];
      return (
        <div class="table-row">
          <div class="serial">{i + 1}</div>
          <div class="percentage">{data[0]}</div>
          <div class="visit">
            {data[1].toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </div>
        </div>
      );
    });
  }

  return (
    <div class="row justify-content-center biaya-wrapper" id="biaya">
      <div class="col-md-11">
        <h3 class="sub-title">Biaya Pendaftaran</h3>
        <h4>
          <i class="fas fa-angle-double-right mr-2"></i>Santri Putra
        </h4>

        <div class="card putra">
          <div class="progress-table-wrap">
            <div class="progress-table">
              <div class="table-head">
                <div class="serial">#</div>
                <div class="percentage">Rincian</div>
                <div class="visit">Biaya</div>
              </div>
              {fillTable(biayaPutra)}
              {totalCotainer(total)}
            </div>
          </div>
        </div>

        <h4>
          <i class="fas fa-angle-double-right mr-2"></i>Santri Putri
        </h4>

        <div class="card putri">
          <div class="progress-table-wrap">
            <div class="progress-table">
              <div class="table-head">
                <div class="serial">#</div>
                <div class="percentage">Rincian</div>
                <div class="visit">Biaya</div>
              </div>
              {fillTable(biayaPutri)}
              {totalCotainer(total)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biaya;
