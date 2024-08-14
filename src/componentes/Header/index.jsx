
import React from 'react'; 
import Github from '../../images/github.png'; 
import Vercel from '../../images/vercel-logo2.png';
import Linkedin from '../../images/linkedin.png';

const Header = () => {
    return (
        <div className="header-contenedor">
            <h1>Hola! Soy Jeannette Saldaña Bolfeta</h1>
            <AppLink /> {/* Renderiza el componente AppLink aquí */}
        </div>
    );
}

const AppLink = () => {
    return (
        <div className='contenedor-imagenes'>
            <a href="https://github.com/jean850727" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="GitHub" style={{ width: '60px', height: '60px' }} />
            </a>
            <a href="https://vercel.com/jeannette-saldana-bolfetas-projects" target="_blank" rel="noopener noreferrer">
                <img src={Vercel} alt="Vercel" style={{ width: '60px', height: '60px' }} />
            </a>
            <a href="https://www.linkedin.com/in/jeannette-salda%C3%B1a-bolfeta/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" style={{ width: '60px', height: '60px' }} />
            </a>
        </div>
    );
}

export default Header;
