// HomeCareComponent.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import exerciseImage from './exercise.png'; // Import exercise image
import dietImage from './diet.jpeg'; // Import diet image
import healthTipsImage from './healthtips.jpeg'; // Import health tips image

const HomeCareComponent = () => {
  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '20px',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    color: '#333',
    textAlign: 'center',
    backgroundColor: 'white', // White background
  };

  const lavenderBackground = {
    background: '#E6E6FA',
    padding: '20px',
    borderRadius: '8px',
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', ...lavenderBackground }}>
      <h2>Home Care</h2>
      <br />
      {/* Introduction to the importance of home care */}
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Home care is a vital aspect of healthcare that brings numerous benefits to individuals seeking support. <br />One of the key advantages is the creation of a personalized care environment.<br /> Being able to receive care in the comfort of one's own home provides a familiar and secure setting, contributing to a positive overall experience.
      </p>

      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Another crucial aspect is the preservation of independence.<br /> Home care allows individuals to maintain their autonomy, supporting their desire to live independently.<br /> This independence can significantly impact mental and emotional well-being, fostering a sense of control and self-sufficiency.
      </p>

      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Home care facilitates the implementation of tailored health plans.<br /> From personalized nutrition and dietary requirements to individualized exercise routines and medical monitoring, the care provided is specifically designed to meet the unique needs of each individual.
      </p>

      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Additionally, the concept of home care contributes to faster recovery and effective rehabilitation.<br /> Being in a familiar environment aids in the healing process, reduces stress, and allows for more efficient rehabilitation procedures after illness or surgery.
      </p>

      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Emotional and social support is an integral part of home care.<br /> By maintaining social connections and encouraging family involvement, home care addresses not only physical health but also emotional well-being, reducing feelings of loneliness and isolation.<br />
      </p>
      <br />
      {/* Cards with links to separate pages */}
      <div style={cardContainerStyle}>
        <Link to="/exercise" style={{ ...cardStyle }}>
          <img src={exerciseImage} alt="Exercise" style={{ width: '100%', marginBottom: '10px', borderRadius: '8px' }} />
          <h3>Exercise</h3>
          <h6>Click here</h6>
        </Link>

        <Link to="/healthyrecipies" style={{ ...cardStyle }}>
          <img src={dietImage} alt="Healthy Recipies" style={{ width: '100%', marginBottom: '10px', borderRadius: '8px' }} />
          <h3>Healthy Recipies</h3>
          <h6>Click here</h6>
        </Link>

        <Link to="/healthtips" style={{ ...cardStyle }}>
          <img src={healthTipsImage} alt="Health Tips" style={{ width: '100%', marginBottom: '10px', borderRadius: '8px' }} />
          <h3>Health Tips</h3>
          <h6>Click here</h6>
        </Link>
      </div>
    </div>
  );
};

export default HomeCareComponent;
