import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Home(){
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token){
            console.log('Acceso no permitido. Redireccionando a /login...');
            navigate('/login');
        }
    }, []);

    return (
        <>
            <h1>Home</h1>
        </>
    )
}

export default Home