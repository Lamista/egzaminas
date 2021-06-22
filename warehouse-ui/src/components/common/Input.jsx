import React from 'react';
import "../../styles/input.css"

const Input = ({ name, value, labelStyle, label, mandatory, type, error, placeholder, onChange, invalidStyle, errorMessage, min, max, disabled, formGroupStyle }) => {
    return (
        <div className={`form-group ${formGroupStyle}`}>
            <label htmlFor={name} className={labelStyle}>{label}{mandatory && !disabled ? <span className="mandatory"> *</span> : ""}</label>
            {type !== 'textarea' ?
                <input
                    type={type}
                    className={`form-control ${error}`}
                    placeholder={placeholder}
                    id={name}
                    value={value}
                    name={name}
                    onChange={onChange}
                    min={min}
                    max={max}
                    disabled={disabled}
                /> :
                <textarea
                    className={`form-control ${error}`}
                    id={name}
                    value={value}
                    name={name}
                    onChange={onChange}
                    min={min}
                    disabled={disabled}
                ></textarea>}
            <div className={`invalid-feedback ${invalidStyle}`}>{errorMessage}</div>
        </div>
    )
}

export default Input;