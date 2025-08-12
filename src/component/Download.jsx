import React, { useEffect } from "react";
import CircularText from "../Animation/CircularText";
import logo from "../assets/logo_securityAstra1new.svg";


const Download = () => {
   const handleDownloadClick = () => {
    // Fire the GA4 event
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "download_click", {
        event_category: "engagement",
        event_label: "SecurityAstra-V1.zip",
        campaign: "Security Astra Campaign",
      });
    }

    // Trigger the download in a new tab
    window.open(
      "https://edutech.blob.core.windows.net/securityastra-windows-exe/SecurityAstra-V1.zip?utm_source=google&utm_medium=social&utm_campaign=Security+Astra+Campaign",
      "_blank"
    );
  };

  
  useEffect(() => {
    handleDownloadClick();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
         <div className="relative mx-4 ">
        <a href="https://securityastra.com/"><img src={logo} className="h-16 w-16  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:h-20 md:w-20  md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 lg:h-26 lg:w-26 absolute  lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10" alt="Logo" /></a>
        <CircularText
          text="   Security  Astra.com"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>
        <h1 className="text-xl font-semibold mb-2">Hang tight…</h1>
 <p>
          Your download is starting. If it doesn't,{" "}
          <a
            className="text-blue-400 underline"
            href="https://edutech.blob.core.windows.net/securityastra-windows-exe/SecurityAstra-V1.zip"
          >
            click here
          </a>.
        </p>      </div>
    </div>
  );
};

export default Download;
