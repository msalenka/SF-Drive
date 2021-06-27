import React from "react";

import "../../styles/Main.css";

function Contacts() {
    
    return (

        <>
            <section className="contacts__frame is-gray">

                    <div className="content__container is-align-center">

                        <h2 className="contacts__frame-h2">Контакты</h2>

                        <div className="contacts__frame-wrapper">

                            <div className="contacts__frame-item"><span className="email-and-tel">Электронная почта</span> <br/><a className="contacts-link" href="mailto:drive@skillfactory.com">drive@skillfactory.com</a></div>

                            <div className="contacts__frame-item2 is-desktop">
                                <svg width="1" height="62" viewBox="0 0 1 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="1" height="62" fill="#C8C8CF" />
                                </svg>

                            </div>

                            <div className="contacts__frame-item3"><span className="email-and-tel">Телефон</span><br/><a className="contacts-link" href="tel:79121234567">7 912 123-45-67</a></div>
                    

                        </div>

                    </div>

            </section>
            
        </>
    )
}

export default Contacts;