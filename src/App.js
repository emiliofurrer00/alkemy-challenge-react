import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

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
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
