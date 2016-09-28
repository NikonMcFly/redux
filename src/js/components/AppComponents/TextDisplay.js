import React, { Component } from 'react';
import Todoitem from './Todoitem';

class TextDisplay extends Component {

  render(){

    return(
      <div>
      	<p>This is the TextDisplay</p>

        <ul>
        {
        	this.props.todos.map((todo) => {
          return <Todoitem key={todo.id} todo={todo} actions={this.props.actions}/>
          })
        }
        </ul>
        <p>{this.props.steve}</p>
      </div>
    );
  }
}

export default TextDisplay
