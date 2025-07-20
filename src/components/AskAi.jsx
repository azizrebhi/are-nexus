import { useState } from "react";

const AskAI = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setQuestion(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer(null);
    setDocs([]);

    try {
      const res = await fetch("https://arebackend-1.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setAnswer(data.answer);
      setDocs(data.retrieved_docs || []);
    } catch (err) {
      setAnswer("Error fetching answer. Please try again.");
      setDocs([]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen text-white flex justify-center py-16 px-4">
      <div className="max-w-4xl w-full bg-neutral-800 rounded-xl p-10 border border-neutral-700 shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-10">
          Ask  <span className="text-[#E2AC0D]">AREAI </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-lg max-w-3xl mx-auto">
          <label htmlFor="question" className="mb-2 font-semibold block">
            Your question *
          </label>
          <textarea
            id="question"
            name="question"
            value={question}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-5 py-3 bg-neutral-700 rounded-lg outline-none focus:ring-2 focus:ring-[#E2AC0D]"
            placeholder="Ask something about the robotics association..."
          />

          <div className="text-center mt-8">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#E2AC0D] text-black font-bold px-12 py-4 rounded-full hover:bg-yellow-400 transition shadow-lg disabled:opacity-50"
            >
              {loading ? "Thinking..." : "Ask"}
            </button>
          </div>
        </form>

        {answer && (
          <div className="mt-12 max-w-3xl mx-auto bg-neutral-900 p-6 rounded-lg border border-[#E2AC0D]">
            <h3 className="text-2xl font-semibold mb-4 text-[#E2AC0D]">Answer:</h3>
            <p className="whitespace-pre-line">{answer}</p>

            {docs.length > 0 && (
              <>
                <h4 className="mt-6 text-lg font-semibold text-white">Retrieved Documents:</h4>
                <ul className="list-disc list-inside max-h-48 overflow-y-auto text-gray-300 mt-2 space-y-2">
                  {docs.map((doc, i) => (
                    <li key={i} className="whitespace-pre-line">{doc}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AskAI;
