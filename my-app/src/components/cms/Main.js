import React from 'react';
import img1 from "../../assets/languages_configure.png"

import img3 from "../../assets/iphone_14.png"

const Main = () => {
    return (
        <main>
            <div className="container">
                <div className="text">
                    <h1>
                        Taking to your<br/> customers in a <br/>better place
                    </h1>

                    <div className="line">
                        <div className="line_piece"></div>
                        <div className="line_piece"></div>
                        <div className="line_piece"></div>
                        <div className="line_piece"></div>
                    </div>

                    <p>
                        Make your place customer-friendly,
                        use our connectivity solution
                    </p>
                    <div className="buttons_container">
                        <button>JOIN WAITING LIST</button>
                        <button> FILL AN SURVEY</button>
                    </div>
                </div>

                <div className="img_container">
                    <img className="img3" src={img3} alt=""/>
                    <img className="img1" src={img1} alt=""/>

                </div>
            </div>
        </main>
    );
};

export default Main;
