import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_row">
                    <div className="footer_row_left">
                        <h1>PLACE TO</h1>
                        <p>BETA</p>
                    </div>
                    <p className="join">JOIN BETA NOW</p>
                </div>
                <div className="footer_row">
                    <div className="footer_row_col">
                        <h2>About project</h2>
                        <p>CMS</p>
                        <p>Mobile</p>
                        <p>Connectivity+</p>
                    </div>
                    <div className="footer_row_col">
                        <h2>Start Up</h2>
                        <p>Team</p>
                        <p>Collaboration</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <p className="footer_copy">© 2024 PlaceTo | All Rights Reserved.</p>
            </div>
        </footer>
            

    );
};

export default Footer;
