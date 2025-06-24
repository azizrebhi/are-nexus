import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-10 border-b border-[#E1DBBD] min-h-[500px] ">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-[#E1DBBD]">
          Our{" "}
          <span className="text-[#E2AC0D]">
            Axis
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-[#1D1C18] text-[#E2AC0D] justify-center items-center rounded-full border border-[#E2AC0D]">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-[#E1DBBD]">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-[#E1DBBD]">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
