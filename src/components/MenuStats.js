import React, { useState } from 'react'

function MenuStats({menuRecipes}) {

    return (
        <div>
            <p>Menu must consist of: </p>
            <p>2 vegan dishes</p>
            <p>2 not-vegan dishes</p>
            <p>Average Health Score: {getAverageHealthScore(menuRecipes)}</p>
            <p>Total price: ${getTotalPrice(menuRecipes)}</p>
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

export default MenuStats