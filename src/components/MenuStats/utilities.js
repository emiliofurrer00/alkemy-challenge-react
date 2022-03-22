export function getAverageHealthScore(arrayOfRecipes){
    const sum = arrayOfRecipes.reduce((acc, cv) => acc+ cv.healthScore, 0);
    const average = sum / arrayOfRecipes.length;
    return average.toFixed(2);
}

export function getTotalPrice(arrayOfRecipes){
    return arrayOfRecipes.reduce((acc, cv) => acc + cv.pricePerServing, 0).toFixed(2);
}

export function hasEnoughRecipesByDiet(arrayOfRecipes, diet){
    const dietCounter = {vegan: 0, notVegan: 0};     
    for (let recipe of arrayOfRecipes){
        const key = recipe.vegan ? 'vegan' : 'notVegan';
        dietCounter[key]++;
    }
    return dietCounter[diet] === 2     
}
