import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './Footer.css';

function Footer(){
    return(
        <footer>
            <a href="https://www.linkedin.com/in/emiliofurrer00/" target="_blank"><AiFillGithub className="icon" /></a>
            @emiliofurrer
            <a href="https://github.com/emiliofurrer00" target="_blank"><AiFillLinkedin className="icon" /></a>
        </footer>
    )
}

export default Footer;