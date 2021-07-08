import React from "react";

function Passport () {
    return (
        <>
            <h2 className="block-title">Паспорт</h2>


            <div className="input-wrapper">
                <label className="passport-license-number-label" htmlFor="passNumber">Серия и номер</label>
                <input className="passport-license-number-input" id="passNumber" placeholder="0000 000000"></input>
            </div>
            <div className="input-wrapper">
                <label className="passport-license-date-label" htmlFor="passDate">Дата выдачи</label>
                <input className="passport-license-date-input" id="passDate" placeholder="01.01.1970" type="date"></input>
            </div>

            <div className="input-wrapper">
                <label className="passport-emit-label" htmlFor="passEmit">Кем выдан</label>
                <input className="passport-emit-input" id="passEmit" placeholder="Название органа выдавшего паспорт"></input>
            </div>

            <div className="input-wrapper">
                <label className="passport-emit-number-label" htmlFor="passEmitNum">Код подразделения</label>
                <input className="passport-emit-number-input" id="passEmitNum" placeholder="000-000"></input>
            </div>

        </>
    )
}

export default Passport;