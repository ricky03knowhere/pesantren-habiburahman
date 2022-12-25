import React from "react";
import { SERVER_URL } from "../../utils/utils";

function PembayaranModal({ pembayaran }) {
  pembayaran = pembayaran[0];

  return (
    <div
      class="modal fade"
      id="modal-1"
      tabindex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content single-card">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalCenterTitle">
              {pembayaran.type === "pendaftaran"
                ? "Biaya Pendaftaran"
                : "SPP Bulan " +
                  new Date(pembayaran.dueDate).toLocaleString("id-ID", {
                    month: "long",
                    year: "numeric",
                  })}
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-center">
              <div class="col-md-4">
                <h5>Bukti Pembayaran</h5>
                <div class="img-wrapper">
                
                    <img
                      src={`${SERVER_URL}images/${pembayaran.picture}`}
                      alt={pembayaran.picture}
                    />
                </div>
              </div>
              <div class="col-md-8">
                <div class="table-responsive">
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <td height="5px">
                          <p>
                            <i class="fa fa-id-card mr-3"></i>Nama
                          </p>
                        </td>
                        <td>
                          <p>:&emsp;{pembayaran.user[0].name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <i class="fa fa-envelope mr-3"></i>Email
                          </p>
                        </td>
                        <td>
                          <p>:&emsp;{pembayaran.user[0].email}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <i class="fa fa-phone-alt mr-3"></i>No. Telepone
                          </p>
                        </td>
                        <td>
                          <p>:&emsp;{pembayaran.user[0].phone}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <i class="fa fa-dollar-sign mr-3"></i>Nominal
                          </p>
                        </td>
                        <td>
                          <p>
                            :&emsp;{" "}
                            {pembayaran.price.toLocaleString("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            })}
                          </p>
                        </td>
                      </tr>
                      {pembayaran.payDate ? (
                        <tr>
                          <td>
                            <p>
                              <i class="fa fa-calendar-alt mr-3"></i>Tanggal
                              Bayar
                            </p>
                          </td>
                          <td>
                            <p>
                              :&emsp;
                              {new Date(pembayaran?.payDate).toLocaleString(
                                "en-UK"
                              )}
                            </p>
                          </td>
                        </tr>
                      ) : (
                        ""
                      )}
                      {/* <tr>
                        <td>
                          <p>
                            <i class="fa fa-book-open mr-3"></i>Deskripsi
                          </p>
                        </td>
                        <td>
                          <p>:</p>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                  <p class="desc">&emsp;{pembayaran.desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default PembayaranModal;
