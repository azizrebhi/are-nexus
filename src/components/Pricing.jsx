import { CheckCircle2 } from "lucide-react";
import { events } from "../constants";

const Pricing = () => {
  return (
    <div id="events" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Our <span className="text-[#E2AC0D]">Events</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {events.map((event, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300 hover:scale-105"
          >
            <div className="p-10 border border-neutral-700 rounded-xl shadow-lg flex flex-col h-full">
              {/* Content Section (Text on Top) */}
              <div className="flex flex-col justify-between flex-grow mb-6">
                {/* Title */}
                <p className="text-3xl font-semibold mb-4 text-center">
                  {event.title}
                </p>

                {/* Date */}
                <p className="text-lg mb-4 text-center">{event.date}</p>

                {/* Description */}
                <p className="text-sm mb-4 text-neutral-300">
                  {event.description}
                </p>

                {/* Features List */}
                <ul className="list-disc ml-5 text-sm space-y-1 text-neutral-200">
                  {event.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle2 className="text-[#E2AC0D] mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Section */}
              <div className="w-full h-72 rounded-lg overflow-hidden mt-auto">
                <img
                  src={event.photo}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
