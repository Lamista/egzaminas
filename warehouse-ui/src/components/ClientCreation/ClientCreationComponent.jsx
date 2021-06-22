import React from 'react';
import Input from '../common/Input';
import SelectionInput from '../common/SelectionInput';

const ClientCreationComponent = ({ types, client, handleChange, handleSubmit, errors, message, messageStyle }) => {
    let labelStyle = "pt-2 text-right";
    let inputType = "text"
    return (
        <div className="page">
            <div className='container py-5'>
                <form className="bg-light p-3 rounded" onSubmit={handleSubmit}>
                    <Input
                        name="firstName"
                        value={`${client.firstName}`}
                        label="Vardas"
                        mandatory={true}
                        type={inputType}
                        error={errors.firstName}
                        placeholder=""
                        onChange={handleChange}
                        errorMessage="Šis laukas privalomas."
                        labelStyle={labelStyle}
                    />
                    <Input
                        name="lastName"
                        value={`${client.lastName}`}
                        label="Pavarde"
                        mandatory={true}
                        type={inputType}
                        error={errors.lastName}
                        placeholder=""
                        onChange={handleChange}
                        errorMessage="Šis laukas privalomas."
                        labelStyle={labelStyle}
                    />
                    <Input
                        name="birthDay"
                        value={`${client.birthDay}`}
                        label="Gimimo data"
                        mandatory={true}
                        type="datetime-local"
                        error={errors.birthDay}
                        onChange={handleChange}
                        errorMessage="Šis laukas privalomas."
                        labelStyle={labelStyle}
                        max={new Intl.DateTimeFormat('lt-LT', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date()).split(" ")[0]
                            + "T"
                            + new Intl.DateTimeFormat('lt-LT', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date()).split(" ")[1]}
                    />
                    <Input
                        name="phoneNo"
                        value={`${client.phoneNo}`}
                        label="Telefono numeris"
                        mandatory={true}
                        type="number"
                        error={errors.phoneNo}
                        onChange={handleChange}
                        errorMessage="Šis laukas privalomas."
                        labelStyle={labelStyle}
                    />
                    <SelectionInput
                        items={types}
                        handleChange={handleChange}
                        defaultValue="Pasirinkite tipą"
                        item="clientType"
                        mandatory={true}
                        label="Kliento tipas"
                        labelStyle={labelStyle}
                        errorMessage="Šis laukas privalomas."
                        error={errors.clientType}
                    />
                    <div className={`${messageStyle} mt-3`}>
                        {message}
                    </div>
                    <button type='submit' className='btn btn-primary mt-3'>Išsaugoti</button>
                </form>
            </div >
        </div>
    )
}


export default ClientCreationComponent;