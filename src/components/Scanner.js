import React from "react";
import { BarcodeScannerComponent } from "react-qr-barcode-scanner";
import parseSAID from "../utils/parseSAID";

function Scanner({ onScan }) {
  const handleUpdate = (err, result) => {
    if (result) {
      const parsed = parseSAID(result.text);
      if (parsed) onScan(parsed);
    }
  };

  return (
    <div>
      <p>Allow camera access and hold your SA ID under the camera.</p>
      <BarcodeScannerComponent
        width={350}
        height={350}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default Scanner;
