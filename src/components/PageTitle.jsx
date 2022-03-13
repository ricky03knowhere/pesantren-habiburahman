import React from "react";

function PageTitle(props) {
  return (
    <div class="row justify-content-center">
      <div class="col-xl-8">
        <div class="section-tittle text-center">
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
