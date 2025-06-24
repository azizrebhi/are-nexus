import earth from "../assets/earth.jpeg";
import fire from "../assets/fire.jpeg";
import water from "../assets/water.jpeg";
import air from "../assets/air.jpeg";

import galleri from "../assets/galleri.jpg";
import galleri2 from "../assets/galleri2.jpg";
import galleri3 from "../assets/galleri3.jpg";
import galleri4 from "../assets/galleri4.jpg";
import galleri1 from "../assets/galleri1.jpg";
import galleri5 from "../assets/galleri5.jpg";
import galleri6 from "../assets/galleri6.jpg";
import galleri7 from "../assets/galleri7.jpg";

const challenges = [
  {
    title: "Line Follower",
    image: earth,
    file: "/pdfs/Earth.pdf",
    form: "/form-line-follower",
  },
  {
    title: "ALL-Terrain",
    image: fire,
    file: "/pdfs/Hellish.pdf",
    form: "/form-all-terrain",
  },
  {
    title: "Autonomous",
    image: air,
    file: "/pdfs/SKYPIEA.pdf",
    form: "/form-autonomous",
  },
  {
    title: "Junior",
    image: water,
    file: "/pdfs/wave.pdf",
    form: "/form-junior",
  },
];

const memories = [
  { image: galleri },
  { image: galleri2 },
  { image: galleri3 },
  { image: galleri4 },
  { image: galleri5 },
  { image: galleri6 },
  { image: galleri1 },
  { image: galleri7 },
];

const RoboCup = () => {
  return (
    <div className="p-10 text-white">
      {/* Introduction */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-[#E2AC0D]">RoboCup</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Following the resounding success of its six previous editions, we are thrilled to announce the 7th edition of RoboCup ENSI this year.
          Get ready for an even more exceptional experience! Mark the date of October 13, 2024, in your calendars. The event will take place at the National School of Computer Science (École Nationale des Sciences de l'Informatique), where we will unleash our full potential to awe and inspire the most passionate minds.
          Each year, this day is the unmissable event for enthusiasts driven by an insatiable curiosity to explore technological advancements and spread innovative spirit.
          Expect a theme more spectacular than ever before. In a context where chemistry faces many challenges, robotics emerges as the hero capable of managing these threats with safety, precision, and efficiency. This year, RoboCup ENSI 7.0 returns with the captivating theme:
          <strong> "CHEMICAL CHAOS: ROBOTS ON A MISSION" </strong>
          An exceptional day lies ahead! ENSI opens its doors to robotics enthusiasts of all ages, gathered to design innovative robots that meet the requirements specified in the specifications provided by the association.
        </p>

        {/* CTA Button */}
       
      </div>

      {/* Challenges Section */}
      <h2 className="text-4xl font-bold mb-10 text-center">
        RoboCup <span className="text-[#E2AC0D]">Challenges</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {challenges.map((challenge, index) => (
          <div key={index} className="text-center w-72">
            <div className="border-2 border-[#E2AC0D] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 w-full h-[400px]">
              <img
                src={challenge.image}
                alt={challenge.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-[#E2AC0D]">
              {challenge.title}
            </h3>

            <div className="flex flex-col gap-3 mt-4">
              <a
                href={challenge.file}
                download
                className="px-4 py-2 bg-[#E2AC0D] text-black font-semibold rounded-full shadow hover:bg-[#f7c948] transition"
              >
                Specification Book
              </a>
              <a
                href={challenge.form}
                className="px-4 py-2 bg-transparent border border-[#E2AC0D] text-[#E2AC0D] font-semibold rounded-full hover:bg-[#E2AC0D] hover:text-black transition"
              >
                Join Challenge
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Memories Section */}
      <h2 className="text-4xl font-bold my-10 text-center">
        Memories from <span className="text-[#E2AC0D]">Last RoboCup</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
        {memories.map((memory, index) => (
          <div key={index} className="text-center w-72">
            <div className="block border-2 border-[#E2AC0D] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-default w-full h-[400px]">
              <img
                src={memory.image}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoboCup;
