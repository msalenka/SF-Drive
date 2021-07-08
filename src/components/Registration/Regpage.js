import React from "react";

import Info from "./Info"
import Passport from "./Passport";
import DriverLic from "./DriverLic";
import Password from "./Password";
import FooterReg from "./FooterReg";

import "../../styles/Reg.css"


function Regpage () {
    return (
        
        <div >
            <p className="reg-step">Шаг 1 из 3</p>
            <h1 className="page-title">Расскажите о себе</h1>
            <Info/>
            <Passport/>
            <DriverLic/>
            <Password/>
            <FooterReg/>
        </div>


    )
}

export default Regpage;