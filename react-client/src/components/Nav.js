import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Nav extends Component {
  render() {
    return (
      <React.Fragment>
              <Link to="/" exact>Home</Link> | 
              <Link to="/about">About</Link> |            
              <Link to="/contact">Contact</Link>         
      </React.Fragment>
    );
  }
}
export default Nav;

