import React from "react";
import styled from 'styled-components';
import Contact from "../models/Contact"

type Props = {
  contact :  Contact;
  onRemoveContact:(id: string) =>void;
};

const Card = styled.li`
 border-radius : 20px;
 padding: 15px;
 margin-top:4px;
 background-color : #ccc;

`
const Contactitem= ({contact,onRemoveContact}: Props) => (
  <Card>
    
      <p>Nome:{contact.name}</p>
      <p>E-mail:{contact.email}</p>
      <p>Telefone:{contact.phoneNumber}</p>
      <button onClick={() => onRemoveContact(contact.id)}>Delete Contact </button>
    
  </Card>
);

export default Contactitem;