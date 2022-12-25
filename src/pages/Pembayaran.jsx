import axios from "axios";
import React, { useEffect, useState } from "react";
import { checkPembayaran, loadPembayaranModal } from "../interfaces";

const Pembayaran = () => {
  const [pembayaran, setPembayaran] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    (async () => setPembayaran(await checkPembayaran()))();
  }, []);

  return (
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
              <h5 class="text-white text-capitalize ps-3">
                <i
                  class="material-icons opacity-10 me-2"
                  style={{ transform: "scale(1.3)" }}
                >
                  history
                </i>
                History Pembayaran
              </h5>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      No.
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Pembayaran
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Tenggat Waktu
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Tanggal Bayar
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Status
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Detail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pembayaran.map((pem, i) => (
                    <tr>
                      <td>
                        <p class="text-sm text-secondary mb-0">{i + 1}</p>
                      </td>
                      <td>
                        <p class="text-sm text-secondary mb-0">
                          {pem.type === "pendaftaran"
                            ? "Biaya Pendaftaran"
                            : "SPP Bulan " +
                              new Date(pem.dueDate).toLocaleString("id-ID", {
                                month: "long",
                                year: "numeric",
                              })}
                        </p>
                      </td>
                      <td>
                        <span class="text-secondary text-sm font-weight-bold">
                          {new Date(pem.dueDate).toLocaleString("id-ID", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </td>
                      <td>
                        <span class="text-secondary text-sm font-weight-bold">
                          {pem.payDate
                            ? new Date(pem.payDate).toLocaleString("id-ID", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                              })
                            : "-"}
                        </span>
                      </td>
                      <td>
                        {pem.status === "false" ? (
                          <span class="badge badge-sm bg-gradient-danger">
                            unpaid
                          </span>
                        ) : pem.status === "pending" ? (
                          <span class="badge badge-sm bg-gradient-warning">
                            {pem.status}
                          </span>
                        ) : (
                          <span class="badge badge-sm bg-gradient-success">
                            {pem.status}
                          </span>
                        )}
                      </td>
                      <td>
                        {pem.status === "paid" ? (
                          <div className="col-1" id="infoPem">
                            <i
                              class="material-icons opacity-10 me-2"
                              data-toggle="modal"
                              data-target="#modal-1"
                              onClick={(e) =>
                                loadPembayaranModal(e, setModal, pembayaran)
                              }
                              data-id={i}
                            >
                              info
                            </i>
                          </div>
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- MODAL START --> */}
      {modal ? modal : ""}
      {/* <!-- MODAL END --> */}
    </div>
  );
};

export default Pembayaran;
