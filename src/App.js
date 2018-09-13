import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {

  render() {

    return (

      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Counter App</h1>
        </header>

        <div>
          <Counter name="Red" />
          <Counter name="Orange" />
          <Counter name="Yellow"/>
          <Counter name="Green"/>
          <Counter name="Blue"/>
          <Counter name="Indigo"/>
          <Counter name="Violet"/>
        </div>

      </div>
    );
  }
}

export default App;
