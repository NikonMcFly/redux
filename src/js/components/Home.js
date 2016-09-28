import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import Design from './CompanyDesign'
import Feature from './Feature'

class Home extends Component {
  render(){

    return(
      <section class="containers">
        <div class="content content--top">
          <div class="item">
            <h1>sgtevennnnnnnnn</h1>
            <h1>sgteve</h1>
            <h1>sgteve</h1>
            <h1>sgteve</h1>
          </div>
          <div class="item">
            <h1>sgteve</h1>
            <h1>sgteve</h1>
            <h1>sgteve</h1>
            <h1>sgteve</h1>
          </div>
      	</div>
        <Design />
        <Feature />
      </section>
    );
  }
}

export default Home