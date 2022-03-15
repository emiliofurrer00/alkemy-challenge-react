import { GiKnifeFork } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

function Header({status, setIsLoggedIn}){
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
    }

    return(
        <header>
            <div className="logo">
                <GiKnifeFork style={{width: 40, height: 40, margin: 10, color: 'rgb(53, 53, 53)'}} />
                <h1>Spoontastic</h1>                
            </div>
            {status && <div className="log-out-btn" onClick={handleLogout}><FiLogOut/>Log Out</div>}
        </header>
    )
}

export default Header;