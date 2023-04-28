import React, { Component } from 'react';
import '../styles/Education.css';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { education } = this.props;

    return (
      <div>
        {education.map((edu) => {
          return (
            <div className="edu">
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
  }
}

export default Education;
