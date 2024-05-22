import React, { useState } from "react";

const ExperienceForm = ({ onExperienceChange }) => {
    const [experience, setExperience] = useState([]);

    const handleAddExperience = () => {
        setExperience([ ...experience, { position: '', company: '', duration: ''}]); //actualiza el estado de experience añadiendo un nuevo objeto con campos vacios al array existente el cual useState seteo como vacio.
    }

    const handleChange = (index, e) => { //funcion que se ejecuta cada vez que hay un cambio en los campos de entrada. index es el indice del elemento de experiencia que se esta editando.
        const { name, value} = e.target;  //name es el nombre del campo position, company o duration y value el valor actual.
        const updatedExperience = experience.map((exp, i) => //crea una nueva copia del array experience donde se actualiza el objeto en la posicion index con el nuevo valor del campo.
            i === index ? {...exp, [name]:value } : exp 
        );
        //ejemplo practico: 
        //array experience
        //[{position: developer, company: company A, duration: 2 years}
        //{position: Manager, company: company B, duration: 3 years}]
        // el usuario edita position del 2do objeto (indice 1) y el nuevo valor es Senior Manager. handleChange se lama con | index = 1, name= 'position' y value = 'Senior Manager' |
        // condicion i = 1 es true asique {...exp, [name]:value } crea un nuevo objeto con la propiedad position actualizada.
        //el nuevo array experience queda:  {position: Senior Manager, company: company B, duration: 3 years}]
        
        setExperience(updatedExperience);
        onExperienceChange(updatedExperience);
    };

    return (
        <div>
            <h2>Experience</h2>
            {experience.map((exp, index) => (
                <div key={index}>
                    <label>
                        Position:
                        <input type="text" name="position" value={exp.position} onChange={(e) => handleChange(index, e)} />
                    </label>
                    <label>
                        Company:
                        <input type="text" name="company" value={exp.company} onChange={(e) => handleChange(index, e)} />
                    </label>
                    <label>
                        Duration:
                        <input type="text" name="duration" value={exp.duration} onChange={(e) => handleChange(index, e)} />
                    </label>
                </div>
            ))}
            <button type="button" onClick={handleAddExperience}>Add Experience</button>
        </div>
    );
};

export default ExperienceForm;