import React, { useState } from 'react'
import { FaHandHoldingHeart, FaCookieBite } from 'react-icons/fa';
import { GiForkKnifeSpoon, GiCookingPot } from 'react-icons/gi';
import { MdOutlinePriceChange } from 'react-icons/md';
import { hasEnoughRecipesByDiet, getAverageHealthScore, getTotalPrice } from './utilities';


function MenuStats({menuRecipes}) {

    return (
        <div className="menu-stats-container">
            {/* <GiCookingPot style={{position: 'relative', left: -100}}/>
            <FaCookieBite /> */}
            <h3>MENU</h3>
            <p style={{color: hasEnoughRecipesByDiet(menuRecipes, 'vegan') ? 'green' : 'red'}}>
                {hasEnoughRecipesByDiet(menuRecipes, 'vegan') ? '🥗 Has' : "❌ Does not have"} 2 vegan dishes
            </p>
            <p style={{color: hasEnoughRecipesByDiet(menuRecipes, 'notVegan') ? 'green' : 'red'}}>
                {hasEnoughRecipesByDiet(menuRecipes, 'notVegan') ? '🍗 Has' : "❌ Does not have"} 2 not-vegan dishes
            </p>
            <p><FaHandHoldingHeart/> Average Health Score: <strong>{getAverageHealthScore(menuRecipes)}</strong></p>
            <p><MdOutlinePriceChange/> Total price: <strong>${getTotalPrice(menuRecipes)}</strong></p>
        </div>
    )
}


//Utility functions for stats calculations

export default MenuStats