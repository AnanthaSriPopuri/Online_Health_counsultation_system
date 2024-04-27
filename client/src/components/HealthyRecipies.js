import React, { useState } from 'react';

const HealthyRecipies = () => {
  // State to manage dropdown visibility
  const [showDropdown, setShowDropdown] = useState(null);

  // Data for vegetable recipes
  const vegetableRecipes = [
    {
      heading: 'Broccoli Salad',
      ingredients: [
        'Broccoli florets',
        'Red onion (thinly sliced)',
        'Cherry tomatoes (halved)',
        'Feta cheese (crumbled)',
        'Sunflower seeds',
        'Olive oil',
        'Lemon juice',
        'Salt and pepper to taste',
      ],
      procedure: `Blanch the broccoli florets in boiling water for 2 minutes, then immediately transfer them to an ice bath to cool. In a bowl, combine the blanched broccoli with thinly sliced red onion, halved cherry tomatoes, crumbled feta cheese, and sunflower seeds. In a small bowl, whisk together olive oil and lemon juice to create the dressing. Pour the dressing over the salad and toss until all ingredients are well coated. Season with salt and pepper to taste. Refrigerate for at least 30 minutes before serving to allow the flavors to meld.`,
    },
    {
      heading: 'Spinach and Feta Stuffed Peppers',
      ingredients: [
        'Bell peppers',
        'Spinach (chopped)',
        'Feta cheese (crumbled)',
        'Quinoa (cooked)',
        'Garlic (minced)',
        'Olive oil',
        'Salt and pepper to taste',
      ],
      procedure: `Preheat the oven to 375°F. Cut the bell peppers in half and remove the seeds. In a bowl, mix together chopped spinach, crumbled feta cheese, cooked quinoa, minced garlic, olive oil, salt, and pepper. Stuff each pepper half with the mixture. Place the stuffed peppers on a baking sheet and bake for 20-25 minutes or until the peppers are tender. Serve warm.`,
    },
    {
      heading: 'Zucchini Noodles with Pesto',
      ingredients: [
        'Zucchini',
        'Cherry tomatoes (sliced)',
        'Pesto sauce',
        'Parmesan cheese (grated)',
        'Pine nuts',
        'Salt and pepper to taste',
      ],
      procedure: `Using a spiralizer, create zucchini noodles. In a pan, sauté the zucchini noodles with sliced cherry tomatoes until they are tender. Mix in pesto sauce and continue to cook for another 2-3 minutes. Remove from heat and garnish with grated Parmesan cheese and pine nuts. Season with salt and pepper to taste. Serve immediately.`,
    },
    {
      heading: 'Sweet Potato and Chickpea Curry',
      ingredients: [
        'Sweet potatoes (peeled and diced)',
        'Chickpeas (cooked)',
        'Coconut milk',
        'Curry powder',
        'Turmeric',
        'Ginger (minced)',
        'Garlic (minced)',
        'Salt and pepper to taste',
      ],
      procedure: `In a large pot, sauté minced ginger and garlic. Add diced sweet potatoes, cooked chickpeas, curry powder, turmeric, salt, and pepper. Pour in coconut milk and simmer until the sweet potatoes are tender. Adjust seasoning as needed. Serve the curry over rice or quinoa.`,
    },
  ];

  // Function to handle dropdown visibility
  const handleDropdownToggle = (index) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
    <h2>Healthy Vegetable Recipes</h2>
  </div>
      {vegetableRecipes.map((recipe, index) => (
        <div
          key={index}
          style={{
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            backgroundColor: '#e6e6fa', // Lavender color
            position: 'relative',
          }}
        >
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => handleDropdownToggle(index)}
          >
            <h3>{recipe.heading}</h3>
          </div>
          {showDropdown === index && (
            <div style={{ marginTop: '10px' }}>
              <h4>Ingredients:</h4>
              <ul>
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <h4>Procedure:</h4>
              <p>{recipe.procedure}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HealthyRecipies;
