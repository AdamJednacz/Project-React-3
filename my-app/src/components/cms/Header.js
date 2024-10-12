import React, {useState} from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header>
            <div className="container">
                <div className="logo">
            <p className="text">PLACE TO</p>
            <p className="element">CMS</p>
                </div>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleOpenMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <a className="menu_item">Overview</a>
                <a className="menu_item">Connectivity+</a>
                <a className="menu_item">Features</a>
                <a className="menu_item">Pricing</a>
                <a className="menu_item">Contact Us</a>
            </div>
            <div className={`buttons_container ${isOpen ? 'open' : ''}`}>
                <button className="join ">JOIN BETA</button>

            </div>
            </div>
        </header>
    );
};

export default Header;
