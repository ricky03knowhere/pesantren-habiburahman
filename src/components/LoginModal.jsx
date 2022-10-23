import React from "react";

function LoginModal() {
  // let data = props.kitab[0];

  return (
    <div
      class="modal fade"
      id="modal-99"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content single-card">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalCenterTitle">
              Login
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
            <h5 className="text-center mb-5">Scan to Login</h5>
            <div class="row justify-content-center">
              <div class="img-wrapper">
                <img src={"/assets/img/qr.png"} width="200" className="img-thumbnail shadow"/>
              </div>
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
