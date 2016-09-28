import React, { Component } from 'react';
import TextInput from './AppComponents/TextInput';
import TextDisplay from './AppComponents/TextDisplay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
import UserInfo from './AppComponents/UserInfo';
import { Router, Route, Link } from 'react-router'

class App extends Component {

   render() {
      let steve = "Steve"
       const style = {

      };
     return(
       <div class="body-box">
       	<p>This is the react tree yooooooo</p>
        <UserInfo user={this.props.user} actions={this.props.actions}/>
        <TextInput addTodo={this.props.actions.addTodo} />
        <TextDisplay actions={this.props.actions} todos={this.props.todos} steve={steve}/>
       </div>
     );
   }
}

function mapStateToProp(state) {
	return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(App)
