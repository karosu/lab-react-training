import React, { Component } from 'react';

class IdCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.picture} alt="" />
        <div>
          <strong>First name</strong>: {this.props.firstName} <br />
          <strong>Last name</strong>: {this.props.lastName} <br />
          <strong>Gender</strong>: {this.props.gender} <br />
          <strong>Height</strong>: {this.props.height / 100}m <br />
          <strong>Birth</strong>: {this.props.birth.toDateString()} <br />
        </div>
      </div>
    );
  }
}

export default IdCard;
