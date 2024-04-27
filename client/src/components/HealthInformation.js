// HealthInformation.js
import React, { useState } from 'react';

const HealthInformation = () => {
  const [ageGroup, setAgeGroup] = useState(''); // State to store selected age group
  const [dietPlan, setDietPlan] = useState({}); // State to store selected diet plan

  // Diet plans for different age groups
  const dietPlans = {
    '0-18': {
      description: 'Balanced diet with emphasis on growth nutrients. Ensure a variety of foods for overall health and development.',
      eat: ['Fruits', 'Vegetables', 'Whole grains', 'Lean proteins', 'Dairy', 'Nuts and seeds'],
      avoid: ['Sugary drinks', 'Processed foods', 'Excessive sweets', 'High caffeine beverages'],
      activity: 'Engage in at least 60 minutes of physical activity every day, including a mix of aerobic exercises and strength training.',
      hydration: 'Stay hydrated by drinking water throughout the day. Encourage water over sugary beverages.',
      notes: 'Ensure sufficient sleep and avoid excessive screen time for better overall health and development.',
    },
    '19-30': {
      description: 'Maintain a balanced diet with focus on essential nutrients. Include a variety of colorful vegetables and fruits.',
      eat: ['Leafy greens', 'Fruits', 'Lean proteins', 'Whole grains', 'Healthy fats', 'Fish'],
      avoid: ['Fast food', 'Excessive alcohol', 'Processed snacks', 'Sugary desserts'],
      activity: 'Engage in at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity per week, along with muscle-strengthening activities.',
      hydration: 'Stay hydrated by drinking water and limit the consumption of sugary and caffeinated beverages.',
      notes: 'Prioritize mental health with stress management techniques and sufficient sleep.',
    },
    '31-50': {
      description: 'Prioritize a diet rich in vitamins and minerals for overall health. Include a mix of nutrient-dense foods.',
      eat: ['Colorful vegetables', 'Fruits', 'Lean proteins', 'Whole grains', 'Nuts and seeds', 'Legumes'],
      avoid: ['Sugary snacks', 'High-sodium foods', 'Processed meats', 'Trans fats'],
      activity: 'Engage in at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity per week, along with muscle-strengthening activities.',
      hydration: 'Stay hydrated by drinking water and limit the consumption of sugary and caffeinated beverages.',
      notes: 'Focus on regular health check-ups and screenings. Consider incorporating stress management techniques.',
    },
    '51+': {
      description: 'Consider a diet with increased intake of calcium and vitamin D for bone health. Focus on whole foods and hydration.',
      eat: ['Dairy products', 'Leafy greens', 'Fruits', 'Lean proteins', 'Whole grains', 'Oily fish'],
      avoid: ['Excessive caffeine', 'High-sugar desserts', 'Processed foods', 'Sodas'],
      activity: 'Engage in activities that promote flexibility, balance, and strength. Aim for at least 150 minutes of moderate-intensity aerobic activity per week.',
      hydration: 'Stay hydrated by drinking water and limit the consumption of sugary and caffeinated beverages.',
      notes: 'Prioritize bone health with sufficient calcium and vitamin D intake. Regular health check-ups are crucial.',
    },
  };

  const handleAgeGroupChange = (event) => {
    const selectedAgeGroup = event.target.value;
    setAgeGroup(selectedAgeGroup);

    // Update the diet plan based on the selected age group
    setDietPlan(dietPlans[selectedAgeGroup]);
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'lavender', padding: '20px', borderRadius: '8px', width: '98%' }}>
      <h1>Health Information</h1>
      <label>Select Age Group:</label>
      <select value={ageGroup} onChange={handleAgeGroupChange}>
        <option value="">Select</option>
        <option value="0-18">0-18 years</option>
        <option value="19-30">19-30 years</option>
        <option value="31-50">31-50 years</option>
        <option value="51+">51+ years</option>
      </select>

      {ageGroup && (
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
          <h2>Diet Plan for {ageGroup} Age Group:</h2>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
            <p>{dietPlan.description}</p>

            <h3>What to Eat:</h3>
            <ul>
              {dietPlan.eat.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>What to Avoid:</h3>
            <ul>
              {dietPlan.avoid.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Additional Information */}
          <div style={{ marginTop: '20px' }}>
            <h2>Additional Information</h2>

            {/* Physical Activity */}
            <div>
              <h3>Physical Activity:</h3>
              <p>{dietPlan.activity}</p>
            </div>

            {/* Hydration Tips */}
            <div>
              <h3>Hydration Tips:</h3>
              <p>{dietPlan.hydration}</p>
            </div>

            {/* Additional Notes */}
            <div>
              <h3>Additional Notes:</h3>
              <p>{dietPlan.notes}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthInformation;
