const getDailyPrompt = (prompts) => {
  const today = new Date().toDateString();

  // Generate consistent index per day
  const seed = today
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return prompts[seed % prompts.length];
};

export default getDailyPrompt;