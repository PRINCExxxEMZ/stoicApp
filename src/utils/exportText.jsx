const ExportText = ({ content, filename = "Daily_Writing" }) => {
  const downloadAsWord = () => {
    if (!content || content.trim() === "") {
      alert("Nothing to export");
      return;
    }

    
    // Create Word-compatible HTML
    const htmlContent = `
      <html>
        <head>
          <meta charset="utf-8" />
        </head>
        <body>
          ${content.replace(/\n/g, "<br/>")}
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], {
      type: "application/msword",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.doc`;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={downloadAsWord}
      className="w-full px-6 py-3 text-white border border-white rounded-md hover:bg-black transition duration-200"
    >
      Download as Word
    </button>
  );
};

export default ExportText;
