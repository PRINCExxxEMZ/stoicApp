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
      {/* <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts here..."
        className="w-full h-60 p-4 border"
      /> */}

      <div className="mt-4">
        <ExportText content={text} filename="Stoic_Daily_Reflection" />
      </div>
    </div>
  );
};

export default WritingPage;




// import { useEffect, useState } from "react";

// const WritingEditor = () => {
//   const [text, setText] = useState(
//     localStorage.getItem("dailyEntry") || ""
//   );

//   useEffect(() => {
//     localStorage.setItem("dailyEntry", text);
//   }, [text]);

//   return (
//     <textarea
//       className="w-full min-h-[300px] bg-neutral-950 text-white p-4 rounded-xl border border-neutral-800 focus:outline-none"
//       placeholder="Write without restraint..."
//       value={text}
//       onChange={(e) => setText(e.target.value)}
//     />
//   );
// };

// export default WritingEditor;