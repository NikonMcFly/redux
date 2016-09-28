import React, { Component } from 'react';
import NavBar from "./NavBar";
import Home from "./Home";
import Feature from './Feature'
import { Router, Route, Link } from 'react-router'


class Page extends Component {
  render(){
    return(
    	<div>
            <NavBar />
    		  {this.props.children}
    		  <footer class="footer">
    		  <p class="label label-danger">Contact Us</p>
    		  <p>terms</p>
    		  </footer>
    	</div>
    );
  }
}

export default Page

