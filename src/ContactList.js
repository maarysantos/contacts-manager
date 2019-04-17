import React, { Component } from 'react';
import './ContactList.css';
import Contact from './Contact';


class ContactList extends Component {
    render() {
      return <div className="List"> 
      <Contact/>
       </div>
      }
      }

export default ContactList;