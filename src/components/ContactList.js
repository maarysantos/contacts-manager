import React, { Component } from 'react';
import Contact from './Contact';

//para usar expressoes js, precisamos por {} 
function ContactList(props){
      return (<div>
      {props.contacts.map(el => <Contact key ={el.id} name = {el.name} email={el.email} phone= {el.phone} />)}
       </div>)
}

export default ContactList;