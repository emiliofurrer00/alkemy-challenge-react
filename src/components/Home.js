import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchRecipes } from '../api/axios';
import RecipeCard from './RecipeCard';
import Menu from './Menu';

function Home(){
    const navigate = useNavigate();
    const [recipeSearch, setRecipeSearch] = useState("");
    const [results, setResults] = useState([]);

    const [menuRecipes, setMenuRecipes] = useState([]);

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
        setMenuRecipes([...menuRecipes, newRecipe]);
        setResults(prev => [...prev.filter(prevResult => prevResult.title !== newRecipe.title)])
    }
    function handleRemoveFromMenu(recipeToRemove){
        setResults([...results, recipeToRemove]);
        setMenuRecipes(prev => [...prev.filter(prevResult => prevResult.title !== recipeToRemove.title)])
    }


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
            <ul>
                {results.map(result => <li><RecipeCard recipe={result} handleAddToMenu={handleAddToMenu} /></li>
            )}
            </ul>}
        </div>
    )
}

export default Home