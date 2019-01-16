import React, { Component } from 'react';
//import './Routes.css';
import styled from 'styled-components';

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      fullName: evt.target.value
    });
  }

  render() {
    return <div className="Routes" />;
  }

  state = {};
}

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
