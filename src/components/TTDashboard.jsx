import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase-client';

const TTDashboard = () => {
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
      const { data, error } = await supabase.from('AllTerrain').select('*');
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
        AllTerrain <span className="text-[#E2AC0D]">Challlange</span>
      </h2>

      {loading ? (
        <p className="text-center mt-10 text-neutral-300">Loading participants...</p>
      ) : (
        <div className="overflow-auto rounded-xl border border-neutral-700 shadow-lg">
  <table className="min-w-full text-base bg-neutral-900 text-white border-collapse">
    <thead className="bg-neutral-800 text-[#E2AC0D]">
      <tr>
        <th className="px-10 py-6 text-left">RobotName</th>
        <th className="px-10 py-6 text-left">teamsize</th>
        <th className="px-10 py-6 text-left">leader Name</th>
        <th className="px-10 py-6 text-left">Leader Phone</th>
        <th className="px-10 py-6 text-left">Alternative phone </th>
        <th className="px-10 py-6 text-left">leader Email</th>
        <th className="px-10 py-6 text-left">2nd Member Name</th>
        <th className="px-10 py-6 text-left">2nd Member Phone</th>
        <th className="px-10 py-6 text-left">2nd Member Email</th>
        <th className="px-10 py-6 text-left">3rd Member Name</th>
        <th className="px-10 py-6 text-left">3rd member Phone</th>
        <th className="px-10 py-6 text-left">3rd member Email</th>
        <th className="px-10 py-6 text-left">School</th>
        <th className="px-10 py-6 text-left">Club</th>
       
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
          <td className="px-10 py-6 whitespace-pre-wrap">{m.robotName}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.teamSize}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.leaderName}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.leaderPhone}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.altPhone}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.leaderEmail}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.member2Name}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.member2Phone}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.member2Email}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.member3Name}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.member3Phone}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.member3Email}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.school}</td>
          <td className="px-10 py-6 whitespace-pre-wrap">{m.club}</td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>

      )}
    </div>
  );
};

export default TTDashboard;
