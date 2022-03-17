import React from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa';
import { GiForkKnifeSpoon } from 'react-icons/gi';

function RecipeCard({recipe, handleAddToMenu, handleRemoveFromMenu, isInMenu = false}) {
  
  const handleClick = isInMenu ? handleRemoveFromMenu : handleAddToMenu;

  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title + "image"}/>
      <p><FaHandHoldingHeart/> Health Score: {recipe.healthScore}</p>
      <p><GiForkKnifeSpoon /> {recipe.vegan ? "Vegan" : "Not vegan"}</p>
      <button className={isInMenu ? "remove-btn" : "add-btn"} onClick={() => handleClick(recipe)}>{isInMenu ? "Remove recipe" : "Add recipe" }</button>
    </div>
  )
}

export default RecipeCard