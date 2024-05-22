import React, { useState } from "react";

const EducationForm = ({ onEducationChange }) => {
    const [education, setEducation] = useState([]);

    const handleAddEducation = () => {
        setEducation([...education, { degree: '', institution: '', year: ''}]);
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedEducation = education.map((edu, i) =>
            i === index ? {...edu, [name]: value } : education
        );
        setEducation(updatedEducation);
        onEducationChange(updatedEducation);
    };

    return (
        <div>
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index}>
                    <label>
                        Degree:
                        <input type="text" name="degree" value={edu.degree} onChange={(e) => handleChange(index, e)} />
                    </label>
                    <label>
                        Institution:
                        <input type="text" name="institution" value={edu.institution} onChange={(e) => handleChange(index, e)} />
                    </label>
                    <label>
                        Year:
                        <input type="text" name="year" value={edu.year} onChange={(e) => handleChange(index, e)} />
                    </label>
                </div>
            ))}
            <button type="button" onClick={handleAddEducation}>Add Education</button>
        </div>
    );
};

export default EducationForm;