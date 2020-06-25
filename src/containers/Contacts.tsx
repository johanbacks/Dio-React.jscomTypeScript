import React,{ useState } from "react";
import styled from 'styled-components';
import Contact from "../contacts"
import Contactitem  from "../components/Contactitem"

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items : center;
  justify-content: center;
  height: 100%;
`;

const Cards = styled.div`
  width:768px;
  padding: 16px;
  background-color: #eee;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  overflow-y: auto;
`;

const Contacts = () => {
  const [ contacts , setContacts ] = useState(Contact) 

  const handleRemoveContact = (removeContactId:string) => {
    setContacts(contacts => 
      contacts.filter(contact => contact.id !== removeContactId))
  }

  return (  
  <Wrapper>
    <Cards >
    <ul>
      {contacts.map(contact => (
        <Contactitem
          key={contact.id}
          contact={contact}
          onRemoveContact={handleRemoveContact}
        />
      ))}
    </ul>
    </Cards>
    </Wrapper>
  )
}
export default Contacts;