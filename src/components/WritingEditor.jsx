import { useState } from "react";
import ExportText from "../utils/ExportText";

const WritingPage = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts here..."
        className="w-full h-60 p-4 border bg-black text-white placeholder-gray-400 border-gray-600"
      />

      <div className="mt-4">
        <ExportText content={text} filename="Stoic_Daily_Reflection" />
      </div>
    </div>
  );
};

export default WritingPage;
