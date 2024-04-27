// ExercisePage.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling

// Import images
import squatsImage from './squats.jpeg';
import pushupsImage from './pushups.png';
import lungesImage from './Lunges.png';
import plankImage from './Plank.png';
import dumbbellRowsImage from './DumbbellRows.png';

const ExercisePage = () => {
  const cardStyle = {
    backgroundColor: '#E6E6FA',
    margin: '10px', // Adjust the spacing between cards
    transition: 'transform 0.3s ease-in-out',
    width: '300px', // Adjust the width of each card
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  };

  const handleCardHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
  };

  const handleCardLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div>
      <div style={containerStyle}>
        {/* Squats Card */}
        <div
          className="card exercise-card"
          style={cardStyle}
          onMouseOver={handleCardHover}
          onMouseLeave={handleCardLeave}
        >
          <img src={squatsImage} alt="Squats" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h3 className="card-title">Squats</h3>
            <ul>
              <li>Stand with your feet shoulder-width apart.</li>
              <li>Lower your body by bending your knees and pushing your hips back as if you're sitting in a chair.</li>
              <li>Keep your chest up and back straight.</li>
              <li>Lower yourself until your thighs are parallel to the ground.</li>
              <li>Push through your heels to return to the starting position.</li>
            </ul>
          </div>
        </div>

        {/* Push-ups Card */}
        <div
          className="card exercise-card"
          style={cardStyle}
          onMouseOver={handleCardHover}
          onMouseLeave={handleCardLeave}
        >
          <img src={pushupsImage} alt="Push-ups" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h3 className="card-title">Push-ups</h3>
            <ul>
              <li>Start in a plank position with your hands slightly wider than shoulder-width apart.</li>
              <li>Lower your body by bending your elbows while keeping your body in a straight line.</li>
              <li>Go as low as you can, then push back up to the starting position.</li>
              <li>If regular push-ups are too challenging, you can modify by doing them on your knees.</li>
            </ul>
          </div>
        </div>

        {/* Lunges Card */}
        <div
          className="card exercise-card"
          style={cardStyle}
          onMouseOver={handleCardHover}
          onMouseLeave={handleCardLeave}
        >
          <img src={lungesImage} alt="Lunges" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h3 className="card-title">Lunges</h3>
            <ul>
              <li>Stand with your feet together.</li>
              <li>Take a step forward with one foot and lower your body until both knees are bent at a 90-degree angle.</li>
              <li>The back knee should hover just above the ground.</li>
              <li>Push off the front foot to return to the starting position.</li>
              <li>Repeat on the other leg.</li>
            </ul>
          </div>
        </div>

        {/* Plank Card */}
        <div
          className="card exercise-card"
          style={cardStyle}
          onMouseOver={handleCardHover}
          onMouseLeave={handleCardLeave}
        >
          <img src={plankImage} alt="Plank" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h3 className="card-title">Plank</h3>
            <ul>
              <li>Start in a forearm plank position with your elbows directly beneath your shoulders.</li>
              <li>Keep your body in a straight line from head to heels.</li>
              <li>Hold the position, engaging your core and keeping your back straight.</li>
              <li>Aim to hold for at least 30 seconds to start and gradually increase the duration as you get stronger.</li>
            </ul>
          </div>
        </div>

        {/* Dumbbell Rows Card */}
        <div
          className="card exercise-card"
          style={cardStyle}
          onMouseOver={handleCardHover}
          onMouseLeave={handleCardLeave}
        >
          <img src={dumbbellRowsImage} alt="Dumbbell Rows" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h3 className="card-title">Dumbbell Rows</h3>
            <ul>
              <li>Hold a dumbbell in each hand with your palms facing your body.</li>
              <li>Bend at the hips and knees, keeping your back straight.</li>
              <li>Let the dumbbells hang at arm's length.</li>
              <li>Pull the dumbbells to your sides, squeezing your shoulder blades together.</li>
              <li>Lower the dumbbells back to the starting position.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
