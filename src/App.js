import React, { useState } from "react";
import Scanner from "./components/Scanner";
import ConfirmDialog from "./components/ConfirmDialog";
import "./index.css";

function App() {
  const [scannedData, setScannedData] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = (choice) => {
    if (choice === "yes") {
      alert("✅ Details confirmed!");
    } else {
      alert("❌ Please rescan your ID.");
    }
    setScannedData(null);
    setConfirmed(false);
  };

  return (
    <div className="app">
      <h1>South African ID Scanner</h1>
      {!scannedData && <Scanner onScan={setScannedData} />}
      {scannedData && (
        <ConfirmDialog data={scannedData} onConfirm={handleConfirm} />
      )}
    </div>
  );
}

export default App;
