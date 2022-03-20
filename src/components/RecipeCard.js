import React from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { MdOutlinePriceChange } from 'react-icons/md';

function RecipeCard({recipe, handleAddToMenu, handleRemoveFromMenu, isInMenu = false}) {
  
  const handleClick = isInMenu ? handleRemoveFromMenu : handleAddToMenu;

  return (
    <section className="recipe-card">
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title + "image"}/>
      <div className="recipe-stats">
        <p><FaHandHoldingHeart/> Health Score: {recipe.healthScore}</p>
        <p><GiForkKnifeSpoon /> {recipe.vegan ? "Vegan" : "Not vegan"}</p>    
        <p><MdOutlinePriceChange/> ${recipe.pricePerServing} per serving</p>    
      </div>
      <div className="recipe-actions">
        <button className={isInMenu ? "remove-btn" : "add-btn"} onClick={() => handleClick(recipe)}>{isInMenu ? "Remove" : "Add recipe" }</button>
        <button className="details-btn">Show Details</button>        
      </div>

    </section>
  )
}

export default RecipeCard