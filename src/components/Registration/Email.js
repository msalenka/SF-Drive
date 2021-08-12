import React from "react";
import { ErrorMessage, useField } from "formik";

import "../../styles/Reg.css"

function Email ( {label, ...props} ) {
const [field, meta] = useField (props)
    return (

        <>
        <div className='input-wrapper'>
            <label className='email-label' htmlFor={field.name}>{label}</label>
            <input 
            className={`email-input ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props}
            autoComplete='off'/>
        </div>
        <ErrorMessage name={field.name} component='div' className='error'/>
        </>
    )
}

export default Email;