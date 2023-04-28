import React, { Component } from 'react';
import '../styles/Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inputContainer">
        <form className="personalForm">
          <h2>Personal Information</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.props.handleChange}
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={this.props.handleChange}
          />
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            onChange={this.props.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={this.props.handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            onChange={this.props.handleChange}
          ></textarea>
        </form>

        <form className="experienceForm">
          <h2>Work Experience</h2>
          <label htmlFor="position">Position</label>
          <input type="text" name="position" id="position" />
          <label htmlFor="company">Company</label>
          <input type="text" name="company" id="company" />
          <label htmlFor="expFrom">From</label>
          <input type="date" name="expFrom" id="expFrom" />
          <label htmlFor="expTo">To</label>
          <input type="date" name="expTo" id="expTo" />
          <label htmlFor="experience">Experience</label>
          <textarea
            name="experience"
            id="experience"
            cols="30"
            rows="10"
          ></textarea>
          <button>Submit</button>
        </form>

        <form className="educationForm">
          <h2>Education</h2>
          <label htmlFor="qualification">Qualification</label>
          <input type="text" name="qualification" id="qualification" />
          <label htmlFor="institute">Institution Name</label>
          <input type="text" name="institute" id="institute" />
          <label htmlFor="eduFrom">From</label>
          <input type="date" name="eduFrom" id="eduFrom" />
          <label htmlFor="eduTo">To</label>
          <input type="date" name="eduTo" id="eduTo" />
          <label htmlFor="eduInfo">Additional Info</label>
          <textarea name="eduInfo" id="eduInfo" cols="30" rows="10"></textarea>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Input;
