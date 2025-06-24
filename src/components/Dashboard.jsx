import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase-client';

const Dashboard = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/signin");
      }
    };
    checkSession();
  }, [navigate]);
  

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('members').select('*');
      if (error) {
        console.error('Error fetching members:', error.message);
      } else {
        setMembers(data);
      }
      setLoading(false);
    };

    fetchMembers();
  }, []);


  return (
    <div className="min-h-screen  text-white px-6 sm:px-10 py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold tracking-wide text-[#E2AC0D]">Executive Dashboard</h1>
       
      </div>

      <h2 className="text-3xl sm:text-5xl text-center my-8 tracking-wide">
        Registered <span className="text-[#E2AC0D]">Members</span>
      </h2>

      {loading ? (
        <p className="text-center mt-10 text-neutral-300">Loading members...</p>
      ) : (
        <div className="overflow-auto rounded-xl border border-neutral-700 shadow-lg">
  <table className="min-w-full text-base bg-neutral-900 text-white border-collapse">
    <thead className="bg-neutral-800 text-[#E2AC0D]">
      <tr>
        <th className="px-10 py-6 text-left">First Name</th>
        <th className="px-10 py-6 text-left">Last Name</th>
        <th className="px-10 py-6 text-left">Email</th>
        <th className="px-10 py-6 text-left">Phone</th>
        <th className="px-10 py-6 text-left">Education</th>
        <th className="px-10 py-6 text-left">Class</th>
        <th className="px-10 py-6 text-left">Facebook Link</th>
        <th className="px-10 py-6 text-left">Birth Date</th>
        <th className="px-10 py-6 text-left">French Level</th>
        <th className="px-10 py-6 text-left">English Level</th>
        <th className="px-10 py-6 text-left">Robotics Experience</th>
        <th className="px-10 py-6 text-left">Mechanical Software</th>
        <th className="px-10 py-6 text-left">Programming Languages</th>
        <th className="px-10 py-6 text-left">Design Software</th>
        <th className="px-10 py-6 text-left">Motivation</th>
        <th className="px-10 py-6 text-left">Interview</th>
        <th className="px-10 py-6 text-left">Questions</th>
      </tr>
    </thead>
    <tbody>
      {members.map((m, idx) => (
        <tr
          key={idx}
          className={`${
            idx % 2 === 0 ? "bg-neutral-900" : "bg-neutral-800"
          } hover:bg-neutral-700`}
        >
          <td className="px-10 py-6 whitespace-pre-wrap">{m.firstName}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.lastName}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.email}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.phone}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.educationLevel}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.classGroup}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.facebook}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.birthDate}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.frenchLevel}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.englishLevel}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.roboticsExperience}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.mechanicalSoftware}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.programmingLanguages}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.designSoftware}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.motivation}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.interviewPreference}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.questions}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      )}
    </div>
  );
};

export default Dashboard;
