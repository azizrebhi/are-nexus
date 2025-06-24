import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        From the Minds of <span className="text-[#E2AC0D]">ARE Alumni</span>
      </h2>

      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6 transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 font-thin hover:shadow-lg hover:shadow-[#e2ac0d33] transition-all duration-300">
              <p className="text-sm sm:text-base text-neutral-300">{testimonial.text}</p>
              <div className="flex flex-col sm:flex-row mt-6 sm:mt-8 items-center sm:items-start">
                <img
                  className="w-20 h-20 mb-4 sm:mb-0 sm:mr-6 rounded-full border border-neutral-400"
                  src={testimonial.image}
                  alt={`${testimonial.user} avatar`}
                />
                <div className="text-center sm:text-left">
                  <h6 className="text-base font-medium text-white">{testimonial.user}</h6>
                  <span className="text-sm italic text-neutral-500">{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
