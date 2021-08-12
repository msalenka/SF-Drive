import React from "react";
import { ErrorMessage, useField } from "formik";

import "../../styles/Reg.css"

function LicNumber ( {label, ...props} ) {
const [field, meta] = useField (props)
    return (

        <>
        <div className='input-wrapper'>
            <label className='passport-license-number-label' htmlFor={field.name}>{label}</label>
            <input 
            className={`passport-license-number-input ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props}
            autoComplete='off'/>
        </div>
        <ErrorMessage name={field.name} component='div' className='error'/>
        </>
    )
}

export default LicNumber;