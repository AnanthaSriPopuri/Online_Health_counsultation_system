import React from 'react';
import Navbar from './Navbar'; // Adjust the import path based on your project structure
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Webpage = () => {
  return (
    <div style={{ paddingTop: '20px', textAlign: 'center' }}>
      <br></br>
      <br></br>
      <Navbar />
      <br></br>
      <br></br>
      {/* Add Accordion for the dropdown */}
      <Accordion style={{ marginTop: '20px', backgroundColor: '#F6E6FA' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Difference between Dietitian and Nutritionist</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nutritionists deal with general nutritional aims and behaviors, as opposed to dietitians,
            who are qualified to diagnose eating disorders and design diets to address particular medical diseases.
            Nutritionists are frequently employed in schools, hospitals, cafeterias, nursing homes, and athletic organizations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginTop: '20px', backgroundColor: '#F6E6FA' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">What Are Healthy Fats?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Unsaturated fats, such as monounsaturated and polyunsaturated fats, are considered healthy since they can reduce your risk of heart disease or stroke. Think olive, canola, peanut, and sunflower oils, as well as avocados and most nuts, for monounsaturated fats. Corn and soybean oils, as well as walnuts, sesame, pumpkin, and flax seeds, contain polyunsaturated fats. In salmon, mackerel, tuna, and trout, omega-3 fatty acids are a form of polyunsaturated fat. </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginTop: '20px', backgroundColor: '#F6E6FA' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">What Are Probiotics and Prebiotics?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Probiotics, which are tiny bacteria found in fermented foods such as yogurt, may help with digestion, regularity, and general immune health. Prebiotics can influence the formation of immune-boosting beneficial bacteria in your gastrointestinal system. </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginTop: '20px', backgroundColor: '#F6E6FA' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6"> How can health and nutrition consultancy benefit me?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our consultancy provides personalized guidance for weight management, dietary habits, and overall well-being, empowering you to achieve your wellness goals through expert advice and online accessibility. </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginTop: '20px', backgroundColor: '#F6E6FA' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">What sets Health and Nutrition apart?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Health and Nutrition stands out with a dedicated team of experienced nutritionists, offering comprehensive solutions tailored to individual needs. Whether managing weight or addressing specific health concerns, we provide expert guidance and support.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Webpage;
