import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
//Components
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer'

import './App.css';


function App() {
  const [token, setToken] = useState('');

  useEffect(()=>{
    const savedToken = localStorage.getItem('token');
    if (savedToken){
      setToken(token)
    }
  }, [])

  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
