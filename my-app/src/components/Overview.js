import React from 'react';
import arrow from "../assets/arrow.png"
import img1 from "../assets/img_mobile_overview.png"
import img2 from "../assets/languages_configure.png"
import img3 from "../assets/configure_mobile.png"
const Overview = ({pageType}) => {
    return (
        <section id="overview" className="overview">
            <div className="container">
                <div className="text">
                    <h1>OVERVIEW</h1>
                    <h2 className={`${pageType=== 'mobile' ? 'h2_60':'h2_50'}`}>
                        {pageType === 'mobile'
                            ? 'iOS & Android application for' // Tekst dla 'mobile'
                            : 'Central Management System - web application for' }
                       <span> {pageType === 'mobile'
                           ? 'place visitors' // Tekst dla 'mobile'
                           : 'place staff' }</span></h2>
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
                        <h1>           {pageType === 'mobile'
                            ? 'Be connected with your favourite places' // Tekst dla 'mobile'
                            : 'Create your own interactive place in our system' }</h1>
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
                            <img className="description_text_arrow_img" src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className={`description_text_img_container ${pageType=== 'mobile' ? 'mobile_page_img_container':''}`}>
                        <img className="description_text_img desktop" src={pageType=== 'mobile' ? img3:img2} alt=""/>
                        <div className={`beffor_desktop ${pageType=== 'mobile' ? 'mobile_page':''}`}></div>

                    </div>
                </div>
            </div>
        </section>
);
};

export default Overview;
