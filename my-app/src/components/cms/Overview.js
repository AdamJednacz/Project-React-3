import React from 'react';
import arrow from "../../assets/arrow.png"
import img1 from "../../assets/img_mobile_overview.png"
import img2 from "../../assets/languages_configure.png"

const Overview = () => {
    return (
        <section id="overview" className="overview">
            <div className="container">
                <div className="text">
                    <h1>OVERVIEW</h1>
                    <h2>Central Management System
                        - web application for <span>place stuff</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur ex sed sapien facilisis
                        egestas.</p>
                </div>
                <div className="buttons">
                    <button>GENERAL</button>
                    <button>SEARCHING</button>
                    <button>CONNECTION</button>
                    <button>BENEFITS</button>
                </div>
                <div className="description">
                    <div className="description_text">
                        <h1>Create your own interactive place in our system</h1>
                        <p>Morbi dignissim ultrices purus in auctor. Suspendisse est erat, tincidunt vitae tellus sit
                            amet, commodo luctus odio. Quisque posuere viverra malesuada. Pellentesque at sapien a elit
                            feugiat pulvinar. Donec vitae hendrerit mauris. Pellentesque ligula felis, ullamcorper at
                            malesuada id, posuere a massa. Vestibulum ipsum neque, congue in risus id, vulputate pretium
                            ligula. Aliquam quis urna in nibh laoreet imperdiet. Donec at lacus cursus, pulvinar nunc
                            quis, rhoncus nulla.</p>
                        <div className="description_text_img_container">
                            <img className="description_text_img_container_img mobile" src={img1} alt=""/>
                            <div className="beffor"></div>
                        </div>
                        <div className="description_text_arrow">
                            <p>READ MORE</p>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className="description_text_img_container">
                        <img className="description_text_img desktop" src={img2} alt=""/>
                        <div className="beffor_desktop"></div>

                    </div>
                </div>
            </div>
        </section>
);
};

export default Overview;
