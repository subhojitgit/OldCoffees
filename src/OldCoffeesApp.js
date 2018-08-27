import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './OldCoffeesApp.css';
import LoginContainer from './containers/login/LoginContainer';
import store from './store/store';

class OldCoffeesApp extends Component {
  render() {
    return (
      ReactDOM.render(
        <Provider store={store}>
          <LoginContainer />
        </Provider>,
        document.getElementById('root')
      )
    );
  }
}

export default OldCoffeesApp;
