import { Cloud } from "lucide-react";
import { Laptop } from "lucide-react";
import { FileText } from "lucide-react";
import { Users } from "lucide-react";

import wadi33 from "../assets/wadi33.jpg"
import Robocup from "../assets/Robocup.jpg";
import Supercup from "../assets/Supercup.png";
import Bootcamp from "../assets/Bootcamp.png";
import Robocamp from "../assets/Robocamp.jpg";
import iheb from "../assets/profile-pictures/iheb.png";
import Anis from "../assets/Anis.jpg";
import Chiheb from "../assets/Chiheb.jpeg";
import fixi from "../assets/fixi.jpg";
import R from "../assets/R.png";
import rebhi from "../assets/rebhi.jpg";
import mensi from "../assets/mensi.jpg";
import wejden from "../assets/wejden.jpg";
import chayma from "../assets/chayma.jpg";
import ff from "../assets/ff.jpg";
import anas from "../assets/anas.jpg";
import zaidd from "../assets/zaidd.jpg";
import oubaid from "../assets/oubaid.jpg";
export const navItems = [
  { label: "Home", href: "/" },
  
  { label: "Robocup", href: "/robocup" },
  { label: "Join the Team", href: "/join" },
  { label: "SignIn", href: "/SignIn" },
  { label: "AREAI ", href: "/ask-ai" }
];
export const teamMembers = [
  {
    image: anas,
    name: "Mohamed Anas Rejeb ",
    position: "President",
  },
  {
    image: oubaid,
    name: "Oubaid Mahfoudhi",
    position: "Vice President",
  },
  {
    image: wejden,
    name: "Wejden Abdelmoamen",
    position: "SG&RH",
  },
  {
    image: rebhi,
    name: "Mohamed Aziz Rebhi",
    position: "Technical Director",
  },
  {
    image:mensi,
    name: "Mohamed Aziz Mensi",
    position: "Treasurer",
  },
  {
    image: ff,
    name: "Kamar chakroun",
    position: "Communication Director ",
  },
  {
    image: zaidd,
    name: "Zaid Chibani",
    position: " Community Director",
  },
  {
    image: chayma,
    name: "chayma Hamdi",
    position: " Commercial Development Director",
  },
  // Add more members here
];

export const testimonials = [
   {
    user: "Houssem demaid",
    company: "President 22/23",
    image: fixi,
    text: "Greatness is not measured by what you build, but by what you ignite in others",
  }, {
    user: "Chiheb Hmida",
    company: "treasurer 22/23",
    image:Chiheb ,
    text: "Nothing ever becomes real till it's experienced _ John Keats",
  },
  
 
  {
    user: "Med Anis Weslati",
    company: "President 23/24",
    image: Anis,
    text: "Enjoy it while it lasts",
  },
  {
    user: "Iheb Ben Salah",
    company: "Technical director 22/23",
    image: iheb,
    text: "Progress comes from daring to take risks, challenge norms, and explore new ideas. Impact happens when a community builds, tests, and pushes boundaries together",
  },
   {
    user: "wadie Ramma",
    company: "technical Director 23/24",
    image:wadi33 ,
    text: "I joined ENSI Robotics with no passion for robotics — but through perseverance and support, I became Technical Director, winning competitions and training others to surpass me.",
  },
  
  
];

export const features = [
  {
    icon: <Cloud />,
    text: "Events",
    description:
      "Throughout the year, the association hosts a diverse range of technical and educational experiences that foster hands-on learning, competitive spirit, community engagement, and personal development—offering members and newcomers alike the opportunity to explore robotics from training to national-level challenges in a dynamic and supportive environment.",
  },
  {
    icon: <Laptop />,
    text: "Training",
    description:
      "The Training Axe is dedicated to empowering members with the fundamental and advanced skills in robotics through structured workshops, hands-on sessions, and guided mentorship—ensuring that every participant, from beginner to advanced, gains the knowledge and confidence to contribute meaningfully to technical projects and competitions",
  },
  {
    icon: <FileText />,
    text: "Aeronautics",
    description:
      "The Aeronautics Axe focuses on exploring the intersection of robotics and flight, fostering innovation in aerial robotics through the design, building, and testing of drones and other airborne technologies. It aims to inspire members to push the boundaries of aerospace engineering, equipping them with the skills and experience to tackle the challenges of flight in robotic systems",
  },
  {
    icon: <Users />,
    text: "Competition",
    description:
      "The Competition Axe focuses on preparing members for robotic challenges, promoting teamwork and innovation in high-stakes events. It enhances skills in strategy, design, and problem-solving to excel in competitive environments.",


  },
];

export const poles = [
  {
    icon: <Cloud />,
    text: "Project",
    description:
      "The Projects Pole is dedicated to fostering creativity and innovation by guiding members through hands-on robotic projects. It encourages collaboration, problem-solving, and the application of new technologies in real-world scenarios.",
  },
  {
    icon: <Laptop />,
    text: "Media",
    description:
      "The Media Pole focuses on promoting the association's activities through various media channels, including photography, videography, and social media, ensuring that the community stays informed and engaged",


  },
  {
    icon: <FileText />,
    text: "Commercial Development",
    description:
      "The Commercial Development Pole is dedicated to fostering partnerships, seeking sponsorships, and managing collaborations to support the association's growth and ensure sustainable financial resources for its activities",
  }


];

export const checklistItems = [
  {
    title: "Hands-On Projects",
    description: "Work on real-world robotics and AI systems that challenge and develop your skills.",
  },
  {
    title: "National Competitions",
    description: "Represent ENSI and compete with top engineering teams across the country.",
  },
  {
    title: "Team Collaboration",
    description: "Learn to lead, collaborate, and grow within a community of passionate engineers.",
  },
  {
    title: "Expert Mentorship",
    description: "Gain guidance from experienced members and alumni to elevate your capabilities.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
export const events = [
 {
  title: "RoboCup 2024",
  date: "October 13, 2024",
  description: "RoboCup 2024 is a national robotics competition where teams from all over the country come to showcase their skills. The event features a series of challenges, including line-following robots and autonomous bots, with the goal of pushing the boundaries of innovation and collaboration in the field of robotics.",
  photo: Robocup,  // Replace with the actual image URL or import for the RoboCup photo
  features: [
    "National competition with teams from across the country",
    "Prizes and recognition for top performers",
    "Networking opportunities for robotics enthusiasts"
  ],
},

  {
  title: "Roboday",
  date: "November 24, 2024",
  description: "Roboday is an exciting full-day event where we teach new members how to build a line follower robot from scratch. Participants will gain hands-on experience with robotics, sensors, and basic programming, all while collaborating with others to create functional robots.",
  photo: R,  // Replace with the actual image URL or import for the Roboday photo
  features: [
    "Introduction to robotics and line-following algorithms",
    "Programming tutorials and sensor integration",
    "Competition to test the robots' performance"
  ],
}
,
   {
  title: "SuperCup",
  date: "February 8, 2025",
  description: "SuperCup is an exciting sporting event where teams compete in football matches for the chance to win the prestigious SuperCup trophy. It's a day filled with sports, fun, and activities, bringing together the university community to celebrate the spirit of teamwork and competition.",
  photo: Supercup,  // Replace with the actual image URL for the SuperCup event
  features: [
    "Football matches with teams competing for the SuperCup",
    "Exciting day of sports, fun, and activities",
    "Friendly atmosphere for spectators and participants",
    "Opportunities for networking and team-building",
    "Awards and recognition for top teams"
  ],
},

    {
  title: "Bootcamp",
  date: "April 9, 2025",
  description: "Bootcamp is an educational event designed for kids under 18 years old, where they will learn the basics of robotics. Our goal is to inspire and encourage young minds to explore the world of robotics, providing hands-on experience in building and programming robots.",
  photo: Bootcamp,  // Replace with the actual image URL for the Bootcamp event
  features: [
    "Introduction to basic robotics concepts",
    "Hands-on robot building and programming activities",
    "Inspiring young minds to explore STEM fields",
    "Guidance from experienced mentors and instructors",
  ],
},

    {
  title: "Robocamp",
  date: "April 26, 2025",
  description: "Robocamp is a camping trip organized by our club, providing an opportunity to relax, unwind, and have fun after a year of hard work. It's a chance for members to explore new places, build stronger bonds, and enjoy the great outdoors in a relaxed, non-competitive environment.",
  photo:Robocamp,  // Replace with the actual image URL for the Robocamp event
  features: [
    "Outdoor adventure and exploration",
    "Relaxation and fun",
    "Escape the routine and enjoy nature",
    "Games and recreational activities"
  ],
  },
 

];
