import React from "react";

const CVPreview = ({ personalInfo, experience, education }) => {
    return (
        <div>
            <h2>CV Preview</h2>
            <section>
                <h3>Personal Information</h3>
                <p>Name: {personalInfo.name}</p>
                <p>Email: {personalInfo.email}</p>
                <p>Phone: {personalInfo.phone}</p>
            </section>
            <section>
                <h3>Experience</h3>
                {experience.map((exp, index) => (
                    <div key={index}>
                        <p>Position: {exp.position}</p>
                        <p>Company: {exp.company}</p>
                        <p>Duration: {exp.duration}</p>
                    </div>
                ))}
            </section>
            <section>
                <h3>Education</h3>
                {education.map((edu, index) => (
                    <div key={index}>
                        <p>Degree: {edu.degree}</p>
                        <p>Institution: {edu.institution}</p>
                        <p>Year: {edu.year}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default CVPreview;