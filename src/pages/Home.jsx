import prompts from "../data/prompts";
import PromptCard from "../components/PromptCard";
import WritingEditor from "../components/WritingEditor";
import DownloadButton from "../components/DownloadButton";

const Home = () => {
  const prompt = prompts[new Date().getDate() % prompts.length];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-8">
      <PromptCard prompt={prompt} />
      <WritingEditor />
      {/* <DownloadButton/> */}
    </div>
  );
};

export default Home;
