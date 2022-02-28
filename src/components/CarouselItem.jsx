import React from "react";

function CarouselItem(props) {
  let tagline = props.tagline;
  let id = props.id;
  
  return (
    <div className={"carousel-item " + ((id == 0) ? "active" : "")}>
      <img
        className="d-block"
        src={"/assets/img/" + tagline[0]}
        alt={"slide" + id}
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>{tagline[1]}</h5>
        <p>{tagline[2]} </p>
      </div>
    </div>
  );
}

export default CarouselItem;
