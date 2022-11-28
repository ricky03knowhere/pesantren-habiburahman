import React from "react";
import { SERVER_URL } from "../utils/utils";

function KitabModal({ kitab }) {
  kitab = kitab[0];

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
              {kitab.title}
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
                <div class="img-wrapper">
                  <img
                    src={`${SERVER_URL}images/${kitab.picture}`}
                    alt={kitab.picture}
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
                            <i class="fa fa-user-edit mr-3"></i>Penulis
                          </p>
                        </td>
                        <td>
                          <p>:&emsp;{kitab.author}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <i class="fa fa-swatchbook mr-3"></i>Genre
                          </p>
                        </td>
                        <td>
                          <p>:&emsp;{kitab.genre}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <i class="fa fa-book-open mr-3"></i>Deskripsi
                          </p>
                        </td>
                        <td>
                          <p>:</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="desc">
                    &emsp;{kitab.desc}
                  </p>
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

export default KitabModal;
