import React from "react";

const DownloadButton = ({
  text,
  prompt,
  filename = "Daily_Reflection",
}) => {
  const handleDownload = () => {
    if (!text || text.trim() === "") {
      alert("Write something before downloading.");
      return;
    }

    const date = new Date().toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const htmlContent = `
      <html>
        <head>
          <meta charset="utf-8" />
        </head>
        <body style="font-family: Arial, sans-serif;">
          <h2>${prompt || "Daily Writing"}</h2>
          <p><em>${date}</em></p>
          <hr />
          <p>${text.replace(/\n/g, "<br/>")}</p>
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
      onClick={handleDownload}
      className="px-6 py-3 text-white border border-white rounded-md hover:bg-black transition duration-200"
    >
      Download as Word
    </button>
  );
};

export default DownloadButton;
