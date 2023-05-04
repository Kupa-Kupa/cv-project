import React from 'react';
import '../styles/Education.css';
import uniqid from 'uniqid';

const Education = (props) => {
  const { education } = props;

  return (
    <div>
      {/* use map to iterate through education array and display it on cv */}
      {education.map((edu) => {
        return (
          <div className="edu" key={uniqid()}>
            <div> {edu.qualification} </div>
            <div> {edu.institute} </div>
            <div>
              {edu.eduFrom} - {edu.eduTo}
            </div>
            <div> {edu.eduInfo} </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
