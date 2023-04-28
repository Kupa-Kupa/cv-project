import React, { Component } from 'react';
import '../styles/Personal.css';

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div>{this.props.address}</div>
        <div>{this.props.mobile}</div>
        <div>{this.props.email}</div>
        <div>{this.props.description}</div>
      </div>
    );
  }
}

export default Personal;
