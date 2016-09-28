import React, { Component } from 'react';


class TextInput extends Component {
  
  constructor(props, context){
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.props)
    this.props.addTodo(this.state.inputText)
  }

  render(){
    // console.log(this.props)
    return(
    	<div>
      <input
        type="text"
        placeholder="Type here"
        value={this.state.inputText}
        onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>

      </div>
    );
  }
}

export default TextInput