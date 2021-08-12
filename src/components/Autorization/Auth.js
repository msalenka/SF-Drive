import React from "react";

import "../../styles/Auth.css";


function Auth ({ active, setActive, children }) {
    return (

        <div className={active? "auth_window activated" : "auth_window"} onClick={() => setActive(false)}>
            <div className={active? "auth_window-content activated" : "auth_window-content"} onClick={e => e.stopPropagation ()}>
                {children}
            </div>
        </div>

)}


export default Auth;