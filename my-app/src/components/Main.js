import React from 'react';
import img1 from "../assets/languages_configure.png"
import img2 from "../assets/iphone_16.png"

import img3 from "../assets/iphone_14.png"

const Main = ({pageType}) => {
    return (
        <main>
            <div className="container">
                <div className="text">
                    <h1>
                        <h1>
                            {pageType === 'mobile'
                                ? 'Be connected' // Tekst dla 'mobile'
                                : 'Taking to your'}
                            <br/>
                            {pageType === 'mobile'
                                ? 'with our mobile' // Tekst dla 'mobile'
                                : 'customers in a'}
                            <br/>
                            {pageType === 'mobile'
                                ? 'application' // Tekst dla 'mobile'
                                : 'better place'}
                        </h1>
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

                <div className={`img_container ${pageType=== 'mobile' ? 'no_before':''}`}>
                    <img className="img3" src={img3} alt=""/>
                    <img className={` ${pageType=== 'mobile' ? 'img2':'img1'}`} src={pageType=== 'mobile' ? img2:img1} alt=""/>

                </div>
            </div>
        </main>
    );
};

export default Main;
