// FormPage.js
import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset the form data if needed
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    // Set the formSubmitted state to true
    setFormSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center' }}>Form Page</h1>
      
      {formSubmitted ? (
        <div style={{ textAlign: 'center', color: 'green', marginBottom: '15px' }}>
          Form submitted successfully!
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '90%', padding: '10px', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '90%', padding: '10px', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            style={{ width: '90%', padding: '10px', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>

        <button type="submit" style={{ backgroundColor: '#2f2da9', color: 'white', padding: '15px', cursor: 'pointer', border: 'none', borderRadius: '5px', fontSize: '1.2rem', width: '100%' }}>Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
