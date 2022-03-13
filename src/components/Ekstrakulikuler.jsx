import React from "react";
import { ekstrakulikuler } from "../database/kurikulum";

function Ekstrakulikuler() {
  let items = ekstrakulikuler.map((data) => (
    <div class="col-md-6">
      <div class="card">
        <div class="row">
          <div class="col-md-5">
            <img
              class="card-img"
              src={"/assets/img/" + data[1]}
              alt={data[0]}
            />
          </div>
          <div class="col-md-7">
            <h5 class="card-title">{data[0]}</h5>
            <p class="card-text">{data[2]}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div class="row justify-content-center kulikuler-wrapper" id="kulikuler">
      <div class="col-md-11">
        <h3 class="sub-title">Ekstrakulikuler</h3>
        <div class="row card-wrapper">{items}</div>
      </div>
    </div>
  );
}

export default Ekstrakulikuler;
