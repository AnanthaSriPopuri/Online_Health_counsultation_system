// client/src/components/Login.js
import React, { useState } from 'react';
import Webpage from './Webpage'; // Import the Webpage component

const Login = ({ onLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Your authentication logic can be added here
    // For simplicity, let's assume a successful login
    setIsLoggedIn(true);
    onLogin(); // Call the onLogin prop
  };

  if (isLoggedIn) {
    // Render Webpage component after successful login
    return <Webpage />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', backgroundColor: 'white', paddingBottom: '60px' }}>

      {/* Welcome Message */}
      <div style={{ textAlign: 'center', marginBottom: '30px', fontSize: '0.5em', border: '2px solid #D3D3D3', padding: '10px', fontFamily: 'Arial, sans-serif', background: 'ffffff' }}>
        <br />
        <h1>Optimizing Wellness </h1>
        <p>The Intersection of Health and Nutrition</p>
        
        <p>
          
Health and nutrition are interconnected aspects of overall well-being, with a balanced diet providing essential nutrients for optimal bodily functions.o nutritious foods are vital for improving public health outcomes.
        </p>
      </div>

      {/* Image Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <img src="https://media.istockphoto.com/id/1204583112/photo/nutritionist-is-consulting-the-patient-about-healthy-diet-with-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=9xqlMsfAvyJ_rbWXmICrJgFAIalLhPe-7uUehX3wdnk=" alt="Image 1" style={{ width: '30%',marginRight: '10px' }} />
        <img src="https://www.julienutrition.com/wp-content/uploads/2021/10/nutrition-consultant-JM-Nutrition.jpg" alt="Image 2" style={{ width: '30%', marginRight: '10px' }} />
        <img src="https://dietskootindia.com/images/portfolio/diet.jpg" alt="Image 3" style={{ width: '30%' }} />
      </div>

      {/* Side-by-side Boxes with Space */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginBottom: '30px' }}>
        {/* Box 1 - What is Nutrition? */}
        <div style={{ border: '2px solid #D3D3D3', padding: '20px', backgroundColor: 'ffffff', width: '100%', outline: '1px solid #666666' }}>
          <h2>Health and Nutrition in Detail?</h2>
          <p>
            According to Merriam-webster, nutrition is “the act or process of nourishing or being nourished. The sum of the processes by which an animal or plant takes in and utilizes food substances.”
          </p>
          <p>
            Proteins, carbohydrates, fat, vitamins, minerals, and electrolytes are essential nutrients. Typically, 85% of daily energy usage comes from fat and carbohydrates and 15% from protein.
          </p>
        </div>

        {/* Space */}
        <div style={{ width: '20%' }}></div>
        <br />
        <br />

        {/* Box 2 - Benefits of Nutrition */}
        <div style={{ border: '2px solid #D3D3D3', padding: '20px', backgroundColor: 'ffffff', width: '90%', outline: '1px solid #666666' }}>
          <h2>Advantages of Health and Nutrition</h2>
          <p>
          Healthy heart<br />
          Reduced cancer risk<br />
          Better mood<br />
         
          </p>
        </div>
      </div>


<div style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5em', border: '2px solid #D3D3D3', width: '98%', padding: '10px', fontFamily: 'Arial, sans-serif', background: 'ffffff' }}>
<h1>Why Choose NutriHub For Online Nutritionist Consultation?</h1>
<p>
NutriHub is providing the best nutritionist from various cities of India. <br></br>

We offer the continual delivery of superior customer support while simultaneously providing industry-leading customer satisfaction. <br></br>
<br />
Your data(such as medical reports, prescriptions etc.) are well kept and safe,<br></br> and we will also send your reports on your mail, which makes it very easy for our clients to download required information.
</p>
</div>      

      {/* Login Box */}
<div style={{ width: '80%',width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#ffffff' }}>
  <div style={{ width: '300px', padding: '20px', border: '1px solid #D3D3D3', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(230, 230, 250, 0.8)', marginBottom: '30px' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.5em' }}>Login</h2>
    <form onSubmit={handleLogin}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
        <input type="text" id="username" name="username" style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #666666' }} />
      </div>
      <div style={{ marginBottom: '0px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
        <input type="password" id="password" name="password" style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #666666' }} />
      </div>
      <button type="submit" style={{ width: '100%', padding: '10px', background: '#2196f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Login
      </button>
    </form>
    <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.8em' }}>
      <p>New user? <a href="/register">Register</a></p>
    </div>
    <br></br>
  <br></br>
  <br></br>
  </div>
</div>
<br></br>
<br></br>

</div>
  );
};

export default Login;
