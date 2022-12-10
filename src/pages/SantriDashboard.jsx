import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../utils/utils";

const SantriDashboard = () => {
  const [notif, setNotif] = useState("");

  const checkPembayaran = async () => {
    const { _id } = JSON.parse(localStorage.getItem("user"));

    const data = await axios
      .get(`${SERVER_URL}transaction/pembayaran/${_id}`)
      .then(({ data }) => data)
      .catch((err) => console.log(err));

    console.log("data", data);

    let isNotif = !data
      ? ""
      : data.filter((item) => item.type === "pendaftaran");
    setNotif(isNotif);
  };

  useEffect(() => {
    checkPembayaran();
  }, []);

  return (
    <div class="row">
      {/* {notif !== "" ? ( */}
      <div class="alert alert-info alert-dismissible text-white" role="alert">
        <span class="alert-icon">
          <i class="fa fa-info-circle fa-2x me-2"></i> Success!
        </span>
        <span class="alert-text text-sm">
          Anda telah terdaftar sebagau santri, silahkan lakukan pembayaran biaya
          pendaftaran dengan nominal
          <b>
            {(80000).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            })}
          </b>
          ke rekening <b>38-2918-1018</b> atas nama <b>Nico Robbin</b>
          {/* <a href="javascript:;" class="alert-link text-white">
                    an example link
                  </a> */}
        </span>
        <button
          type="button"
          class="btn-close text-lg py-3 opacity-10"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {/* ) : null} */}

      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div class="card">
          <div class="card-header p-3 pt-2">
            <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
              <i class="material-icons opacity-10">weekend</i>
            </div>
            <div class="text-end pt-1">
              <p class="text-sm mb-0 text-capitalize">Today's Money</p>
              <h4 class="mb-0">$53k</h4>
            </div>
          </div>
          <hr class="dark horizontal my-0" />
          <div class="card-footer p-3">
            <p class="mb-0">
              <span class="text-success text-sm font-weight-bolder">+55% </span>
              than lask week
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div class="card">
          <div class="card-header p-3 pt-2">
            <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
              <i class="material-icons opacity-10">person</i>
            </div>
            <div class="text-end pt-1">
              <p class="text-sm mb-0 text-capitalize">Today's Users</p>
              <h4 class="mb-0">2,300</h4>
            </div>
          </div>
          <hr class="dark horizontal my-0" />
          <div class="card-footer p-3">
            <p class="mb-0">
              <span class="text-success text-sm font-weight-bolder">+3% </span>
              than lask month
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div class="card">
          <div class="card-header p-3 pt-2">
            <div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
              <i class="material-icons opacity-10">person</i>
            </div>
            <div class="text-end pt-1">
              <p class="text-sm mb-0 text-capitalize">New Clients</p>
              <h4 class="mb-0">3,462</h4>
            </div>
          </div>
          <hr class="dark horizontal my-0" />
          <div class="card-footer p-3">
            <p class="mb-0">
              <span class="text-danger text-sm font-weight-bolder">-2%</span>{" "}
              than yesterday
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6">
        <div class="card">
          <div class="card-header p-3 pt-2">
            <div class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
              <i class="material-icons opacity-10">weekend</i>
            </div>
            <div class="text-end pt-1">
              <p class="text-sm mb-0 text-capitalize">Sales</p>
              <h4 class="mb-0">$103,430</h4>
            </div>
          </div>
          <hr class="dark horizontal my-0" />
          <div class="card-footer p-3">
            <p class="mb-0">
              <span class="text-success text-sm font-weight-bolder">+5% </span>
              than yesterday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SantriDashboard;
