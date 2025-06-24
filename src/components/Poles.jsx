import { poles } from "../constants";

const PolesSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[500px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2AC0D] to-[#E1DBBD]">
            Poles
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {poles.map((pole, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex p-4">
              <div className="flex h-10 w-10 p-2 bg-neutral-900 text-[#E2AC0D] justify-center items-center rounded-full mx-4">
                {pole.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl text-[#E1DBBD]">{pole.text}</h5>
                <p className="text-md text-[#E1DBBD]">{pole.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolesSection;
