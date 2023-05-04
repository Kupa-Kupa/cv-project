import React from 'react';
import '../styles/Input.css';

const Input = (props) => {
  return (
    <div className="inputContainer">
      <form className="personalForm">
        <h2>Personal Information</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={props.handlePersonalChange}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          onChange={props.handlePersonalChange}
        />

        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          id="mobile"
          onChange={props.handlePersonalChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={props.handlePersonalChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={props.handlePersonalChange}
        ></textarea>
      </form>

      <form className="experienceForm">
        <h2>Work Experience</h2>

        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          id="position"
          onChange={props.handleExperienceChange}
        />

        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          onChange={props.handleExperienceChange}
        />

        <label htmlFor="expFrom">From</label>
        <input
          type="date"
          name="expFrom"
          id="expFrom"
          onChange={props.handleExperienceChange}
        />

        <label htmlFor="expTo">To</label>
        <input
          type="date"
          name="expTo"
          id="expTo"
          onChange={props.handleExperienceChange}
        />

        <label htmlFor="tasks">Tasks</label>
        <textarea
          name="tasks"
          id="tasks"
          cols="30"
          rows="10"
          onChange={props.handleExperienceChange}
        ></textarea>

        <button onClick={props.handleExperienceSubmit}>Submit</button>
      </form>

      <form className="educationForm">
        <h2>Education</h2>

        <label htmlFor="qualification">Qualification</label>
        <input
          type="text"
          name="qualification"
          id="qualification"
          onChange={props.handleEducationChange}
        />

        <label htmlFor="institute">Institution Name</label>
        <input
          type="text"
          name="institute"
          id="institute"
          onChange={props.handleEducationChange}
        />

        <label htmlFor="eduFrom">From</label>
        <input
          type="date"
          name="eduFrom"
          id="eduFrom"
          onChange={props.handleEducationChange}
        />

        <label htmlFor="eduTo">To</label>
        <input
          type="date"
          name="eduTo"
          id="eduTo"
          onChange={props.handleEducationChange}
        />

        <label htmlFor="eduInfo">Additional Info</label>
        <textarea
          name="eduInfo"
          id="eduInfo"
          cols="30"
          rows="10"
          onChange={props.handleEducationChange}
        ></textarea>

        <button onClick={props.handleEducationSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Input;
