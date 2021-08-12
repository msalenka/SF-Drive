import React from "react";
import { ErrorMessage, useField } from "formik";

import "../../styles/Reg.css"

function Birhday ( {label, ...props} ) {
const [field, meta] = useField (props)
    return (

        <>
        <div className='input-wrapper'>
            <label className='birthday-label' htmlFor={field.name}>{label}</label>
            <input 
            className={`birthday-input calendar ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props}
            autoComplete='off'/>
        </div>
        <ErrorMessage name={field.name} component='div' className='error'/>
        </>
    )
}

export default Birhday;