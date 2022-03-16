import React from 'react'
import RecipeCard from './RecipeCard'

function Menu({menuRecipes}) {
  return (
    <ul>
    {menuRecipes &&
        
            menuRecipes.map(result => <li><RecipeCard recipe={result} /></li>)}
        
    </ul>
  )
}

export default Menu