import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FullWidthImage from "./components/FullWidthImage";
import PolesSection from "./components/Poles";
import FloatingBackground from "./components/FloatingBackground";
import MeetOurTeam from "./components/Team";
import RoboCup from "./components/Robocup";
import JoinFormPage from "./components/JoinForm";// <-- use full-page form instead
import SignInPage from "./components/signInPage";
import Dashboard from "./components/Dashboard";
import AutonomeForm from "./components/AutonomeForm";
import JuniorForm from "./components/JuniorForm";
import TTform from "./components/TTform";
import LineFollowerForm from "./components/LineFollowerForm";
import AutonomDashboard from "./components/AutonomDashbord";
import PrivateRoute from "./components/PrivateRoute"; // Ensure this is imported correctly
import LineFollowerDash from "./components/LineFollowerDash";
import TTDashboard from "./components/TTDashboard";
import JuniorDashboard from "./components/JuniorDashboard";
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

const Home = () => {
  return (
    <>
      <FullWidthImage />
      <section id="introduction"><HeroSection /></section>
      <section id="team"><MeetOurTeam /></section>
      <section id="axis"><FeatureSection /></section>
      <section id="poles"><PolesSection /></section>
      <Workflow />
      <section id="events"><Pricing /></section>
      <Testimonials />
    </>
  );
};

const MainLayout = ({ children }) => (
  <div className="relative">
    <Navbar />
    <FloatingBackground />
    {children}
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <MainLayout>
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/robocup" element={<RoboCup />} />
          <Route path="/join" element={<JoinFormPage />} />
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/form-autonomous" element={<AutonomeForm />} />
          <Route path="/form-line-follower" element={<LineFollowerForm />} />
          <Route path="/form-all-terrain" element={<TTform />} />
          <Route path="/form-junior" element={<JuniorForm />} />
          <Route path="/AutDashboard" element={<PrivateRoute><AutonomDashboard /></PrivateRoute>} />
          <Route path="/LineFollower-Dashboard" element={<PrivateRoute><LineFollowerDash /></PrivateRoute>} />
          <Route path="/TTDashboard" element={<PrivateRoute><TTDashboard /></PrivateRoute>} />
          <Route path="/Junior-Dashboard" element={<PrivateRoute><JuniorDashboard /></PrivateRoute>} />


          
        
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
