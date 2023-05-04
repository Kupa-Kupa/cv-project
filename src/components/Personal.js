import React from 'react';
import '../styles/Personal.css';

const Personal = (props) => {
  return (
    <div>
      <h1>{props.personalInfo.name}</h1>
      <div>{props.personalInfo.address}</div>
      <div>{props.personalInfo.mobile}</div>
      <div>{props.personalInfo.email}</div>
      <div>{props.personalInfo.description}</div>
    </div>
  );
};

export default Personal;
