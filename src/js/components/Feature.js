import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'


class Feature extends Component {
  render(){

    return(
      <section class="content">
      	<div class="item">
      		<h1 class="title">Our services</h1>
      		<h2>Iphone sketch and development </h2>
      	</div>
      	<div class="item">
      		<h2>website development </h2>
      		<h2>iOS Device Mockups</h2>
      	</div>
      	<div class="item">
	      	<h2>this is our Feature page </h2>
	      	<h2>this is our Feature page </h2>
      	</div>
    	</section>
    );
  }
}

export default Feature