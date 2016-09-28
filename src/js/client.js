import React from "react";
import ReactDOM from "react-dom";
import  { Provider } from 'react-redux';
import App from "./components/App";
import NavBar from "./components/NavBar";
import Page from "./components/Page";
import Home from "./components/Home";
import configureStore from './redux/store';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }],
  user: {
  	username: 'steve',
  	id: 21
  }
}

let store = configureStore(initialState)
const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Page}>
          <IndexRoute component={Home} />
          <Route path="/aboutus" component={App}/>
        </Route>
      </Router>
    </Provider>,
    app);
