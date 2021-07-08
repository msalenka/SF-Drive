import React from "react";

function DriverLic () {
    return (
        <>
            <h2 className="block-title">Водительское удостоверение</h2>


            <div className="input-wrapper">
                <label className="passport-license-number-label" htmlFor="licNumber">Серия и номер</label>
                <input className="passport-license-number-input" id="licNumber" placeholder="0000 000000"></input>
            </div>
            <div className="input-wrapper">
                <label className="passport-license-date-label" htmlFor="licDate">Дата выдачи</label>
                <input className="passport-license-date-input" id="licDate" placeholder="01.01.1970" type="date"></input>
            </div>
        
        
        </>
    )
}

export default DriverLic;