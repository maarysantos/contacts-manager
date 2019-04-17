import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Contact.css';

function Contact(props) {
     return ( <div className="contact">
      <span> <b> {props.name} </b> </span> <br></br>
      <span> {props.email} </span> <br></br>
      <span> {props.phone} </span>
      </div> ); 

}

Contact.propTypes = { name: PropTypes.string.isRequired };

export default Contact;


