import React from "react";
import meetingImg from "../../assets/images/meeting-table.jpg";
import icon1 from "../../assets/svgs/Proven Expertise.svg";
import icon2 from "../../assets/svgs/Affordable & Time Efficient.svg";
import icon3 from "../../assets/svgs/Client-Centric Approach.svg";
import icon4 from "../../assets/svgs/Commitment to Quality.svg";
import icon5 from "../../assets/svgs/End-to-End Solutions.svg";
import icon6 from "../../assets/svgs/Dedicated Support.svg";
import icon7 from "../../assets/svgs/Transparent and Reliable.svg";
import icon8 from "../../assets/svgs/Innovative Problem Solvers.svg";

const content = [
  {
    icon: icon1,
    title: "Proven Expertise",
    description:
      "Our team consists of seasoned professionals with years of experience delivering successful digital solutions across various industries.",
  },
  {
    icon: icon2,
    title: "Affordable & Time Efficient",
    description:
      "We offer cost-effective services without compromising quality and ensure rapid delivery to meet tight deadlines.",
  },
  {
    icon: icon3,
    title: "Client-Centric Approach",
    description:
      "We prioritize your business needs and goals, offering personalized solutions that align with your vision and expectations.",
  },
  {
    icon: icon4,
    title: "Commitment to Quality",
    description:
      "Quality is at the core of everything we do — from code to design, ensuring seamless performance and user satisfaction.",
  },
  {
    icon: icon5,
    title: "End-to-End Solutions",
    description:
      "From ideation to launch, we provide complete support at every stage of your digital journey for a hassle-free experience.",
  },
  {
    icon: icon6,
    title: "Dedicated Support",
    description:
      "Our support team is always ready to assist you with timely responses, proactive monitoring, and reliable service.",
  },
  {
    icon: icon7,
    title: "Transparent and Reliable",
    description:
      "We believe in open communication, timely updates, and delivering exactly what we promise — no surprises.",
  },
  {
    icon: icon8,
    title: "Innovative Problem Solvers",
    description:
      "We thrive on challenges, using creativity and cutting-edge tech to develop smart, future-ready solutions.",
  },
];

const LandingWhyChooseUs = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
          Why us
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="mb-12">
        <h3 className="heading-2 mb-8 text-darkgray">
          We <span className="text-primary">go beyond</span> mere website
          creation, we enhance your services by{" "}
          <span className="text-primary">adding substantial value</span>.
        </h3>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={meetingImg || "/placeholder.svg"}
            alt="Team working together at a table"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column - Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.map((item, index) => (
            <div key={index}>
              <div className="flex items-start gap-4">
                <img src={item.icon} alt={item.title} className="w-10 h-10" />
                <h4 className="text-lg font-semibold text-black">
                  {item.title}
                </h4>
              </div>
              <p className="desc mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingWhyChooseUs;
