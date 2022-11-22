import React from "react";
import { getBirthDate } from "../utils/utils";

function ProfileModal({ data }) {
  data = data[0];
  console.log(data);
  return (
    <div
      class="modal fade"
      id="modal-1"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content single-card">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalCenterTitle">
              {data.name}
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
            <div class="row">
              <div class="col-md-4 justify-items-center">
                <img src={"/assets/img/" + data.picture} alt={data.name} />
              </div>
              <div class="col-md-8">
                <div class="table-responsive">
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <td height="5px">
                          <p>
                            <i class="fa fa-user-tie mr-3"></i>Jabatan
                          </p>
                        </td>
                        <td>
                          <p>:&emsp;{data.position}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <i class="fa fa-calendar-alt mr-3"></i>Tanggal Lahir
                          </p>
                        </td>
                        <td>
                          <p>:&emsp;{getBirthDate(data.birthDate)}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <i class="fa fa-briefcase mr-3"></i>Profesi
                          </p>
                        </td>
                        <td>
                          <p>:&emsp;{data.profession}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <i class="fa fa-map-marked-alt mr-3"></i>Alamat
                          </p>
                        </td>
                        <td>
                          <p>:&emsp;{data.address}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="table-responsive m-4">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <i class="fa fa-graduation-cap mr-3"></i>Edukasi
                        </p>
                      </td>
                      <td class="education">
                        <p>:&emsp;</p>
                        <ul>
                          {data.education.map((i) => (
                            <li>{i}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <i class="fa fa-globe mr-3"></i>Media Sosial
                        </p>
                      </td>
                      <td>
                        <p>
                          :&emsp;
                          <a href={data.socials[0]}>
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a href={data.socials[1]}>
                            <i class="fa fa-envelope"></i>
                          </a>
                          <a href={data.socials[2]}>
                            <i class="fab fa-facebook-square"></i>
                          </a>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
