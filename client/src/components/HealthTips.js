// HealthTips.jsx

import React, { useState } from 'react';

const HealthTips = () => {
  const whiteBackground = {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  };

  const lavenderBackground = {
    background: '#E6E6FA', // Lavender color
    padding: '10px',
    borderRadius: '0 0 8px 8px',
    overflow: 'hidden',
  };

  const accordionItemStyle = {
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const accordionHeadingStyle = {
    backgroundColor: lavenderBackground.background,
    padding: '10px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const accordionContentStyle = {
    padding: '10px',
  };

  const tips = [
    { title: 'Stay Hydrated', content: 'Drink plenty of water throughout the day to maintain proper hydration levels.' },
    { title: 'Eat a Balanced Diet', content: 'Include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats in your meals.' },
    { title: 'Exercise Regularly', content: 'Aim for at least 150 minutes of moderate-intensity exercise per week, including cardio and strength training.' },
    { title: 'Get Adequate Sleep', content: 'Ensure 7-9 hours of quality sleep each night for overall well-being.' },
    { title: 'Practice Stress Management', content: 'Incorporate relaxation techniques such as meditation, deep breathing, or yoga to manage stress.' },
    { title: 'Maintain a Healthy Weight', content: 'Strive for a weight that is within the recommended range for your height and body type.' },
    { title: 'Limit Sugar and Processed Foods', content: 'Minimize the consumption of sugary snacks and processed foods for better metabolic health.' },
    { title: 'Quit Smoking', content: 'If you smoke, seek support to quit smoking and improve your lung and heart health.' },
    { title: 'Limit Alcohol Intake', content: 'Consume alcohol in moderation, if at all, to reduce the risk of health issues.' },
    { title: 'Practice Good Hygiene', content: 'Wash hands regularly, maintain oral hygiene, and adopt healthy cleanliness habits.' },
    { title: 'Protect Your Skin', content: 'Use sunscreen, wear protective clothing, and avoid excessive sun exposure to protect your skin.' },
    { title: 'Cultivate Social Connections', content: 'Nurture relationships with family and friends for emotional well-being.' },
    { title: 'Stay Informed', content: 'Stay updated on health-related information and get regular check-ups for early detection of potential issues.' },
    { title: 'Limit Screen Time', content: 'Reduce the time spent on screens and take breaks to protect eye health and posture.' },
    { title: 'Laugh and Have Fun', content: 'Incorporate humor and enjoyable activities into your life to promote mental health.' },
  ];

  const [openTip, setOpenTip] = useState(null);

  const handleTipClick = (index) => {
    setOpenTip(openTip === index ? null : index);
  };

  return (
    <div style={whiteBackground}>
      <h2 style={{ marginBottom: '20px' }}>Health Tips</h2>
      {tips.map((tip, index) => (
        <div key={index} style={accordionItemStyle}>
          <div style={accordionHeadingStyle} onClick={() => handleTipClick(index)}>
            <h3 style={{ margin: '0' }}>{tip.title}</h3>
            <span>{openTip === index ? 'v' : '^'}</span>
          </div>
          {openTip === index && (
            <div style={accordionContentStyle}>
              <p>{tip.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HealthTips;
