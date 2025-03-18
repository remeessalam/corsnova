import { Code, Smartphone, BrainCircuit } from "lucide-react";
import React from "react";

import bannerImg from "../assets/images/banner.webp";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import ReactPlayer from "react-player";
import vid from "../assets/video/banner.mp4";
import SlidingService from "../components/website/SlidingService";
const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  const services = [
    {
      icon: <Code size={50} />, // Lucide icon for Web Development
      title: "Web Development",
      description:
        "Build responsive, scalable, and high-performance web applications.",
    },
    {
      icon: <Smartphone size={50} />, // Lucide icon for Mobile Development
      title: "Mobile Development",
      description:
        "Create seamless and engaging mobile applications for all platforms.",
    },
    {
      icon: <BrainCircuit size={50} />, // Lucide icon for AI Development
      title: "AI Development",
      description:
        "Leverage AI to drive innovation and automate processes efficiently.",
    },
  ];

  return (
    <>
      <WebsiteHeader />

      <section className="h-screen w-screen banner relative text-white">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/30 via-black/10 to-black">
          <div
            data-aos="fade-up"
            className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
          >
            <p className="sub-heading">Welcome to</p>
            <h1 className="heading text-stroke">CORSNOVA</h1>
            <p className="sub-heading">
              AI Meets Integrity - Empowering Innovation with Intelligence
            </p>
          </div>
        </div>

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
      </section>
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-darkgray group shadowHover  hover:bg-hovercolor rounded-lg p-5 transition-all duration-300"
          >
            <div className="flex gap-3 mb-4 group-hover:text-black">
              {service.icon}
              <p className="text-lg leading-tight font-medium group-hover:text-black">
                {service.title}
              </p>
            </div>
            <p className="desc !text-white group-hover:!text-black">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <section className="text-black wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg}
              width="600"
              height="600"
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg}
                  width="200"
                  height="200"
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Transforming Visions into Reality
              </h2>
              <p className="desc">
                At <b>CORSNOVA</b>, we leverage the transformative power of
                artificial intelligence to catalyze remarkable change across
                industries. Our unwavering commitment to transparency and
                reliability is what truly sets us apart in a crowded market
                place .We empower organizations with cutting-edge AI
                technologies that elevate data-driven insights, streamline
                complex processes, and ignite strategic growth.
                <br />
                <br />
                Our innovative solutions are designed not just to meet the
                demands of today but to anticipate the challenges of tomorrow,
                ensuring that your business stays ahead of the curve.
              </p>
            </div>
            <div className="w-fit mt-4 justify-center lg:justify-start">
              <Link to="/about-us" className="primary-btn">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SlidingService />
      {/* <AllServices /> */}
      <TrustWorthySection />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;

<section className="h-screen relative text-white">
  <div className="absolute top-0 w-full h-full bg-secondary/90"></div>
  <img
    loading="lazy"
    src={bannerImg}
    srcset={`${bannerImg} 400w, 
  ${bannerImg} 800w, 
  ${bannerImg} 1200w`}
    sizes="(max-width: 600px) 200px, 
 (max-width: 1200px) 800px, 
 1200px"
    class="w-full h-full absolute -z-10 object-cover object-center"
    alt=""
  />
  <div
    data-aos="fade-up"
    className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
  >
    <p className="sub-heading">
      Welcome to
      {/* <span className="text-primary font-semibold">
      CORSNOVA
    </span> */}
    </p>
    <h1 className="heading text-stroke">CORSNOVA</h1>
    <p className="sub-heading">
      AI Meets Integrity - Empowering Innovation with Intelligence
    </p>
  </div>
</section>;
