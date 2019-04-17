import React, { Component } from 'react';
import ContactList from './ContactList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
        render() {
          return <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1> React Contact Manager </h1>
          </header>
          < ContactList/>

        </div>
      //aqui vai um outro componente
  }
  }    

export default App;
