import axios from "axios";
import React, { useState, useEffect } from "react";
import { SERVER_URL } from "../utils/utils.js";

function Biaya() {
  const [biaya, setBiaya] = useState([]);

  useEffect(() => {
    axios
      .get(SERVER_URL + "info/biaya")
      .then(({ data }) => setBiaya(data))
      .catch((err) => console.log(err));
  }, []);

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

  function fillTable(type) {
    total = 0;
    return biaya
      .filter((el) => el.type === type)
      .map((data, i) => {
        total += data.price;
        return (
          <div class="table-row">
            <div class="serial">{i + 1}</div>
            <div class="percentage">{data.desc}</div>
            <div class="visit">
              {data.price.toLocaleString("id-ID", {
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
              {fillTable("putra")}
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
              {fillTable("putri")}
              {totalCotainer(total)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biaya;
