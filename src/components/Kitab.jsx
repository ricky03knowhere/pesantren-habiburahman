import React, { useState } from "react";
import { kitab } from "../database/kurikulum";
import KitabModal from "./KitabModal";

function Kitab() {
  let [modal, setModal] = useState("");

  function loadModal(e) {
    const id = e.target.dataset.id;
    const data = kitab.filter((item) => item[0] == id);
    console.log(e.target.dataset);
    setModal((modal) => {
      modal = <KitabModal kitab={data} />;
      console.log("ok");
      return modal;
    });
  }

  let items = kitab.map((data) => (
    <div class="item">
      <div
        class="card mb-5"
        data-toggle="modal"
        data-target="#modal-1"
        onClick={loadModal}
      >
        <img src={"/assets/img/" + data[5]} class="card-img" alt={data[1]} />
        <div class="card-img-overlay" data-id={data[0]}>
          <h4 class="text-white title">{data[1]}</h4>
          <span class="author">{data[2]}</span>
        </div>
      </div>
    </div>
  ));

  return (
    <div class="row justify-content-center kitab-wrapper" id="kitab">
      <div class="col-md-11">
        <h3 class="sub-title">Kitab yang Dikaji</h3>

        <div class="owl-carousel owl-theme">{items}</div>
      </div>

      {/* <!-- MODAL START --> */}
      {modal}
      {/* <!-- MODAL END --> */}
    </div>
  );
}

export default Kitab;
