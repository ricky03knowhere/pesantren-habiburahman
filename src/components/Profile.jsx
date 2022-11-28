import axios from "axios";
import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { about } from "../database/profile";
import { SERVER_URL } from "../utils/utils.js";
import ProfileModal from "./ProfileModal";

function Profile() {
  const [modal, setModal] = useState("");
  const [pengajar, setPengajar] = useState([]);
  const [loading, setLoading] = useState(true);

  let details = about[1].map((detail) => (
    <tr>
      <td>
        <p>
          <i className={"fa " + detail[0] + " mr-3"}></i>
          {detail[1]}
        </p>
      </td>
      <td>
        <p>:&emsp;{detail[2]}</p>
      </td>
    </tr>
  ));

  const loadModal = (e) => {
    setModal("");
    const id = e.target.dataset.id;
    let profile = pengajar.filter((prof) => pengajar.indexOf(prof) == id);
    setModal(<ProfileModal data={profile} />);
  };

  const profileGenerate = (pengajar) => {
    console.log("pengajar ready ==>> ", pengajar);
    return pengajar.map((profile, i) => (
      <div className="item" key={i}>
        <div
          className="single-card profile-card"
          data-toggle="modal"
          data-target="#modal-1"
          onClick={loadModal}
        >
          <div className={"img-card id" + i} data-id={i}></div>
          <a className="btn card-btn1" data-id={i}>
            {profile.name}
          </a>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    axios
      .get(SERVER_URL + "info/pengajar")
      .then(({ data }) => {
        setPengajar(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="pricing-card-area" id="profile">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-8">
            <div className="section-tittle text-center">
              <h2>Profil Pesantren</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-around card-wrapper">
          <div className="col-md-6">
            <div className="single-card text-center mb-30">
              <div className="card-top">
                <a href="services.html" className="btn card-btn1">
                  Tentang Kami
                </a>
              </div>
              <div className="card-bottom">
                <p>{about[0]}</p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="single-card text-center mb-30 details">
              <div className="card-top">
                <a href="services.html" className="btn card-btn1">
                  Detail
                </a>
              </div>
              <div className="card-bottom">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <tbody>{details}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--PENGAJAR START--> */}
        <Element
          className="row pengajar-wrapper element"
          id="pengajar"
          name="pengajar"
        >
          <h3 className="sub-title">Daftar Pengajar</h3>

          {!loading ? (
            <div className="owl-carousel owl-theme">
              {profileGenerate(pengajar)}
            </div>
          ) : (
            <div className="row  mt-4 col-12 justify-content-center">
              <h4>Loading content...</h4>
            </div>
          )}
        </Element>
        {/* <!--PENGAJAR END--> */}
      </div>

      {/* <!-- MODAL START --> */}
      {modal ? modal : ""}
      {/* <!-- MODAL END --> */}
    </section>
  );
}

export default Profile;
