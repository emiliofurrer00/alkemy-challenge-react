import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
//Components
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

import './App.css';


function App() {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const savedToken = localStorage.getItem('token');
    if (savedToken){
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className="App">
      <Header status={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/recipes/:recipeId' element={<RecipeDetails />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
