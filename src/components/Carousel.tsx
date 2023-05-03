import "pure-react-carousel/dist/react-carousel.es.css";

import {
  ButtonBack,
  ButtonNext,
  CarouselContext,
  CarouselProvider,
  CarouselStoreInterface,
  Dot,
  Slide,
  Slider
} from "pure-react-carousel";
import { Flex, Icon, Spacer } from "vcc-ui";
import React, { useContext, useEffect, useState } from "react";

import { Car } from "../../types/Car";
import CarListItem from "./CarListItem";

type CarouselProps = {
  cars: Car[];
};

interface CustomCarouselStoreInterface extends CarouselStoreInterface {
  previous?: () => void;
  next?: () => void;
}

const Carousel = ({ cars }: CarouselProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(0);
  const carouselContext = useContext<CustomCarouselStoreInterface>(CarouselContext);

  useEffect(() => {
    const handleResize = () => {
      setSliderWidth(document.getElementById("carousel-slider")?.clientWidth || 0);
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideWidth = sliderWidth / 4;

  return (
    <CarouselProvider
      naturalSlideWidth={slideWidth}
      naturalSlideHeight={300}
      totalSlides={cars.length}
      visibleSlides={isMobile ? 1 : 4}
      isIntrinsicHeight={true}
      infinite={true}
    >
      <Flex>
        <Slider id="carousel-slider">
          {cars.map((car, index) => (
            <Slide index={index} key={car.id}>
              <CarListItem car={car} />
            </Slide>
          ))}
        </Slider>
        <Flex
          extend={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <ButtonBack
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "var(--v-color-background-primary)",
              width: 40,
              height: 40,
              borderRadius: 40,
              border: "1px solid black",
            }}
            onClick={() => carouselContext?.previous?.()}
          >
            {<Icon type="navigation-chevronback-16" />}
          </ButtonBack>
          <Spacer size={1.5} />
          <ButtonNext
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "var(--v-color-background-primary)",
              width: 40,
              height: 40,
              borderRadius: 40,
              border: "1px solid black",
            }}
            onClick={() => carouselContext?.next?.()}
          >
            {<Icon type="navigation-chevronforward-16" />}
          </ButtonNext>

        </Flex>
      </Flex>
      <Flex
        extend={{
          justifyContent: "center",
          marginTop: "16px",
        }}
      >
        {Array.from({ length: cars.length }, (_, i) => (
          <Dot
            slide={i}
            key={i}
            style={{
              backgroundColor:
                i === carouselContext?.state.currentSlide
                  ? "var(--v-color-always-black)"
                  : "var(--v-color-background-secondary)",
              width: "8px",
              height: "8px",
              borderRadius: "8px",
              margin: "0 4px",
            }}
          />
        ))}
      </Flex>
    </CarouselProvider>
  );
};

export default Carousel
