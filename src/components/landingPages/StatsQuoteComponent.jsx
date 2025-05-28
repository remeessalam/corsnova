import React from "react";

const StatsQuoteComponent = () => {
  return (
    <div className="   ">
      <div className="max-w-4xl ">
        {/* Stats Cards Container */}
        <div className="relative mb-8 ">
          {/* Stats Cards */}
          <div className="flex flex-col sm:flex-row gap-4  ">
            {/* Projects Card */}
            <div className="flex-1 bg-primary rounded-3xl p-6 md:p-8 shadow-lg">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 mb-2">
                  110+
                </h2>
                <p className="text-gray-700 text-lg md:text-xl font-medium">
                  Projects Developed
                </p>
              </div>
            </div>

            {/* Deliverable Card */}
            <div className="flex-1 bg-primary rounded-3xl p-6 md:p-8 shadow-lg">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 mb-2">
                  100%
                </h2>
                <p className="text-gray-700 text-lg md:text-xl font-medium">
                  Deliverable
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Box */}
        <div className="bg-primary/10 rounded-3xl p-6 md:p-8 lg:p-10  border  border-gray-200  ">
          <blockquote className="text-white text-lg md:text-xl  leading-relaxed ">
            "Your website is the window to your{" "}
            <span className="font-semibold">brand's soul</span>. Craft it with
            purpose, design it with passion, and watch as it becomes a gateway
            to <span className="font-semibold">endless possibilities</span>."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default StatsQuoteComponent;
