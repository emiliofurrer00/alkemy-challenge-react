import React from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa';
import { GiForkKnifeSpoon } from 'react-icons/gi';

function RecipeCard({recipe}) {
  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <img src={recipe.image}/>
      <p><FaHandHoldingHeart/> Health Score: {recipe.healthScore}</p>
      <p><GiForkKnifeSpoon /> {recipe.vegan ? "Vegan" : "Not vegan"}</p>
    </div>
  )
}

export default RecipeCard