import React, { Component } from 'react';
import './styles/App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Personal from './components/Personal';
import Input from './components/Input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // set state of personal info with dummy data
      name: 'John Doe',
      address: '123 Address St, Suburb, 1234 State',
      mobile: '0400000000',
      email: 'example@email.com',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ipsam porro quam architecto atque ratione fugiat vero nobis, ab repudiandae.',

      // set state of job input fields
      position: '',
      company: '',
      expFrom: '',
      expTo: '',
      tasks: '',

      // set state of past work experience to display on cv
      // state is updated on submission of experience form
      experience: [
        {
          position: 'Analyst',
          company: 'Bank',
          expFrom: '01/01/2000',
          expTo: '01/01/3000',
          tasks: 'notable experience',
        },
        {
          position: 'Bro',
          company: 'Gym',
          expFrom: '01/01/2000',
          expTo: '01/01/3000',
          tasks: 'notable experience',
        },
      ],

      // set state of education input fields
      qualification: '',
      institute: '',
      eduFrom: '',
      eduTo: '',
      eduInfo: '',

      // set state of past education to display on cv
      // state is updated on submission of education form
      education: [
        {
          qualification: 'Degree',
          institute: 'University',
          eduFrom: '01/01/2000',
          eduTo: '01/01/3000',
          eduInfo: 'additional info',
        },
        {
          qualification: 'Certificate',
          institute: 'School',
          eduFrom: '01/01/2000',
          eduTo: '01/01/3000',
          eduInfo: 'additional info',
        },
      ],
    };

    // bind methods to this
    this.handlePersonalInfo = this.handlePersonalInfo.bind(this);

    this.handleExperienceInfo = this.handleExperienceInfo.bind(this);

    this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);

    this.handleEducationInfo = this.handleEducationInfo.bind(this);

    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
  }

  // update state when input for personal info is changed
  handlePersonalInfo(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  // update state when input for work experience is changed
  handleExperienceInfo(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  // update the state of past work experience to display on cv
  handleExperienceSubmit(e) {
    e.preventDefault();

    const { position, company, expFrom, expTo, tasks } = this.state;

    this.setState((prevState) => {
      return {
        experience: [
          ...prevState.experience,
          { position, company, expFrom, expTo, tasks },
        ],
      };
    });
  }

  // update state when input for education is changed
  handleEducationInfo(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  // update state of education array to display on cv
  handleEducationSubmit(e) {
    e.preventDefault();

    const { qualification, institute, eduFrom, eduTo, eduInfo } = this.state;

    this.setState((prevState) => {
      return {
        education: [
          ...prevState.education,
          { qualification, institute, eduFrom, eduTo, eduInfo },
        ],
      };
    });
  }

  render() {
    return (
      <div className="appContainer">
        <section>
          <Input
            handlePersonalChange={this.handlePersonalInfo}
            handleExperienceChange={this.handleExperienceInfo}
            handleEducationChange={this.handleEducationInfo}
            handleExperienceSubmit={this.handleExperienceSubmit}
            handleEducationSubmit={this.handleEducationSubmit}
          />
        </section>
        <section>
          <div className="cvDisplayContainer">
            <Personal
              name={this.state.name}
              address={this.state.address}
              mobile={this.state.mobile}
              email={this.state.email}
              description={this.state.description}
            />
            <Experience experience={this.state.experience} />
            <Education education={this.state.education} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
