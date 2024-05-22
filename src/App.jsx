import React, { useState } from 'react';
import PersonalInfoForm from './components/PersonalInfoForm';
import ExperienceForm from './components/ExperienceForm';
import EducationForm from './components/EducationForm';
import CVPreview from './components/CVPreview';
import './App.css';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>CV Builder</h1>
      </header>
      <div className="container">
        <div className="form-column">
          <PersonalInfoForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <ExperienceForm experience={experience} setExperience={setExperience} />
          <EducationForm education={education} setEducation={setEducation} />
        </div>
        <div className="preview-column">
          <CVPreview
            personalInfo={personalInfo}
            experience={experience}
            education={education}
          />
        </div>
      </div>
    </div>
  );
};

export default App;