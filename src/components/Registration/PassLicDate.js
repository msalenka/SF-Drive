import React from "react";
import { ErrorMessage, useField } from "formik";

import "../../styles/Reg.css"

function PassLicDate ( {label, ...props} ) {
const [field, meta] = useField (props)

    return (

        <>
        <div className='input-wrapper'>
            <label className='passport-license-date-label' htmlFor={field.name}>{label}</label>
            <input 
            className={`passport-license-date-input calendar ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props}
            autoComplete='off'/>
        </div>
        <ErrorMessage name={field.name} component='div' className='error'/>
        </>
    )
}

export default PassLicDate;