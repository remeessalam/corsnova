import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SubHeading from "./SubHeading";
import { appPortfolio, webPortfolio } from "../constant";

const Portfolio = ({ page }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [slideCount, setSlideCount] = useState(0);

  let portfolioList;

  if (page === "web-development") {
    portfolioList = webPortfolio;
  } else if (page === "app-development") {
    portfolioList = appPortfolio;
  } else {
    portfolioList = webPortfolio.slice(0, 3).concat(appPortfolio.slice(0, 3));
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      perView: () => {
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
      },
      spacing: 28,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setLoaded(true);
      // Calculate how many dots we need based on slides and visible slides
      const totalSlides = slider.track.details.slides.length;
      const slidesPerView = slider.options.slides.perView;
      // Make sure we handle the case when slidesPerView is a function
      const visibleSlides =
        typeof slidesPerView === "function" ? slidesPerView() : slidesPerView;

      // Calculate dots: max = total slides - visible slides + 1
      // Ensure it's at least 1 and not negative
      const dotsCount = Math.max(1, totalSlides - (visibleSlides - 1));
      setSlideCount(dotsCount);
    },
  });

  // Auto-slide functionality
  useEffect(() => {
    if (loaded && instanceRef.current) {
      const keenSlider = instanceRef.current;

      const interval = setInterval(() => {
        if (keenSlider && keenSlider.track) {
          const maxSlide = keenSlider.track.details.maxIdx;

          if (currentSlide === maxSlide) {
            keenSlider.moveToIdx(0);
          } else {
            keenSlider.next();
          }
        }
      }, 3000); // Change slides every 3 seconds

      return () => {
        clearInterval(interval);
      };
    }
  }, [loaded, instanceRef, currentSlide]);

  // Update perView on window resize
  useEffect(() => {
    const handleResize = () => {
      if (instanceRef.current) {
        instanceRef.current.update();

        // Recalculate dots on resize
        if (instanceRef.current.track) {
          const totalSlides = instanceRef.current.track.details.slides.length;
          const slidesPerView = instanceRef.current.options.slides.perView;
          const visibleSlides =
            typeof slidesPerView === "function"
              ? slidesPerView()
              : slidesPerView;

          const dotsCount = Math.max(1, totalSlides - (visibleSlides - 1));
          setSlideCount(dotsCount);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [instanceRef]);

  return (
    <div className="pt-[5rem] wrapper flex flex-col items-center gap-5">
      <SubHeading heading="Our Portfolio" />
      <h2
        data-aos="fade-up"
        className="heading-2 max-w-[60rem] mx-auto text-center !text-black"
      >
        Work Speaks Volumes: Discover Our Projects
      </h2>

      <div className="w-full max-w-5xl mx-auto mt-5">
        <div ref={sliderRef} className="keen-slider  py-[4rem]">
          {portfolioList.map(({ img, id, title }) => (
            <div key={id} className="keen-slider__slide shadowHover rounded-xl">
              <div
                className="relative aspect-square sm:aspect-square rounded-xl overflow-hidden"
                data-aos="fade-up"
              >
                <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-darkgray z-0"></div>
                <img
                  loading="lazy"
                  src={img}
                  width="200"
                  height="200"
                  className={`-z-10 h-full w-full object-cover`}
                  alt={title}
                />
                <h3 className="text-xl absolute p-3 bottom-0 left-0 w-full bg-darkgray text-center text-white">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* {loaded && (
          <div className="flex justify-center gap-2 mt-4">{renderDots()}</div>
        )} */}
      </div>
    </div>
  );
};

export default Portfolio;
