import { Facebook, Instagram } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";  // Import LinkedIn icon from react-icons

const socialLinks = [
  { text: "Facebook", href: "https://www.facebook.com/association.robotique.ensi", icon: <Facebook /> },
  { text: "Instagram", href: "https://www.instagram.com/association.robotique.ensi/", icon: <Instagram /> },
  { text: "LinkedIn", href: "https://www.linkedin.com/company/ar-ensi/posts/?feedView=all", icon: <FaLinkedinIn /> },
];

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="text-center">
        <h3 className="text-md font-semibold mb-4 text-neutral-300">Follow Us</h3>
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-neutral-300 hover:text-white transition"
            >
              <div className="h-12 w-12 p-2 bg-neutral-900 text-[#E2AC0D] rounded-full flex justify-center items-center">
                {link.icon}
              </div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} ENSI Robotic Association. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
