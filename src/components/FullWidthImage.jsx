import ARE from "../assets/ARE.jpg";

const FullWidthImage = () => {
  return (
    <div className="relative w-full">
      <img
        src={ARE}
        alt="Robotics Club"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <h1
          className="text-white text-3xl sm:text-5xl lg:text-6xl text-center animate-fade-in-slow"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          “Invent the Future with Elegance and Precision”
        </h1>
      </div>
    </div>
  );
};

export default FullWidthImage;
