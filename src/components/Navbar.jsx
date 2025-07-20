import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navItems } from "../constants";
import logo1 from "../assets/logo1.png";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  const handleNavClick = (item) => {
    setMobileDrawerOpen(false);
    window.scrollTo(0, 0); // ✅ Always scroll to top
    navigate(item.href);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  const memberLinks = [
    { label: "Members", href: "/dashboard" },
    { label: "Autonomus", href: "/AutDashboard" },
    { label: "ALL Terrain", href: "/TTDashboard" },
    { label: "Junior", href: "/Junior-Dashboard" },
    { label: "LineFollwer", href: "/LineFollower-Dashboard" },
  ];

  const linksToRender = user ? memberLinks : navItems;

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo1} alt="Logo" />
            <span className="text-xl tracking-tight text-white">
              Ensi Robotic Association
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex ml-14 space-x-12 text-white">
            {linksToRender.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="hover:text-[#E2AC0D] transition"
                >
                  {item.label}
                </button>
              </li>
            ))}
            {user && (
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-red-400 transition"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end text-white">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {linksToRender.map((item, index) => (
                <li key={index} className="py-4">
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-white text-xl hover:text-[#E2AC0D] transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              {user && (
                <li className="pt-4">
                  <button
                    onClick={handleLogout}
                    className="text-red-400 text-xl hover:text-red-600 transition"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
