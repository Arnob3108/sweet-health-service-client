import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import img1 from "../../../Assets/slider/img1.jpg";
import img2 from "../../../Assets/slider/img2.jpg";
import img3 from "../../../Assets/slider/img3.jpg";
import img4 from "../../../Assets/slider/img4.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
  return (
    <div className="p-0 lg:px-28 lg:py-5 w-[90%] mx-auto">
      <AutoplaySlider
        animation="cubeAnimation"
        play={true}
        cancelOnInteraction={false}
        interval={2000}
      >
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
        <div data-src={img4} />
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
