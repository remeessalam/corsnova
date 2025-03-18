import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { allServices } from "../../constant";
import SubHeading from "../SubHeading";
import Drawer from "react-modern-drawer";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SlidingService = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0]);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [slideCount, setSlideCount] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: () => {
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
      },
      spacing: 24,
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

  const renderDots = () => {
    // Only render if we have valid numbers
    if (!slideCount || slideCount <= 0) return null;

    const dots = [];
    for (let i = 0; i < slideCount; i++) {
      dots.push(
        <button
          key={i}
          onClick={() => {
            instanceRef.current?.moveToIdx(i);
          }}
          className={`w-3 h-3 rounded-full ${
            currentSlide === i ? "bg-primary" : "bg-gray-300"
          }`}
        ></button>
      );
    }
    return dots;
  };

  return (
    <section className="wrapper py-[5rem] flex flex-col gap-5 items-center">
      <SubHeading heading="Our Services" />
      <h2
        data-aos="fade-up"
        className="heading-2 max-w-[60rem] mx-auto text-center text-black"
      >
        From Concept to Reality: Building Tomorrow's Solutions Today
      </h2>

      <div className="mt-5 w-full">
        <div ref={sliderRef} className="keen-slider">
          {allServices.map((service, idx) => (
            <div key={idx} className="keen-slider__slide">
              <div
                data-aos="fade-up"
                className="bg-darkgray group h-full hover:bg-primary transition-all duration-500 rounded-lg p-5 flex text-center flex-col justify-between"
              >
                <div className="flex flex-col items-center">
                  <service.icon
                    size={50}
                    className="h-[3.5rem] md:h-[5rem] grayscale group-hover:text-black"
                  />

                  <h6 className="text-xl font-medium mt-2 group-hover:text-black">
                    {service.title}
                  </h6>
                  <p className="text-sm md:text-base font-light mt-2 text-white group-hover:text-black">
                    {service.description}
                  </p>
                </div>
                <button
                  onClick={() => navigate(service.link)}
                  className="primary-btn mt-5 w-fit mx-auto !text-black"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {loaded && (
          <div className="flex justify-center gap-2 mt-4">{renderDots()}</div>
        )}
      </div>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-10 w-screen"
        lockBackgroundScroll
      >
        <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-[2.2rem]"
          >
            <X size={30} />
          </button>
        </div>
        <div className="wrapper flex flex-col gap-6 tex-white pb-[2rem]">
          <h1 className="heading-2">{selectedService.title}</h1>
          <p className="desc whitespace-pre-line">
            {selectedService.detailContent}
          </p>
        </div>
      </Drawer>
    </section>
  );
};

export default SlidingService;
