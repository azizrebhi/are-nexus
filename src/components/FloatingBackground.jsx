import { motion } from "framer-motion";

const FloatingShape = ({ color, size, top, left, delay, duration }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl`}
      style={{ top, left }}
      animate={{
        y: ["0%", "100%", "0%"],
        x: ["0%", "100%", "0%"],
        rotate: [0, 360],
      }}
      transition={{
        duration: duration || 20,
        ease: "linear",
        repeat: Infinity,
        delay,
      }}
      aria-hidden="true"
    />
  );
};

const FloatingBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      {/* Added a lot more floating shapes */}
      <FloatingShape color="bg-[#E2AC0D]" size="w-64 h-64" top="5%" left="5%" delay={0} duration={25} />
      <FloatingShape color="bg-[#E1DBBD]" size="w-80 h-80" top="15%" left="25%" delay={2} duration={28} />
      <FloatingShape color="bg-[#1D1C18]" size="w-56 h-56" top="40%" left="15%" delay={4} duration={22} />
      <FloatingShape color="bg-[#E2AC0D]" size="w-96 h-96" top="10%" left="80%" delay={1} duration={30} />
      <FloatingShape color="bg-[#E1DBBD]" size="w-72 h-72" top="60%" left="35%" delay={3} duration={27} />
      <FloatingShape color="bg-[#E2AC0D]" size="w-48 h-48" top="80%" left="50%" delay={5} duration={20} />
      <FloatingShape color="bg-[#1D1C18]" size="w-128 h-128" top="50%" left="50%" delay={6} duration={32} />
      <FloatingShape color="bg-[#E1DBBD]" size="w-96 h-96" top="20%" left="15%" delay={7} duration={24} />
      <FloatingShape color="bg-[#E2AC0D]" size="w-72 h-72" top="75%" left="80%" delay={8} duration={21} />
      <FloatingShape color="bg-[#1D1C18]" size="w-56 h-56" top="10%" left="50%" delay={9} duration={23} />
      <FloatingShape color="bg-[#E1DBBD]" size="w-48 h-48" top="30%" left="70%" delay={10} duration={20} />
      <FloatingShape color="bg-[#E2AC0D]" size="w-64 h-64" top="90%" left="20%" delay={11} duration={22} />
      <FloatingShape color="bg-[#1D1C18]" size="w-80 h-80" top="50%" left="10%" delay={12} duration={28} />
      <FloatingShape color="bg-[#E2AC0D]" size="w-128 h-128" top="25%" left="60%" delay={13} duration={30} />
      <FloatingShape color="bg-[#E1DBBD]" size="w-96 h-96" top="65%" left="10%" delay={14} duration={32} />
      <FloatingShape color="bg-[#1D1C18]" size="w-72 h-72" top="40%" left="85%" delay={15} duration={28} />
      {/* New floating shapes */}
      <FloatingShape color="bg-[#E2AC0D]" size="w-40 h-40" top="55%" left="30%" delay={16} duration={26} />
      <FloatingShape color="bg-[#E1DBBD]" size="w-56 h-56" top="5%" left="90%" delay={17} duration={27} />
      <FloatingShape color="bg-[#E2AC0D]" size="w-72 h-72" top="80%" left="25%" delay={18} duration={28} />
      <FloatingShape color="bg-[#1D1C18]" size="w-128 h-128" top="40%" left="75%" delay={19} duration={31} />
      <FloatingShape color="bg-[#E1DBBD]" size="w-96 h-96" top="55%" left="5%" delay={20} duration={29} />
      <FloatingShape color="bg-[#E2AC0D]" size="w-48 h-48" top="15%" left="80%" delay={21} duration={23} />
      <FloatingShape color="bg-[#1D1C18]" size="w-80 h-80" top="35%" left="55%" delay={22} duration={26} />
      <FloatingShape color="bg-[#E1DBBD]" size="w-56 h-56" top="90%" left="15%" delay={23} duration={24} />
      <FloatingShape color="bg-[#E2AC0D]" size="w-96 h-96" top="65%" left="85%" delay={24} duration={32} />
      <FloatingShape color="bg-[#1D1C18]" size="w-40 h-40" top="50%" left="20%" delay={25} duration={27} />
      <FloatingShape color="bg-[#E1DBBD]" size="w-72 h-72" top="80%" left="45%" delay={26} duration={22} />
      <FloatingShape color="bg-[#E2AC0D]" size="w-64 h-64" top="25%" left="90%" delay={27} duration={30} />
      <FloatingShape color="bg-[#1D1C18]" size="w-128 h-128" top="10%" left="40%" delay={28} duration={35} />
      <FloatingShape color="bg-[#E2AC0D]" size="w-56 h-56" top="45%" left="25%" delay={29} duration={22} />
      <FloatingShape color="bg-[#E1DBBD]" size="w-40 h-40" top="30%" left="65%" delay={30} duration={26} />
      <FloatingShape color="bg-[#1D1C18]" size="w-72 h-72" top="15%" left="50%" delay={31} duration={28} />
      <FloatingShape color="bg-[#E2AC0D]" size="w-80 h-80" top="40%" left="85%" delay={32} duration={30} />
      <FloatingShape color="bg-[#E1DBBD]" size="w-128 h-128" top="70%" left="5%" delay={33} duration={32} />
      <FloatingShape color="bg-[#E2AC0D]" size="w-96 h-96" top="55%" left="90%" delay={34} duration={28} />
      <FloatingShape color="bg-[#1D1C18]" size="w-56 h-56" top="20%" left="30%" delay={35} duration={25} />
      <FloatingShape color="bg-[#E1DBBD]" size="w-40 h-40" top="65%" left="70%" delay={36} duration={29} />
      <FloatingShape color="bg-[#E2AC0D]" size="w-72 h-72" top="10%" left="20%" delay={37} duration={27} />
      <FloatingShape color="bg-[#1D1C18]" size="w-128 h-128" top="85%" left="60%" delay={38} duration={32} />
      <FloatingShape color="bg-[#E1DBBD]" size="w-96 h-96" top="75%" left="50%" delay={39} duration={30} />
    </div>
  );
};

export default FloatingBackground;
