import React from 'react';
import img1 from "../assets/menu.svg";
import img2 from "../assets/cupon.png";
import img3 from "../assets/localization.svg";
import img4 from "../assets/star.png";

const Connectivity = ({pageType}) => {
    return (
        <section id="connectivity" className="connectivity">
            <div className="container">
                <div className="connectivity_text">
                    <h1>{pageType === 'mobile'
                        ? 'FEATURES'
                        : 'CONNECTIVITY+'}</h1>
                    {pageType === 'mobile'
                        ? <h2>General <span>Activities</span></h2>
                        :    <h2>Configurable <span>connectivity</span> tools</h2>}

                    <p>Vestibulum ipsum neque, congue in risus id, vulputate pretium ligula. Aliquam quis urna in nibh laoreet imperdiet. Donec at lacus cursus, pulvinar nunc quis, rhoncus nulla</p>
                    <p className="p_desktop">Vestibulum ipsum neque, congue in risus id, vulputate pretium ligula. Aliquam quis urna in nibh laoreet imperdiet. Donec at lacus cursus, pulvinar nunc quis, rhoncus nulla</p>
                    <button>ASK FOR DETAILS</button>
                </div>
                <div id="features" className="connectivity_cards">
                    <div className="connectivity_cards_card">
                        <div
                            className="svg red"
                            style={{
                                backgroundImage: `url(${img1})`,
                                backgroundSize: 'auto',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                        <h3>Menu card</h3>
                        <p>Vestibulum ipsum neque, congue in risus id, vulputate pretium ligula. Aliquam quis urna in nibh laoreet imperdiet.</p>
                    </div>
                    <div className="connectivity_cards_card">
                        <div
                            className="svg blue"
                            style={{
                                backgroundImage: `url(${img2})`,
                                backgroundSize: 'auto',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                        <h3>Cupons</h3>
                        <p>Vestibulum ipsum neque, congue in risus id, vulputate pretium ligula. Aliquam quis urna in nibh laoreet imperdiet.</p>
                    </div>
                    <div className="connectivity_cards_card">
                        <div
                            className="svg green"
                            style={{
                                backgroundImage: `url(${img3})`,
                                backgroundSize: 'auto',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                        <h3>Explore places</h3>
                        <p>Vestibulum ipsum neque, congue in risus id, vulputate pretium ligula. Aliquam quis urna in nibh laoreet imperdiet.</p>
                    </div>
                    <div className="connectivity_cards_card">
                        <div
                            className="svg purple"
                            style={{
                                backgroundImage: `url(${img4})`,
                                backgroundSize: 'auto',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                        <h3>Reviews</h3>
                        <p>Vestibulum ipsum neque, congue in risus id, vulputate pretium ligula. Aliquam quis urna in nibh laoreet imperdiet.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connectivity;
