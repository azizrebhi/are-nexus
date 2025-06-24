import { useState } from "react";
import supabase from "../supabase-client"; // your supabase client setup

const TTform = () => {
  const [formData, setFormData] = useState({
    robotName: "",
    teamSize: "",
    leaderName: "",
    leaderPhone: "",
    altPhone: "",
    leaderEmail: "",
    member2Name: "",
    member2Phone: "",
    member2Email: "",
    member3Name: "",
    member3Phone: "",
    member3Email: "",
    school: "",
    club: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("AllTerrain")
      .insert([formData]);

    if (error) {
      console.error("❌ Supabase error:", error.message);
      alert("An error occurred. Please try again.");
    } else {
      alert("✅ Form submitted successfully!");
      setFormData({
        robotName: "",
        teamSize: "",
        leaderName: "",
        leaderPhone: "",
        altPhone: "",
        leaderEmail: "",
        member2Name: "",
        member2Phone: "",
        member2Email: "",
        member3Name: "",
        member3Phone: "",
        member3Email: "",
        school: "",
        club: "",
      });
    }
  };

  return (
    <div className="min-h-screen  text-white flex justify-center py-16 px-4">
      <div className="max-w-5xl w-full bg-neutral-800 rounded-xl p-10 border border-neutral-700 shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-10">
          Registration – <span className="text-[#E2AC0D]">THE HELLISH BLAST</span>
        </h2>

        <p className="text-gray-300 text-lg mb-10 leading-relaxed text-justify">
          RoboCup ENSI 7.0 returns on <strong className="text-white">October 13, 2024</strong> with the theme
          <span className="text-[#E2AC0D] font-semibold"> “CHEMICAL CHAOS: ROBOTS ON A MISSION”</span>. This form is for participants of the
          <strong className="text-white"> All Terrain Challenge – THE HELLISH BLAST</strong>. Build a robot to save the floating kingdom by discovering
          a new chemical insulator in a race against time!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-lg max-w-2xl mx-auto">

          {/* Robot Name */}
          <Input label="Nom du robot *" name="robotName" value={formData.robotName} onChange={handleChange} required />

          {/* Team Size */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold" htmlFor="teamSize">Le nombre des membres de l'équipe *</label>
            <select
              id="teamSize"
              name="teamSize"
              required
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-neutral-700 rounded-lg outline-none focus:ring-2 focus:ring-[#E2AC0D]"
            >
              <option value="">Select</option>
              <option value="1">1 seul membre</option>
              <option value="2">2 membres</option>
              <option value="3">3 membres</option>
            </select>
          </div>

          {/* Leader Info */}
          <Input label="Nom et Prénom du chef d'équipe *" name="leaderName" value={formData.leaderName} onChange={handleChange} required />
          <Input label="Numéro de téléphone du chef d'équipe *" name="leaderPhone" value={formData.leaderPhone} onChange={handleChange} required />
          <Input label="Un autre numéro de téléphone" name="altPhone" value={formData.altPhone} onChange={handleChange} />
          <Input label="E-mail du chef d'équipe *" name="leaderEmail" type="email" value={formData.leaderEmail} onChange={handleChange} required />

          {/* Member 2 */}
          <Input label="Nom et Prénom du deuxième membre" name="member2Name" value={formData.member2Name} onChange={handleChange} />
          <Input label="Numéro de téléphone" name="member2Phone" value={formData.member2Phone} onChange={handleChange} />
          <Input label="E-mail" name="member2Email" type="email" value={formData.member2Email} onChange={handleChange} />

          {/* Member 3 */}
          <Input label="Nom et Prénom du troisième membre" name="member3Name" value={formData.member3Name} onChange={handleChange} />
          <Input label="Numéro de téléphone" name="member3Phone" value={formData.member3Phone} onChange={handleChange} />
          <Input label="E-mail" name="member3Email" type="email" value={formData.member3Email} onChange={handleChange} />

          {/* School & Club */}
          <Input label="Établissement *" name="school" value={formData.school} onChange={handleChange} required />
          <Input label="Nom du Club/Association *" name="club" value={formData.club} onChange={handleChange} required />

          {/* Submit */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-[#E2AC0D] text-black font-bold px-12 py-4 rounded-full hover:bg-yellow-400 transition shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TTform;

// Helper input component to avoid repetition
const Input = ({ label, name, type = "text", value, onChange, required = false }) => (
  <div className="flex flex-col">
    <label className="mb-2 font-semibold" htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-5 py-3 bg-neutral-700 rounded-lg outline-none focus:ring-2 focus:ring-[#E2AC0D]"
    />
  </div>
);
