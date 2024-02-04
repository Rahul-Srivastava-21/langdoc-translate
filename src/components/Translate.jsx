import React, { useState } from "react";
// import countries from "../data.js";
import { AiOutlineSwap } from "react-icons/ai";
import "./Translate.css";
import Dropdown from "./Dropdown.jsx";
import ToggleIcon  from "./ToggleIcon.jsx"

function Translate() {
  const [isRotated, setRotated] = useState(false);

  const handleSwapClick = () => {
    setRotated(!isRotated);
    // Add your logic for swapping functionality here
  };

  const handleUpload = (event) => {
    // Handle file upload logic here
    const file = event.target.files[0];
    if (file) {
      // Process the uploaded file, e.g., send it to a server or read its content
      console.log("File uploaded:",file);
    }
  };

  const handleDownload = () => {
    // Handle file download logic here
    const dummyContent = "This is dummy content. Replace it with your actual file content.";
    const blob = new Blob([dummyContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "downloaded_document.txt"; // Set desired filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

//   const languageOptions = Object.entries(countries).map(([code, name]) => (
//     <option key={code} value={code}>
//       {name}
//     </option>
//   ));
  
  const handleClick = () => {
    // Trigger the click event on the file input when the button is clicked
    document.getElementById("drop_zone").click();
  };

  return (
    <div className="container">
        <ToggleIcon />
      <div className="wrapper">
        <div className="buttons-container">
          <button onClick={handleClick}>
            <div className="dropZoneContainer">
                <input
                type="file"
                accept=".txt, .doc, .docx, .pdf"
                id="drop_zone"
                className="FileUpload"
                onChange={handleUpload}
                />
        <div className="dropZoneOverlay">Upload Document</div>
      </div>
    </button>
          <button className="download-button" onClick={handleDownload}>
            Download Document
          </button>
        </div>
        <ul className="controls">
          <li className="row from">
             <Dropdown/>
          </li>
          <li className="exchange" onClick={handleSwapClick}>
            <AiOutlineSwap className={isRotated ? "rotated" : ""} />
          </li>
          <li className="row to">
             <Dropdown/>
          </li>
        </ul>
      </div>
      <button>Translate Document</button>
    </div>
  );
}

export default Translate;
