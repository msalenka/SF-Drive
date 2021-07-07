import React from "react";

import "../../styles/Header.css"

function Header() {
    return (
        <>

            <header className="header">
                
                <div className="header__frame-left">
                    <img src={"src/assets/img/Logo.jpg"} alt="Logotype SkillDrive" aria-label="Больше информации о SkillDrive можно найти здесь" target="_blank" className="logo_link" />
                </div>

                <div className="header__frame-right">
                
                    <div>
                        <nav className="menu__frame is-desktop">
                            <a href="/" className="menu__frame-link is-active is-animated">О нас</a>
                            <a href="" className="menu__frame-link is-animated">Условия</a>
                            <a href="/faq" className="menu__frame-link is-animated">Частые вопросы</a>
                        </nav>
                    </div>

                    <button className="enter_btn is-animated is-desktop">Войти</button>


                </div>


            </header>

        </>

    )

}

export default Header;
