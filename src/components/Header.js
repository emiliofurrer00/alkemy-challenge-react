import { GiKnifeFork } from 'react-icons/gi'

function Header(){
    return(
        <header>
            <GiKnifeFork style={{width: 40, height: 40, margin: 10, color: 'rgb(53, 53, 53)'}} />
            <h1>Spoontastic</h1>
        </header>
    )
}

export default Header;