import React from 'react';
import img1 from "../../assets/hand.svg"

import img2 from "../../assets/phones.jpg"
const Visitors = () => {
    return (
        <section className="visitors">
            <div className="container">
                <div className="text">
                <img src={img1} alt=""/>
                <h1>Mobile App for place visitors</h1>
                <p>Morbi dignissim ultrices purus in auctor. Suspendisse est erat, tincidunt vitae tellus sit amet, commodo luctus odio. Quisque posuere viverra malesuada.</p>
                <button>KNOW MORE</button>
                </div>
                <img className="phones" src={img2} alt=""/>
            </div>
        </section>
    );
};

export default Visitors;
