const PromptCard = ({ prompt }) => {
  return (
    <div className="bg-neutral-900 text-white p-6 rounded-xl border border-neutral-800">
      <p className="uppercase text-xs tracking-widest text-neutral-400">
        {prompt.type}
      </p>

      <h2 className="text-2xl font-semibold mt-2">
        {prompt.content}
      </h2>

      <p className="text-neutral-400 mt-3">
        {prompt.guide}
      </p>
    </div>
  );
};

export default PromptCard;