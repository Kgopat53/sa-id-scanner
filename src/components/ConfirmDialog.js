import React from "react";

function ConfirmDialog({ data, onConfirm }) {
  return (
    <div className="dialog">
      <h2>Confirm Your Details</h2>
      <p><strong>ID Number:</strong> {data.idNumber}</p>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Surname:</strong> {data.surname}</p>
      <p><strong>Date of Birth:</strong> {data.dateOfBirth}</p>
      <p><strong>Nationality:</strong> {data.nationality}</p>
      <div className="buttons">
        <button onClick={() => onConfirm("yes")}>Yes</button>
        <button onClick={() => onConfirm("no")}>No</button>
      </div>
    </div>
  );
}

export default ConfirmDialog;
