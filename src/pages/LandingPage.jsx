import React, { lazy } from "react";
import bannerImg from "../assets/images/banner.webp";
import SubHeading from "../components/SubHeading";
import { appDevelopmentServices, webDevelopmentServices } from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import appDevAboutImg from "../assets/images/landingpage/app-dev-about.webp";
import webDevAboutImg from "../assets/images/landingpage/web-dev-about.webp";
import ReactPlayer from "react-player";
import vid from "../assets/video/banner.mp4";
import LeadForm from "../components/LeadForm";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const Portfolio = lazy(() => import("../components/Portfolio"));
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const LandingPage = ({ page }) => {
  const isWebLanding = Boolean(page === "web-development");
  let services;
  if (page === "web-development") {
    services = webDevelopmentServices;
  } else {
    services = appDevelopmentServices;
  }

  return (
    <>
      <LandingHeader />

      <section id="banner" className="h-screen w-screen  relative text-white">
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
        >
          <p className="text-xl">
            Welcome to{" "}
            <span className="text-primary font-semibold">CORSNOVA</span>
          </p>
          <h1 className="heading-1 text-stroke">
            {isWebLanding
              ? "Crafting High-Performance Websites that Drive Results"
              : "Innovation-Driven App Development Services"}
          </h1>
          <p className="sub-heading !text-white">
            AI Meets Integrity - Empowering Innovation with Intelligence
          </p>
        </div>
        <div className="absolute top-0">
          <ReactPlayer
            url={vid}
            playing
            muted
            playsinline
            loop
            pip={false}
            width="100%"
            height="100%"
            config={{
              file: {
                attributes: {
                  style: {
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                  },
                },
              },
            }}
          />
        </div>
      </section>
      <section id="about" className="text-white wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={isWebLanding ? webDevAboutImg : appDevAboutImg}
              className="object-cover h-full rounded-lg"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading
                heading={isWebLanding ? "Web Development" : "App Development"}
              />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={isWebLanding ? webDevAboutImg : appDevAboutImg}
                  className="object-cover h-full rounded-lg w-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto !text-black">
                {isWebLanding
                  ? "Innovative Web Development Solutions for Modern Brands"
                  : "Your Ideas, Perfectly Engineered into Apps"}
              </h2>
              <p className="desc">
                {isWebLanding
                  ? "Our approach to web development combines innovation with technical expertise. We deliver websites that capture your brand’s essence while delivering a seamless experience across all devices, helping you connect with users and drive growth."
                  : "We believe every idea has the potential to become a powerful digital experience. Our development team specializes in turning visions into functional, engaging, and scalable apps—optimized to meet the needs of your users and deliver real results."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <LeadForm />

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading
          heading={
            isWebLanding
              ? "Web Development Services"
              : "App Development Services"
          }
        />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center text-black"
        >
          Enhancing Brands with Engaging Web Experiences
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              className="bg-black group hover:bg-hovercolor shadowHover items-center rounded-lg p-5 flex text-center flex-col"
            >
              <img
                loading="lazy"
                src={service.icon}
                className="h-[3.5rem] md:h-[4.5rem] object-contain grayscale"
                alt={service.title}
                width="100"
                height="100"
              />
              <h6 className="text-xl font-medium mt-2 group-hover:text-black">
                {service.title}
              </h6>
              <p className="text-sm md:text-base font-light mt-2 text-white group-hover:text-black">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <Portfolio page={page} />
      <WhyChooseUs />
      <Testimonials />
      <ConnectWithUs />
      <JoinHappyCustomers />
      {/* <ContactForm /> */}
      <LeadForm />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
