import React from 'react';
import '../styles/Experience.css';
import uniqid from 'uniqid';

const Experience = (props) => {
  const { experience } = props;

  return (
    <div>
      {/* use map to iterate through experience array and display on cv */}
      {experience.map((job) => {
        return (
          <div className="job" key={uniqid()}>
            <div> {job.position} </div>
            <div> {job.company} </div>
            <div>
              {job.expFrom} - {job.expTo}
            </div>
            <div> {job.tasks} </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
