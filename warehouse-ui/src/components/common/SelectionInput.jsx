import React from 'react';
import "../../styles/input.css"

const SelectionInput = ({ items, item, defaultValue, handleChange, mandatory, label, labelStyle, invalidStyle, errorMessage, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={item} className={labelStyle}>{label}{mandatory ? <span className="mandatory"> *</span> : ""}</label>
            <select className={`form-select ${error}`} id={item} name={item} onChange={handleChange}>
                <option defaultValue value="">{defaultValue}</option>
                {items.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            <div className={`invalid-feedback ${invalidStyle}`}>{errorMessage}</div>
        </div>
    )
}

export default SelectionInput;