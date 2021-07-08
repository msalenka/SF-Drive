import React from "react";

import "../../styles/Reg.css"

function Info () {
    return (
        <>
            <h2 className="info-title">Информация о вас</h2>


            <div className="input-wrapper">
                <label className="username-label" htmlFor="userName">ФИО</label>
                <input className="username-input" id="userName" placeholder="ФИО полностью"></input>
            </div>
            <div className="input-wrapper">
                <label className="birthday-label" htmlFor="birthday">Дата рождения</label>
                <input className="birthday-input" id="birthday" placeholder="01.01.1970" type="date"></input>
            </div>

            <div className="input-wrapper">
                <label className="email-label" htmlFor="email">Электронная почта</label>
                <input className="email-input" id="email" placeholder="mail@example.com"></input>
            </div>

            <div className="input-wrapper">
                <label className="number-label" htmlFor="number">Телефон</label>
                <input className="number-input" id="number" placeholder="+7 900 000-00-00"></input>
            </div>

        </>
    )
}

export default Info;