import React, { useState } from 'react';

const PersonalInfoForm = ({ onPersonalInfoChange }) => {
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => { // e.target es el elemento de entrada que descadeno el evento.
        const { name, value } = e.target; //se obtienen del elemento de entrada input name y value. name es el nombre del campo name,email o phone y value es el valor actual del campo
        setPersonalInfo({ ...personalInfo, [name]: value });  //actualiza el estado de personalinfo con el nuevo valor del campo que cambio, manteniendo el resto de los valores sin cambio.
        onPersonalInfoChange({ ...personalInfo, [name]:value }); //llama a la funcion onPersonalInfoChange pasando el nuevo estado actualizado, permitiendo que el componente padre reciba y maneje los datos del formulario.
    };

    //input tiene 3 elementos de entrada para el nombre, email y telefono.
    //type define el tipo de entrada (text, email, tel)
    //name define el nombre del campo, que se usa en handleChange para identificar que campo cambio.
    //value define el valor actual del campo, que se obtiene del estado personalInfo.
    //onChange asigna la funcion handleChange para manejar los cambios en el campo.

    return (
        <form>
            <h2>Personal Information</h2>
            <label>
                Name:
                <input type="text" name="name" value={personalInfo.name} onChange={handleChange} /> 
            </label>
            <label>
                Email:
                <input type="email" name="email" value={personalInfo.email} onChange={handleChange} /> 
            </label>
            <label>
                Phone:
                <input type="tel" name="phone" value={personalInfo.phone} onChange={handleChange} /> 
            </label>
        </form>
    );
};

export default PersonalInfoForm;
