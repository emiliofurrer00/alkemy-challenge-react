import axios from 'axios';
import apiKey from './apiKey';

export const searchRecipes = async(query) => {
    try{
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&addRecipeNutrition=true`, );
        console.log(response)
        return response        
    }
    catch(err){
        console.log('Ha habido un error con la petición a la api.')
        console.error(err);
    }
}