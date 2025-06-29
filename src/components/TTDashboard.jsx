import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase-client';

const UploadPaymentImage = ({ memberId, image, onUploaded }) => {
  const [imageUrl, setImageUrl] = useState(image || null);

  useEffect(() => {
    setImageUrl(image || null); // ✅ Update on props change
  }, [image]);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const path = `${memberId}/${file.name}`;

    const { error } = await supabase.storage
      .from('payment-references')
      .upload(path, file, { upsert: true });

    if (error) return console.error("Upload error:", error);

    const { data: urlData } = supabase.storage
      .from('payment-references')
      .getPublicUrl(path);

    const publicUrl = urlData.publicUrl;
    setImageUrl(publicUrl);

    await supabase.from('AllTerrain')
      .update({ payment_image_url: publicUrl })
      .eq('id', memberId);

    if (onUploaded) onUploaded(publicUrl);
  };

  const handleDelete = async () => {
    const filePath = imageUrl.split('/').slice(-2).join('/');
    const { error } = await supabase.storage
      .from('payment-references')
      .remove([filePath]);

    if (error) return console.error("Delete error:", error);

    await supabase.from('AllTerrain')
      .update({ payment_image_url: null })
      .eq('id', memberId);

    setImageUrl(null);
    if (onUploaded) onUploaded(null);
  };

  return (
    <div className="flex flex-col gap-2">
      {!imageUrl ? (
        <input type="file" onChange={handleUpload} className="text-sm" />
      ) : (
        <div className="flex gap-2">
        <a
          href={imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded bg-[#E2AC0D] text-black font-semibold text-sm hover:brightness-110 transition duration-150"
        >
          View
        </a>
        <button
          onClick={handleDelete}
          className="px-3 py-1 rounded bg-red-600 text-white font-medium text-xs hover:bg-red-700 transition duration-150"
        >
          Delete
        </button>
      </div>
      
      )}
    </div>
  );
};

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
      const { data, error } = await supabase
      .from('AllTerrain')
      .select('*')
      .order('created_at', { ascending: true });
      if (error) {
        console.error('Error fetching members:', error.message);
      } else {
        setMembers(data);
      }
      setLoading(false);
    };
    fetchMembers();
  }, []);

  const toggleStatus = async (id, field, value) => {
    console.log("TOGGLE", { id, field, value }); // ✅ Check if ID is a number and valid
  
    const { data, error } = await supabase
      .from('AllTerrain')
      .update({ [field]: value })
      .eq('id', id)
      .select();
  
    if (error) {
      console.error(`Error updating ${field}:`, error.message);
    } else {
      console.log("Update success:", data);
      setMembers(prev =>
        prev.map(m => (m.id === id ? { ...m, [field]: value } : m))
      );
    }
  };
  

  return (
    <div className="min-h-screen text-white px-6 sm:px-10 py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold tracking-wide text-[#E2AC0D]">Executive Dashboard</h1>
      </div>

      <h2 className="text-3xl sm:text-5xl text-center my-8 tracking-wide">
        AllTerrain <span className="text-[#E2AC0D]">Challenge</span>
      </h2>

      {loading ? (
        <p className="text-center mt-10 text-neutral-300">Loading participants...</p>
      ) : (
        <div className="overflow-auto rounded-xl border border-neutral-700 shadow-lg">
          <table className="min-w-full text-base bg-neutral-900 text-white border-collapse">
            <thead className="bg-neutral-800 text-[#E2AC0D]">
              <tr>
                <th className="px-6 py-4">Robot Name</th>
                <th className="px-6 py-4">Team Size</th>
                <th className="px-6 py-4">Leader Name</th>
                <th className="px-6 py-4">Leader Phone</th>
                <th className="px-6 py-4">Alternative Phone</th>
                <th className="px-6 py-4">Leader Email</th>
                <th className="px-6 py-4">2nd Member Name</th>
                <th className="px-6 py-4">2nd Member Phone</th>
                <th className="px-6 py-4">2nd Member Email</th>
                <th className="px-6 py-4">3rd Member Name</th>
                <th className="px-6 py-4">3rd Member Phone</th>
                <th className="px-6 py-4">3rd Member Email</th>
                <th className="px-6 py-4">School</th>
                <th className="px-6 py-4">Club</th>
                <th className="px-6 py-4">Email Sent</th>
                <th className="px-6 py-4">Payment Ref</th>
                <th className="px-6 py-4">Verified</th>
                <th className="px-6 py-4">Confirmed</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m, idx) => (
                <tr key={idx} className={`${idx % 2 === 0 ? 'bg-neutral-900' : 'bg-neutral-800'} hover:bg-neutral-700`}>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.robotName}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.teamSize}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.leaderName}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.leaderPhone}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.altPhone}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.leaderEmail}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.member2Name}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.member2Phone}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.member2Email}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.member3Name}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.member3Phone}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.member3Email}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.school}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{m.club}</td>
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={m.payment_email_sent || false}
                      onChange={() => toggleStatus(m.id, 'payment_email_sent', !m.payment_email_sent)}
                    />
                  </td>
                  <td className="px-6 py-4">
                  <UploadPaymentImage
  memberId={m.id}
  image={m.payment_image_url} // ✅ Pass the saved URL
  onUploaded={(url) => {
    setMembers(prev =>
      prev.map(mem => mem.id === m.id ? { ...mem, payment_image_url: url } : mem)
    );
  }}
/>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={m.payment_verified || false}
                      onChange={() => toggleStatus(m.id, 'payment_verified', !m.payment_verified)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={m.confirmation_sent || false}
                      onChange={() => toggleStatus(m.id, 'confirmation_sent', !m.confirmation_sent)}
                    />
                  </td>
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
