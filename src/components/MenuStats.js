import React, { useState } from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { MdOutlinePriceChange } from 'react-icons/md';

function MenuStats({menuRecipes}) {

    return (
        <div className="menu-stats-container">
            <h3>MENU</h3>
            <p style={{color: hasEnoughRecipesByDiet(menuRecipes, 'vegan') ? 'green' : 'red'}}>🥗 {hasEnoughRecipesByDiet(menuRecipes, 'vegan') ? 'Has' : "Does not have"} 2 vegan dishes</p>
            <p style={{color: hasEnoughRecipesByDiet(menuRecipes, 'notVegan') ? 'green' : 'red'}}>🍗 {hasEnoughRecipesByDiet(menuRecipes, 'notVegan') ? 'Has' : "Does not have"} 2 not-vegan dishes</p>
            <p><FaHandHoldingHeart/> Average Health Score: <strong>{getAverageHealthScore(menuRecipes)}</strong></p>
            <p><MdOutlinePriceChange/> Total price: <strong>${getTotalPrice(menuRecipes)}</strong></p>
        </div>
    )
}


//Utility functions for stats calculations

function getAverageHealthScore(arrayOfRecipes){
    const sum = arrayOfRecipes.reduce((acc, cv) => acc+ cv.healthScore, 0);
    const average = sum / arrayOfRecipes.length;
    return average.toFixed(2);
}

function getTotalPrice(arrayOfRecipes){
    return arrayOfRecipes.reduce((acc, cv) => acc + cv.pricePerServing, 0).toFixed(2);
}

function hasEnoughRecipesByDiet(arrayOfRecipes, diet){
    const dietCounter = {vegan: 0, notVegan: 0};     
    for (let recipe of arrayOfRecipes){
        const key = recipe.vegan ? 'vegan' : 'notVegan';
        dietCounter[key]++;
    }
    return dietCounter[diet] === 2     
}

export default MenuStats