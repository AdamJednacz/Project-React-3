import React from 'react';

import img1 from "../../assets/phone_icon.png"
import img2 from "../../assets/mail_icon.png"
import img3 from "../../assets/localization_icon.png"


const ContactUs = () => {
    return (
        <section className="contact_us">
            <div className="container">
                <div className="contact_us_text">
                    <h1>CONTACT US</h1>
                    <h2>You need more information's ?</h2>
                    <span>Contact Us</span>
                    <div className="contact_us_text_data">
                        <div className="contact_us_text_data_card">
                                     <div
                            className="svg"
                            style={{
                                backgroundImage: `url(${img1})`,
                                backgroundSize: 'auto',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                            <div className="contact_us_text_data_card_text">
                                <p>Call Us</p>
                                <p>+48 123 456 789</p>
                            </div>
                        </div>
                        <div className="contact_us_text_data_card">
                                     <div
                            className="svg"
                            style={{
                                backgroundImage: `url(${img2})`,
                                backgroundSize: 'auto',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                            <div className="contact_us_text_data_card_text">
                                <p>E-mail</p>
                                <p>placeto@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact_us_text_data_card">
                                     <div
                            className="svg"
                            style={{
                                backgroundImage: `url(${img3})`,
                                backgroundSize: 'auto',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                            <div className="contact_us_text_data_card_text">
                                <p>Location</p>
                                <p>Ul. Kolorowa 19/5,Cracow</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="contact_us_form">
                    <div className="form_inputs">

                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="number" placeholder="Phone"/>
                        <input type="text" placeholder="Subject"/>
                    </div>
                    <textarea className="form_textarea" rows={8} cols={50} placeholder="How Can We Help You?"/>
                    <button>Send message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
