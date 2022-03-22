import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchRecipes } from '../../api/axios';
import swal from '@sweetalert/with-react';
import RecipeCard from '../RecipeCard/RecipeCard';
import Menu from '../Menu/Menu';

function Home(){
    const navigate = useNavigate();
    const [recipeSearch, setRecipeSearch] = useState("");
    const [results, setResults] = useState([]);

    const [menuRecipes, setMenuRecipes] = useState([]);

    //Checks for a token in localStorage. If there isn't one, redirects user to /login.
    //Could be improved as explained in Alkemy Academy's skill up, so no rendering would take place before the token validation
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token){
            console.log('Acceso no permitido. Redireccionando a /login...');
            navigate('/login');
        }
    }, []);

    // These two functions handle adding and removing recipes from the results list and menu.
    // Must refactor

    function handleAddToMenu(newRecipe){
        //Checking if menu conditions are met;
        const dietCounter = {vegan: 0, notVegan: 0};     
        for (let recipe of menuRecipes){
            const key = recipe.vegan ? 'vegan' : 'notVegan';
            dietCounter[key]++;
        }       
        console.log(dietCounter);    

        if (menuRecipes.length === 4){
            return swal('Reached maximum recipes limit!');
        }
        if (dietCounter.vegan === 2 && newRecipe.vegan){
            return swal('Reached maximum vegan recipes limit! \n Try adding more non-vegan dishes');
        }

        if (dietCounter.notVegan === 2 && !newRecipe.vegan){
            return swal('Reached maximum non-vegan recipes limit! \n Try adding more vegan dishes');
        }

        setMenuRecipes([...menuRecipes, newRecipe]);
        setResults(prev => [...prev.filter(prevResult => prevResult.title !== newRecipe.title)])
    }
    function handleRemoveFromMenu(recipeToRemove){
        setResults([...results, recipeToRemove]);
        setMenuRecipes(prev => [...prev.filter(prevResult => prevResult.title !== recipeToRemove.title)])
    }

    //function handler for API complex search query.
    //Could expand it with more user-selectable parameters like number of results or search given an specific diet
    async function handleSearch(){
        console.log(recipeSearch);
        const queryResults = await searchRecipes(recipeSearch);
        setResults(queryResults.data.results)
    }

    return (
        <div className="home-layout">
            <Menu menuRecipes={menuRecipes} handleRemoveFromMenu={handleRemoveFromMenu}/>
            <div className="search-bar">
                <input minLength="2" value={recipeSearch} onChange={(e) => setRecipeSearch(e.target.value)} type="text" placeholder="Search for a recipe..."/>
                <button disabled={recipeSearch.length < 2} onClick={handleSearch}> Search</button>                
            </div>
            {results && 
            <ul className="results-list">
                {results.map((result, index) => <li key={index}><RecipeCard recipe={result} handleAddToMenu={handleAddToMenu} /></li>
            )}
            </ul>}
        </div>
    )
}

export default Home