import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchRecipes } from '../api/axios';
import RecipeCard from './RecipeCard';

function Home(){
    const navigate = useNavigate();
    const [recipeSearch, setRecipeSearch] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token){
            console.log('Acceso no permitido. Redireccionando a /login...');
            navigate('/login');
        }
    }, []);

    async function handleSearch(){
        console.log(recipeSearch);
        const queryResults = await searchRecipes(recipeSearch);
        setResults(queryResults.data.results)
    }

    return (
        <div className="home-layout">
            <div className="search-bar">
                <input value={recipeSearch} onChange={(e) => setRecipeSearch(e.target.value)} type="text" placeholder="Search for a recipe"/>
                <button onClick={handleSearch}> Search</button>                
            </div>
            {results && 
            <ul>
                {results.map(result => <li><RecipeCard recipe={result}/></li>
            )}
            </ul>}
        </div>
    )
}

export default Home