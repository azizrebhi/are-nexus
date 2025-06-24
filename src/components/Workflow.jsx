import { CheckCircle2 } from "lucide-react";
import robot1 from "../assets/robot1.jpg";

import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
   <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide text-[#E1DBBD]">
  Why Join{" "}
  <span className="text-[#E2AC0D]">
    ENSI Robotic Association?
  </span>
</h2>


      <div className="flex flex-wrap justify-center items-center">
  <div className="w-full lg:w-1/2 px-4 mt-12">
    <img
      src={robot1}
      alt="Robot"
      className="w-full h-auto rounded-lg border border-[#E2AC0D] shadow-md shadow-[#E2AC0D]"
    />
  </div>
  <div className="pt-12 w-full lg:w-1/2 px-4">
    {checklistItems.map((item, index) => (
      <div key={index} className="flex mb-12">
        <div className="text-[#E1DBBD] mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
          <CheckCircle2 />
        </div>
        <div>
          <h5 className="mt-1 mb-2 text-xl text-[#E1DBBD]">{item.title}</h5>
          <p className="text-md text-neutral-500">{item.description}</p>
          
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Workflow;
