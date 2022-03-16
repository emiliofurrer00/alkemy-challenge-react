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

    function handleAddToMenu(newRecipe){
        setMenuRecipes([...menuRecipes, newRecipe]);
        setResults(prev => [...prev.filter(prevResult => prevResult.title !== newRecipe.title)])
    }

    async function handleSearch(){
        console.log(recipeSearch);
        const queryResults = await searchRecipes(recipeSearch);
        setResults(queryResults.data.results)
    }

    return (
        <div className="home-layout">
            <Menu menuRecipes={menuRecipes} />
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