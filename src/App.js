import React, { Component } from 'react';
import ContactList from './components/ContactList';
import logo from './logo.svg';
import './App.css';

const contacts = [
    {"id": 1, "name": "Leanne Graham"},
    {"id": 2, "name": "Ervin Howell"},
    {"id": 3, "name": "Clementine Bauch"},
    {"id": 4, "name": "Patricia Lebsack"}
   ];

class App extends Component {
        render() {
          return <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2> React Contact Manager </h2>
          </header>
          <ContactList contacts={contacts} />
          </div>
        }
}    

export default App;
