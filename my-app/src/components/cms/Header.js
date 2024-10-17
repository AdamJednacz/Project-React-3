import React, { useState} from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleCloseMenu = () => {
        setIsOpen(false); // Zamknij menu po kliknięciu linka
    };

    return (
        <header>
            <div className="container">
                <p className="text">PLACE TO</p>
                <p className="element">CMS</p>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleOpenMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <Link to="overview" smooth={true} duration={500} onClick={handleCloseMenu}
                          className="menu_item">Overview</Link>
                    <Link to="connectivity" smooth={true} duration={500} onClick={handleCloseMenu}
                          className="menu_item">Connectivity+</Link>
                    <Link to="features" smooth={true} duration={500} onClick={handleCloseMenu}
                          className="menu_item">Features</Link>
                    <Link to="pricing" smooth={true} duration={500} onClick={handleCloseMenu}
                          className="menu_item">Pricing</Link>
                    <Link to="contact" smooth={true} duration={500} onClick={handleCloseMenu} className="menu_item">Contact
                        Us</Link>

                </div>
                <button className={`join ${isOpen ? 'open' : ''}`}>JOIN BETA</button>

            </div>
        </header>
    )
};
export default Header;
