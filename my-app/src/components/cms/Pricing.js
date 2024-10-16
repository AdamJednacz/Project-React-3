import React from 'react';
import img from "../../assets/gold_star.png"

const Pricing = () => {


    return (
        <section className="pricing">
            <div className="container">
                <div className="pricing_text">
                    <h1>PRICING</h1>
                    <h2>Projected package prices</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur ex sed sapien facilisis
                        egestas.</p>
                </div>
                <div className="pricing_cards">
                    <div className="card">
                        <h3>Starter Plan</h3>
                        <span className="starter_span">$0</span>
                        <ul>
                            <li>1 Place</li>
                            <li>Base Statistics</li>
                            <li>Freemium modules: coupons, menu card</li>
                            <li>NFC & QR Codes</li>
                        </ul>
                        <button className="starter_button">Ask for details</button>
                    </div>
                    <div className="card">
                        <div
                            className="star"
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'auto',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                        <h3>Regular Plan</h3>
                        <p className="card_price regular_card_price "><span className="regular_span">$59</span>/month</p>
                        <p className="annotation">ALL STARTED FEATURES</p>

                        <p className="regular_p">Vestibulum ipsum neque, congue in risus id, vulputate pretium ligula.
                            Aliquam quis urna in
                            nibh laoreet imperdiet.</p>
                        <p className="regular_p">Vestibulum ipsum neque, congue in risus id, vulputate pretium ligula.
                            Aliquam quis urna in
                            nibh laoreet imperdiet.</p>

                        <button className="regular_button">Ask for details</button>
                    </div>
                    <div className="card">
                        <h3>Premium</h3>
                        <p className="card_price"><span>$120</span>/month</p>
                        <p className="annotation ann2">ALL REGULAR FEATURES</p>
                        <ul>
                            <li>Up to 10 push notifications per week</li>
                            <li>Up to 3 places</li>
                            <li>Advanced statistics</li>
                            <li>Up to 5 languages</li>
                        </ul>
                        <button className="premium_button">Ask for details</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
