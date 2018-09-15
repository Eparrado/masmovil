import React, { Component } from 'react';
import './App.css';
import PhonesList from './components/PhonesList';
// import Spinner from './components/Spinner';

const API = 'http://localhost:3001/phones'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobilesCatalog: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          mobilesCatalog: data
        });
      });
  }


  render() {
    return (
      <div className="App">
        <PhonesList />
        <p>Need to add a spinner when API is fetchind the data</p>
      </div>
    );
  }
}

export default App;
