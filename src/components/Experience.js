import React, { Component } from 'react';
import '../styles/Experience.css';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { experience } = this.props;

    return (
      <div>
        {/* use map to iterate through experience array and display on cv */}
        {experience.map((job) => {
          return (
            <div className="job">
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
  }
}

export default Experience;
