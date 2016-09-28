import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';


class NavBar extends Component {
  
  render(){
  	var styles = {

  	}
    return(
      <div class="nav_bar">
        <Link class="link" to="/">Home</Link>
        <Link class="link" to="/aboutus">Work</Link>
        <Link class="link" to="/aboutus">Team</Link>
        <Link class="link" to="/aboutus">Contact</Link>
    	</div>
    );
  }
}

export default NavBar