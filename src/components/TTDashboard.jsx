import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase-client';

const UploadPaymentImage = ({ memberId, image, onUploaded }) => {
  const [imageUrl, setImageUrl] = useState(image || null);

  useEffect(() => {
    setImageUrl(image || null);
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
          <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded bg-[#E2AC0D] text-black font-semibold text-sm hover:brightness-110">
            View
          </a>
          <button onClick={handleDelete} className="px-3 py-1 rounded bg-red-600 text-white font-medium text-xs hover:bg-red-700">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

// New polished modal component for delete confirmation
const DeleteConfirmModal = ({ visible, onConfirm, onCancel, participantName }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-neutral-900 rounded-lg shadow-lg max-w-md w-full p-6 text-white">
        <h3 className="text-xl font-bold mb-4 text-[#E2AC0D]">Confirm Deletion</h3>
        <p className="mb-6">Do you really want to delete  <span className="font-semibold">{participantName}</span>? This action is irreversible</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-neutral-700 rounded hover:bg-neutral-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const TTDashboard = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [currentlyEditing, setCurrentlyEditing] = useState({ id: null, field: null });
  const [newParticipant, setNewParticipant] = useState({
    robotName: "", teamSize: "", leaderName: "", leaderPhone: "", altPhone: "",
    leaderEmail: "", member2Name: "", member2Phone: "", member2Email: "",
    member3Name: "", member3Phone: "", member3Email: "", school: "", club: ""
  });
  const [successMessage, setSuccessMessage] = useState("");

  // For delete modal
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [participantToDelete, setParticipantToDelete] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) navigate("/signin");
    };
    checkSession();
  }, [navigate]);

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('AllTerrain').select('*').order('created_at', { ascending: true });
      if (!error) setMembers(data);
      else console.error('Error fetching members:', error.message);
      setLoading(false);
    };
    fetchMembers();
  }, []);

  const toggleStatus = async (id, field, value) => {
    const { error } = await supabase
      .from('AllTerrain')
      .update({ [field]: value })
      .eq('id', id);
    if (!error) {
      setMembers(prev => prev.map(m => m.id === id ? { ...m, [field]: value } : m));
    } else {
      console.error(`Error updating ${field}:`, error.message);
    }
  };

  // Editable cell handlers
  const handleCellChange = (id, field, value) => {
    setMembers(prev => prev.map(m => (m.id === id ? { ...m, [field]: value } : m)));
  };

  const saveEdit = async () => {
    const { id, field } = currentlyEditing;
    if (!id || !field) return;

    const member = members.find(m => m.id === id);
    if (!member) return;

    const { error } = await supabase
      .from('AllTerrain')
      .update({ [field]: member[field] })
      .eq('id', id);

    if (error) console.error(`Error updating ${field}:`, error.message);

    setCurrentlyEditing({ id: null, field: null });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    } else if (e.key === "Escape") {
      // Cancel editing on Escape - reload data from DB or just reset currentlyEditing
      setCurrentlyEditing({ id: null, field: null });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewParticipant((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddParticipant = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('AllTerrain')
      .insert([newParticipant])
      .select();

    if (error) {
      console.error("Insert error:", error.message);
      alert("Failed to add participant: " + error.message);
      return;
    }

    setMembers((prev) => [...prev, ...data]);

    setNewParticipant({
      robotName: "", teamSize: "", leaderName: "", leaderPhone: "", altPhone: "",
      leaderEmail: "", member2Name: "", member2Phone: "", member2Email: "",
      member3Name: "", member3Phone: "", member3Email: "", school: "", club: ""
    });
    setShowForm(false);
    setSuccessMessage("✅ Participant successfully added! !");
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  // Delete modal controls
  const openDeleteModal = (member) => {
    setParticipantToDelete(member);
    setDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setParticipantToDelete(null);
    setDeleteModalVisible(false);
  };

  const confirmDeleteParticipant = async () => {
    if (!participantToDelete) return;

    const { error } = await supabase
      .from('AllTerrain')
      .delete()
      .eq('id', participantToDelete.id);

    if (error) {
      console.error("Delete error:", error.message);
      alert("Failed to delete participant: " + error.message);
      closeDeleteModal();
      return;
    }

    setMembers((prev) => prev.filter(m => m.id !== participantToDelete.id));
    setSuccessMessage("✅ Participant successfully deleted!");
    setTimeout(() => setSuccessMessage(""), 4000);

    closeDeleteModal();
  };

  const filteredMembers = members.filter(member =>
    Object.values(member).join(" ").toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render a cell as editable or just text
  const renderEditableCell = (member, field) => {
    if (currentlyEditing.id === member.id && currentlyEditing.field === field) {
      return (
        <input
          className="bg-neutral-700 text-white rounded px-2 py-1 w-full"
          value={member[field] || ''}
          onChange={(e) => handleCellChange(member.id, field, e.target.value)}
          onBlur={saveEdit}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      );
    }
    return (
      <span
        onClick={() => setCurrentlyEditing({ id: member.id, field })}
        className="cursor-pointer"
        title="Click to edit"
      >
        {member[field] || ''}
      </span>
    );
  };

  return (
    <div className="min-h-screen text-white px-6 sm:px-10 py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold tracking-wide text-[#E2AC0D]">Executive Dashboard</h1>
      </div>

      <h2 className="text-3xl sm:text-5xl text-center my-8 tracking-wide">
        AllTerrain <span className="text-[#E2AC0D]">Challenge</span>
      </h2>

      <p className="text-center text-lg text-neutral-300 mt-2 mb-4">
        Total Participants: <span className="text-[#E2AC0D] font-semibold">{filteredMembers.length}</span>
      </p>

      {successMessage && (
        <div className="mb-4 p-3 bg-green-600 text-white rounded text-center font-semibold">
          {successMessage}
        </div>
      )}

      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full max-w-md rounded bg-neutral-800 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#E2AC0D]"
        />
        <button
          onClick={() => setShowForm(!showForm)}
          className="ml-4 px-4 py-2 bg-[#E2AC0D] text-black font-semibold rounded hover:brightness-110"
        >
          {showForm ? "Cancel" : "Add Participant"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAddParticipant} className="space-y-6 text-lg max-w-4xl bg-neutral-800 p-8 rounded-xl mx-auto mb-8 border border-neutral-700 shadow-xl">
          <h3 className="text-3xl font-bold text-center mb-6 text-[#E2AC0D]">Ajouter un participant</h3>

          {/* Robot Name */}
          <Input label="Nom du robot *" name="robotName" value={newParticipant.robotName} onChange={handleChange} required />

          {/* Team Size */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold" htmlFor="teamSize">Le nombre des membres de l'équipe *</label>
            <select
              id="teamSize"
              name="teamSize"
              required
              value={newParticipant.teamSize}
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
          <Input label="Nom et Prénom du chef d'équipe *" name="leaderName" value={newParticipant.leaderName} onChange={handleChange} required />
          <Input label="Numéro de téléphone du chef d'équipe *" name="leaderPhone" value={newParticipant.leaderPhone} onChange={handleChange} required />
          <Input label="Un autre numéro de téléphone" name="altPhone" value={newParticipant.altPhone} onChange={handleChange} />
          <Input label="E-mail du chef d'équipe *" name="leaderEmail" type="email" value={newParticipant.leaderEmail} onChange={handleChange} required />

          {/* Member 2 */}
          <Input label="Nom et Prénom du deuxième membre" name="member2Name" value={newParticipant.member2Name} onChange={handleChange} />
          <Input label="Numéro de téléphone" name="member2Phone" value={newParticipant.member2Phone} onChange={handleChange} />
          <Input label="E-mail" name="member2Email" type="email" value={newParticipant.member2Email} onChange={handleChange} />

          {/* Member 3 */}
          <Input label="Nom et Prénom du troisième membre" name="member3Name" value={newParticipant.member3Name} onChange={handleChange} />
          <Input label="Numéro de téléphone" name="member3Phone" value={newParticipant.member3Phone} onChange={handleChange} />
          <Input label="E-mail" name="member3Email" type="email" value={newParticipant.member3Email} onChange={handleChange} />

          {/* School & Club */}
          <Input label="Établissement *" name="school" value={newParticipant.school} onChange={handleChange} required />
          <Input label="Nom du Club/Association *" name="club" value={newParticipant.club} onChange={handleChange} required />

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#E2AC0D] text-black font-bold px-12 py-4 rounded-full hover:bg-yellow-400 transition shadow-lg"
            >
              Ajouter
            </button>
          </div>
        </form>
      )}

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
                <th className="px-6 py-4">Delete</th> {/* New delete column */}
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((m, idx) => (
                <tr key={idx} className={`${idx % 2 === 0 ? 'bg-neutral-900' : 'bg-neutral-800'} hover:bg-neutral-700`}>
                  <td className="px-6 py-4">{renderEditableCell(m, 'robotName')}</td>
                  <td className="px-6 py-4">{renderEditableCell(m, 'teamSize')}</td>
                  <td className="px-6 py-4">{renderEditableCell(m, 'leaderName')}</td>
                  <td className="px-6 py-4">{renderEditableCell(m, 'leaderPhone')}</td>
                  <td className="px-6 py-4">{renderEditableCell(m, 'altPhone')}</td>
                  <td className="px-6 py-4">{renderEditableCell(m, 'leaderEmail')}</td>
                  <td className="px-6 py-4">{renderEditableCell(m, 'member2Name')}</td>
                  <td className="px-6 py-4">{renderEditableCell(m, 'member2Phone')}</td>
                  <td className="px-6 py-4">{renderEditableCell(m, 'member2Email')}</td>
                  <td className="px-6 py-4">{renderEditableCell(m, 'member3Name')}</td>
                  <td className="px-6 py-4">{renderEditableCell(m, 'member3Phone')}</td>
                  <td className="px-6 py-4">{renderEditableCell(m, 'member3Email')}</td>
                  <td className="px-6 py-4">{renderEditableCell(m, 'school')}</td>
                  <td className="px-6 py-4">{renderEditableCell(m, 'club')}</td>
                  <td className="px-6 py-4">
                    <input type="checkbox" checked={m.payment_email_sent || false} onChange={() => toggleStatus(m.id, 'payment_email_sent', !m.payment_email_sent)} />
                  </td>
                  <td className="px-6 py-4">
                    <UploadPaymentImage memberId={m.id} image={m.payment_image_url} onUploaded={(url) => {
                      setMembers(prev => prev.map(mem => mem.id === m.id ? { ...mem, payment_image_url: url } : mem));
                    }} />
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" checked={m.payment_verified || false} onChange={() => toggleStatus(m.id, 'payment_verified', !m.payment_verified)} />
                  </td>
                  <td className="px-6 py-4">
                    <input type="checkbox" checked={m.confirmation_sent || false} onChange={() => toggleStatus(m.id, 'confirmation_sent', !m.confirmation_sent)} />
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => openDeleteModal(m)}
                      className="px-3 py-1 rounded bg-red-600 text-white font-medium text-xs hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        visible={deleteModalVisible}
        onConfirm={confirmDeleteParticipant}
        onCancel={closeDeleteModal}
        participantName={participantToDelete ? participantToDelete.robotName : ""}
      />
    </div>
  );
};

export default TTDashboard;

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
