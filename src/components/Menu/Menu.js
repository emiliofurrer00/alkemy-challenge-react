import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import {MenuStats} from '../MenuStats'

function Menu({menuRecipes, handleRemoveFromMenu}) {
  return (
    <div className="menu-container">
      {menuRecipes.length < 1 && <h3>Start by adding dishes to your menu!</h3> || <MenuStats menuRecipes={menuRecipes}  />}
      <ul>
      {menuRecipes &&

              menuRecipes.map((result) => <li key={result.id}><RecipeCard recipe={result} handleRemoveFromMenu={handleRemoveFromMenu} isInMenu /></li>)}
              
      </ul>      
    </div>
  )
}

export default Menu