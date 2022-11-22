import React from "react";

function Ekstrakulikuler({data}) {
  console.log("data ==>> ", data);

  let items = data.map((data) => (
    <div class="col-md-6">
      <div class="card">
        <div class="row">
          <div class="col-md-5">
            <img
              class="card-img"
              src={"/assets/img/" + data.picture}
              alt={data.name}
            />
          </div>
          <div class="col-md-7">
            <h5 class="card-title">{data.name}</h5>
            <p class="card-text">{data.desc}</p>
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
