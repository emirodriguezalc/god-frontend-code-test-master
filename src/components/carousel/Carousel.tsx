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

import { Car } from "../../../types/Car";
import CarListItem from "../CarListItem";
import styles from "./Carousel.module.css"

type CarouselProps = {
  cars: Car[];
};

interface CustomCarouselStoreInterface extends CarouselStoreInterface {
  previous?: () => void;
  next?: () => void;
}

const Carousel = ({ cars }: CarouselProps) => {
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(0);
  const carouselContext = useContext<CustomCarouselStoreInterface>(CarouselContext);

  useEffect(() => {
    const handleResize = () => {
      setSliderWidth(document.getElementById("carousel-slider")?.clientWidth || 0);
      setIsMobile(window.matchMedia("(max-width: 479px)").matches);
      setIsTablet(window.matchMedia("(min-width: 479px) and (max-width: 1023px)").matches);
      setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleSlidesLookup = {
    /* true: 1.3 INFO: #8 Of the readme */
    true: 1,
    [String(isTablet)]: 2.5,
    [String(isDesktop)]: 4.,
  };

  const visibleSlides = visibleSlidesLookup['true'];
  const slideWidth = sliderWidth / visibleSlides;

  return (
    <CarouselProvider
      /* INFO: #5 Of the readme, possible odd behaviour found in prod site */
      key={cars.map(car => car.id).join("")}
      naturalSlideWidth={slideWidth}
      naturalSlideHeight={300}
      totalSlides={cars.length}
      visibleSlides={visibleSlides}
      isIntrinsicHeight={true}
      infinite={false}
    >
      <Flex extend={{ onlyS: { padding: '24px 0 24px 24px' }, fromL: { maxWidth: '85vw', margin: 'auto' } }}>
        <Slider id="carousel-slider">
          {cars.map((car, index) => (
            <Slide index={index} key={car.id} className={styles.slide_spacing}>
              <CarListItem car={car} />
            </Slide>
          ))}
        </Slider>
        {isMobile ?
          <Flex extend={{ flexDirection: 'row', justifyContent: 'center' }}>
            {Array.from({ length: cars.length }, (_, i) => {
              cars.length > visibleSlides && (
                <Dot
                  slide={i}
                  key={i}
                  className={`${styles.carousel_dot}`}
                />
              )
            })}
          </Flex>
          : <Flex
            extend={{
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
            className={styles.slide_spacing}
          >
            {cars.length > visibleSlides && <>
              <ButtonBack
                className={styles.carousel_button}
                onClick={() => carouselContext?.previous?.()}
              >
                {<Icon type="navigation-chevronback-16" />}
              </ButtonBack>
              <Spacer size={1.5} />
              <ButtonNext
                className={styles.carousel_button}
                onClick={() => carouselContext?.next?.()}
              >
                {<Icon type="navigation-chevronforward-16" />}
              </ButtonNext>
            </>}
          </Flex>}
      </Flex>
    </CarouselProvider >
  );
};

export default Carousel;
