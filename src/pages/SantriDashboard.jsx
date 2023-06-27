import React, { useEffect, useState } from "react";
import { checkPembayaran } from "../interfaces";

const SantriDashboard = () => {
  let [notif, setNotif] = useState({});

  useEffect(() => {
    (async () => {
      const getData = await checkPembayaran();
      console.log("CheckPembayaran ==>> ", getData);
      let filtered = getData.filter(
        (item) => item.type === "pendaftaran" && item.status === "unpaid"
      );
      console.log("filtered ==>> ", filtered[0]);
      notif = filtered[0];
      setNotif(notif);
    })();
  }, []);

  console.log("NOTIF ==>> ", notif);
  const getDate = new Date(notif?.dueDate);
  const price = notif?.price?.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  const date =
    getDate.toLocaleTimeString("en-UK") +
    " " +
    getDate.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  console.table({ getDate, price, date });

  return (
    <div class="row mt-5" style={{ marginBottom: "21em" }}>
      {notif ? (
        <div
          class="alert alert-info alert-dismissible text-white"
          style={{ marginBottom: "5em" }}
          role="alert"
        >
          <span class="alert-icon">
            <h5 className="font-weight-bold text-white">
              <i
                class="fa fa-info-circle me-2 text-white"
                style={{ transform: "scale(1.3)" }}
              ></i>{" "}
              Success!
            </h5>
          </span>
          <span
            class="alert-text text-sm d-block pt-2"
            style={{ lineHeight: "1.5rem" }}
          >
            Anda telah terdaftar sebagau santri, silahkan lakukan pembayaran
            biaya pendaftaran dengan nominal{" "}
            <b style={{ color: "#2f343a" }}>{price}</b> ke rekening{" "}
            <b style={{ color: "#2f343a" }}>38-2918-1018</b> atas nama{" "}
            <b style={{ color: "#2f343a" }}>Nico Robbin</b>, Batas waktu
            pembayaran sampai pukul <b style={{ color: "#2f343a" }}>{date}</b>{" "}
            <a
              href="form_pembayaran"
              class="font-weight-bold mt-3"
              style={{
                padding: ".5em .8em",
                background: "linear-gradient(195deg,#ffa726,#fb8c00)",
                borderRadius: "0.5rem",
                display: "block",
                width: "10em",
              }}
            >
              Bayar Sekarang
            </a>
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
      ) : null}

      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4 mt">
        <div class="card">
          <div class="card-header p-3 pt-2">
            <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
              <i class="material-icons opacity-10">money</i>
            </div>
            <div class="text-end pt-1">
              <p class="text-sm mb-0 text-capitalize">Tagihan Bulan Ini</p>
              <h4 class="mb-0">Rp900k</h4>
            </div>
          </div>
          <hr class="dark horizontal my-0" />
          <div class="card-footer p-3">
            {/* <p class="mb-0">
              <span class="text-success text-sm font-weight-bolder">+55% </span>
              than lask week
            </p> */}
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div class="card">
          <div class="card-header p-3 pt-2">
            <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
              <i class="material-icons opacity-10">money</i>
            </div>
            <div class="text-end pt-1">
              <p class="text-sm mb-0 text-capitalize">Biaya Pendaftaran</p>
              <h4 class="mb-0">Lunas ✅</h4>
            </div>
          </div>
          <hr class="dark horizontal my-0" />
          <div class="card-footer p-3">
            {/* <p class="mb-0">
              <span class="text-success text-sm font-weight-bolder">+3% </span>
              than lask month
            </p> */}
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div class="card">
          <div class="card-header p-3 pt-2">
            <div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
              <i class="material-icons opacity-10">weekend</i>
            </div>
            <div class="text-end pt-1">
              <p class="text-sm mb-0 text-capitalize">SPP Terbayar</p>
              <h4 class="mb-0">5 (bulan)</h4>
            </div>
          </div>
          <hr class="dark horizontal my-0" />
          <div class="card-footer p-3">
            {/* <p class="mb-0">
              <span class="text-danger text-sm font-weight-bolder">-2%</span>{" "}
              than yesterday
            </p> */}
          </div>
        </div>
      </div>
      {/* <div class="col-xl-3 col-sm-6">
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
      </div> */}
    </div>
  );
};

export default SantriDashboard;
