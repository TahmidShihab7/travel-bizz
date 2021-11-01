import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import img1 from "./img/slide-1.jpg";
import img2 from "./img/slide-2.jpg";
import img3 from "./img/slide-3.jpg";
import img4 from "./img/slide-4.jpg";
import img5 from "./img/slide-5.jpg";
const Banner = () => {
  return (
    <Carousel fade indicator>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={img4} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={img5} alt="Fifth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
