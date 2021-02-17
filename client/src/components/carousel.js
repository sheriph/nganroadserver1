import React from "react";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";
import { Container } from "@material-ui/core";
//import Logo from "../images/images1.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{ width: "100%", height: "350px"}}
    >
      <AutoplaySlider
        //  animation="cubeAnimation"
        bullets={false}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={10000}
        media={[
          {
            source: "../images/images1.jpg",
          },
          {
            source: "../images/images2.jpg",
          },
          {
            source: "../images/images3.jpg",
          },
        ]}
      />
    </Container>
  );
};

export default Carousel;
