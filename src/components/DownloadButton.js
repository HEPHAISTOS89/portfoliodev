import React, { useState } from "react";


function DownloadButton() {
  const [downloading, setDownloading] = useState(false);

  // const handleDownload = () => {
  //   setDownloading(true);
  //   setTimeout(() => {
  //     // window.open("CV1.pdf", "_blank");
  //     // window.location.href = "CV1.pdf";
  //     setDownloading(false);
  //   }, 1000);
  // };

  const handleDownload = async () => {
    const response = await fetch("CV1.pdf");
    const blob = await response.blob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV1.pdf";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <a href="CV1.pdf" download="CV Ryan Sepkap Developpeur Web.pdf">
    <button className="vvd" onClick={handleDownload} disabled={downloading}><span>
    {downloading ? "Downloading..." : "Download Resume"}
  </span></button>
</a>

  );
}

export default DownloadButton;