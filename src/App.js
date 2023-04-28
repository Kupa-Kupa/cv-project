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
      name: 'John Doe',
      address: '123 Address St, Suburb, 1234 State',
      mobile: '0400000000',
      email: 'example@email.com',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ipsam porro quam architecto atque ratione fugiat vero nobis, ab repudiandae.',
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
      experience: [
        {
          position: 'Analyst',
          company: 'Bank',
          expFrom: '01/01/2000',
          expTo: '01/01/3000',
          experience: 'notable experience',
        },
        {
          position: 'Bro',
          company: 'Gym',
          expFrom: '01/01/2000',
          expTo: '01/01/3000',
          experience: 'notable experience',
        },
      ],
    };

    this.handlePersonalInfo = this.handlePersonalInfo.bind(this);
  }

  handlePersonalInfo(e) {
    e.preventDefault();

    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="appContainer">
        <section>
          <Input handleChange={this.handlePersonalInfo} />
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
