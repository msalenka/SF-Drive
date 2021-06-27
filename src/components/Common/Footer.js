import React from "react";

import "../../styles/Footer.css"


function Footer() {
    return (
        <>
            
            <footer className="footer__frame">

                <div className="footer__frame-copyright">© SkillDrive Inc. 2020</div>

                <div className="footer__frame-icons">
                    <a href="https://vk.com/" className="icon-vk is-animated" target="_blank" rel="nofollow"></a>
                    <a href="https://www.instagram.com/" className="icon-instagram is-animated" target="_blank" rel="nofollow"></a>
                    <a href="https://www.facebook.com/" className="icon-facebook is-animated" target="_blank" rel="nofollow"></a>
                </div>

            </footer>


        </>
    )
}

export default Footer;