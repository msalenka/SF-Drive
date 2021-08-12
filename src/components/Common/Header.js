import React, { useState } from "react";
import Auth from "../Autorization/Auth";

import "../../styles/Header.css"
import "../../styles/Auth.css"
import "../../styles/ResetPass.css"

function Header() {

    const [authActive, setAuthActive] = useState(false);
    const [resetActive, setResetActive] = useState (false);
    
    return (
        <>

            <header className="header">
                
                <div className="header__frame-left">
                    <img src={"src/assets/img/Logo.jpg"} alt="Logotype SkillDrive" aria-label="Больше информации о SkillDrive можно найти здесь" target="_blank" className="logo_link" />
                </div>

                <div className="header__frame-right">
                
                    <div>
                        <nav className="menu__frame is-desktop">
                            <a href="/" className="menu__frame-link is-active is-animated">О нас</a>
                            <a href="" className="menu__frame-link is-animated">Условия</a>
                            <a href="/faq" className="menu__frame-link is-animated">Частые вопросы</a>
                        </nav>
                    </div> 

                    <button  onClick={() => setAuthActive(true)} className="enter_btn is-animated is-desktop">Войти</button>


                </div>


            </header>
            <Auth active={authActive} setActive={setAuthActive}>
                
                <img onClick={() => setAuthActive(false)} className="auth_reset_close" src="src/assets/img/close_auth.svg"/>

                <div className="auth-img">
                    <img src={"src/assets/img/auth.svg"} alt="Authorization image"/>
                </div>
                <h2 className="auth-h2">Авторизация</h2>
                <div className="auth-input__wrapper">
                    <input className="auth-input" placeholder="Электронная почта"></input>
                    <input className="auth-input" placeholder="Пароль"></input>
                    <a className="auth-input-link" href="#" onClick={() => setResetActive(true)} >Забыли?</a>
                </div>

                <button className="auth-btn">Войти</button> 
                
                <img className="auth-line" src="src/assets/img/line.svg"/>
                
                <div className="auth-link__wrapper">
                    <a className="auth-link" href="/reg">Зарегистрироваться</a>
                </div>
            </Auth>
            
            <Auth active={resetActive} setActive={setResetActive}>

                <img onClick={() => setResetActive(false)} className="auth_reset_close" src="src/assets/img/close_auth.svg"/>  
                <h2 className="reset-h2">Восстановление пароля</h2>

                <div className="reset-input-wrapper">
                    <input className="reset-input" placeholder="Введите свою почту"></input>
                </div>
                
                <img className="reset-line" src="src/assets/img/line.svg"/>

                <button className="reset-btn">Получить новый пароль</button> 

            </Auth>



        </>

    )

}

export default Header;
