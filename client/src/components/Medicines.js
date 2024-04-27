import React, { useState } from 'react';

const Medicines = () => {
  const [patientName, setPatientName] = useState('');
  const [prescription, setPrescription] = useState('');
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add your logic here to handle form submission (e.g., API call, etc.)

    // For demonstration purposes, just set submitted to true
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#e6e6fa', borderRadius: '8px', boxSizing: 'border-box' }}>
      {submitted ? (
        <div style={{ textAlign: 'center' }}>
          <p>Thank you for submitting! Your medicines will be delivered home soon.</p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="patientName">Patient Name:</label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="prescription">Address:</label>
            <textarea
              id="prescription"
              name="prescription"
              value={prescription}
              onChange={(e) => setPrescription(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            ></textarea>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="file">Doctor Prescription:</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', background: '#2196f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Medicines;
