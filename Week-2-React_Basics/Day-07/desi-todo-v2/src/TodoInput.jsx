import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2">
      <input
        type="text"
        placeholder="Add your desi task... 😎"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 w-full max-w-sm border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
      >
        Add
      </button>
    </form>
  );
}
