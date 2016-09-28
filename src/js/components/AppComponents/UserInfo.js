import React, { Component } from 'react';



class UserInfo extends Component {

  handleNewId() {
    this.props.actions.createNewUserId()
  }
  bitcoinTick() {
    this.props.actions.increment()
  }

  render(){
    // console.log(this.props)
    return(
      <div>
      	<li>
      		<div>Username: {this.props.user.username}</div>
          <div>id: {this.props.user.id}</div>
          <button onClick={this.handleNewId.bind(this)}>Update Id</button>
      	</li>
        <button onClick={this.bitcoinTick.bind(this)}>bitcoin USD: {this.bitcoinTick.bind(this)}</button>
      </div>
    );
  }
}

export default UserInfo