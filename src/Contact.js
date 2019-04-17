import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Contact.css';

function Contact(props) {
     return ( <div className="Contact"> <span> {props.name} </span> </div> ); 

}

Contact.propTypes = { name: PropTypes.string.isRequired };

export default Contact;


