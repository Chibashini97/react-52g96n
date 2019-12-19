import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import LoginDisplay from './LoginDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <LoginDisplay/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
