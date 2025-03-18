import React from "react";
import img1 from "../../assets/images/services/it-consulting1.jpg";
import img2 from "../../assets/images/services/it-consulting2.jpg";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "lucide-react";
import { allServices } from "../../constant";

const ItConsultingAndStrategy = () => {
  const next = allServices[10];
  const service = allServices[9];
  return (
    <div className="flex flex-col gap-10 text-black">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="IT Consulting and Strategy"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading-2 !text-black">
          IT Consulting and Strategy
        </h2>
        <p data-aos="fade-up" className="description">
          {service.description}
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to IT Consulting and Strategy
        </h2>
        <p data-aos="fade-up" className="description">
          {service.additionalDetails.overview}
        </p>
      </div>
      <div className="grid lg:grid-cols-1 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="IT Consulting and Strategy"
          />
        </div>
        <div className="flex flex-col gap-4">
          {service.additionalDetails.services.map((obj) => (
            <div key={obj.title} className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-primary text-primary">
                  ✓
                </div>
                <h3 className="text-lg font-semibold">{obj.title}</h3>
              </div>
              <p>{obj.description}</p>
            </div>
          ))}
        </div>
      </div>

      <hr />
      <div className="flex flex-col sm:flex-row w-full justify-end gap-6">
        <Link to={next.link} className="flex items-center self-end gap-3">
          <next.icon className="w-[3rem] h-[3rem]" />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{next.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              Next <ArrowRightCircle className="text-2xl" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ItConsultingAndStrategy;
