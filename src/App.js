import React, { Component } from 'react';
import axios from 'axios';
import ContactList from './components/ContactList';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // default State object
  state = {
    contacts: []
  };

  componentDidMount(){
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {

        // create an array of contacts only with relevant data
        const newContacts = res.data.map(el => {
          return {
            id: el.id,
            name: el.name,
            email: el.email,
            phone: el.phone
          };
        });
        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }
  
        render() {
          return <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2> React Contacts Manager </h2>
          </header>
          <ContactList contacts={this.state.contacts} />
          </div>
        }
}    

export default App;
