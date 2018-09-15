import React, { Component } from 'react';
import './App.css';
import PhonesList from './components/PhonesList';

class App extends Component {


  render() {
    return (
      <div className="App">
        <PhonesList />
      </div>
    );
  }
}

export default App;
