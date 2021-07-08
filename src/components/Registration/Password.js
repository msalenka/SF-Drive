import React from "react";

function Password () {
    return (
        <>
            <h2 className="block-title">Пароль</h2>


            <div className="input-wrapper">
                <label className="password-label" htmlFor="password">Придумайте пароль</label>
                <input className="password-input" id="password" placeholder="•••••••••••••••••••" type="password"></input>
            </div>
            <div className="input-wrapper">
                <label className="password-repeat-label" htmlFor="passwordRepeat">Повторите пароль</label>
                <input className="password-repeat-input" id="passwordRepeat" placeholder="•••••••••••••••••••" type="password"></input>
            </div>
        </>
    )
}

export default Password;