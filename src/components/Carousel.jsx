import React from "react";
import CarouselItem from "./CarouselItem";
import { taglines } from "../database/profile";

function Carousel() {
  let carouselItem = taglines.map((tagline) => {
    return (
      <CarouselItem
        key={taglines.indexOf(tagline)}
        id={taglines.indexOf(tagline)}
        tagline={tagline}
      />
    );
  });

  return (
    <section id="carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        {carouselItem}

        <a href="/#profile" className="btn radius-btn btn-explore">
          Explore
        </a>
      </div>
      <a
        className="carousel-control-prev ctrl"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next ctrl"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </section>
  );
}

export default Carousel;
