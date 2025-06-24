import { useState } from "react";
import supabase from "../supabase-client";
const JoinFormPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    birthDate: "",
    facebook: "",
    educationLevel: "",
    classGroup: "",
    university: "",
    frenchLevel: "",
    englishLevel: "",
    associativeExperience: "",
    roboticsExperience: "",
    mechanicalSoftware: "",
    programmingLanguages: "",
    designSoftware: "",
    motivation: "",
    interviewPreference: "",
    questions: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // 1. Send data to Supabase
    const { error } = await supabase.from("members").insert([formData]);
  
    if (error) {
      console.error("Error submitting to Supabase:", error.message);
      alert("An error occurred. Please try again.");
      return;
    }
  
    // 2. Send data to Google Sheets (correct way using formData)
    try {
      const body = new URLSearchParams(formData).toString();
  
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzpZX-LAdfE6_oFX1q878_gxdDxV0UhSgfXaXSp6hC4s1_7ScqUR304MCYKN-fDyawzBA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body,
        }
      );
  
      const text = await res.text();
  
      if (text.toLowerCase().includes("success")) {
        alert("Form submitted successfully!");
  
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          birthDate: "",
          facebook: "",
          educationLevel: "",
          classGroup: "",
          university: "",
          frenchLevel: "",
          englishLevel: "",
          associativeExperience: "",
          roboticsExperience: "",
          mechanicalSoftware: "",
          programmingLanguages: "",
          designSoftware: "",
          motivation: "",
          interviewPreference: "",
          questions: "",
        });
      } else {
        alert("Submitted to Supabase, but failed to submit to Google Sheets.");
      }
    } catch (err) {
      console.error("Error submitting to Google Sheets:", err);
      alert("Submitted to Supabase, but failed to submit to Google Sheets.");
    }
  };
  
  
  
  
  return (
    <div className="min-h-screen text-white flex justify-center items-start py-10 px-4">
      <div className="max-w-4xl w-full bg-neutral-800 rounded-xl p-8 border border-neutral-700">
        <h2 className="text-3xl mb-6 text-center font-semibold">
          Join <span className="text-[#E2AC0D]">the Team</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">First Name *</label>
              <input
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
            <div>
              <label className="block mb-1">Last Name *</label>
              <input
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
            <div>
              <label className="block mb-1">Phone Number *</label>
              <input
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
            <div>
              <label className="block mb-1">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
            <div>
              <label className="block mb-1">Date of Birth *</label>
              <input
                type="date"
                name="birthDate"
                required
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
            <div>
              <label className="block mb-1">Facebook Profile *</label>
              <input
                name="facebook"
                required
                value={formData.facebook}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
          </div>

          {/* Academic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Level of Education *</label>
              <select
                name="educationLevel"
                required
                value={formData.educationLevel}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              >
                <option value="">Select</option>
                <option value="II1">II1</option>
                <option value="II2">II2</option>
                <option value="MSE">MSE</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Class Group *</label>
              <select
                name="classGroup"
                required
                value={formData.classGroup}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              >
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {formData.classGroup === "Other" && (
            <div>
              <label className="block mb-1">University Name</label>
              <input
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
          )}

          {/* Language Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">French Level *</label>
              <select
                name="frenchLevel"
                required
                value={formData.frenchLevel}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              >
                <option value="">Select</option>
                <option>Parfait</option>
                <option>Bien</option>
                <option>Assez bien</option>
                <option>Moyen</option>
                <option>Faible</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">English Level *</label>
              <select
                name="englishLevel"
                required
                value={formData.englishLevel}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              >
                <option value="">Select</option>
                <option>Parfait</option>
                <option>Bien</option>
                <option>Assez bien</option>
                <option>Moyen</option>
                <option>Faible</option>
              </select>
            </div>
          </div>

          {/* Experience & Skills */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Associative Experience *</label>
              <textarea
                name="associativeExperience"
                required
                value={formData.associativeExperience}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
            <div>
              <label className="block mb-1">Robotics Experience *</label>
              <textarea
                name="roboticsExperience"
                required
                value={formData.roboticsExperience}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
            <div>
              <label className="block mb-1">Mechanical Design Software</label>
              <textarea
                name="mechanicalSoftware"
                value={formData.mechanicalSoftware}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
            <div>
              <label className="block mb-1">Programming Languages</label>
              <textarea
                name="programmingLanguages"
                value={formData.programmingLanguages}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
            <div>
              <label className="block mb-1">Design Software</label>
              <textarea
                name="designSoftware"
                value={formData.designSoftware}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
          </div>

          {/* Motivation and Interview */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Why do you want to join? *</label>
              <textarea
                name="motivation"
                required
                value={formData.motivation}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
            <div>
              <label className="block mb-1">Interview Preference *</label>
              <select
                name="interviewPreference"
                required
                value={formData.interviewPreference}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              >
                <option value="">Select</option>
                <option>Online</option>
                <option>In-person</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Additional Questions or Comments</label>
              <textarea
                name="questions"
                value={formData.questions}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-[#E2AC0D] text-black px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinFormPage;
