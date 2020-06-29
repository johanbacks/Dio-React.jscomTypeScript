import React,{ useState } from "react";
import styled from 'styled-components';
import Contact from "../contacts";
import Contactitem  from "../components/Contactitem";
import AddContactForm from "./AddContactForm";


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

const ContatctList = styled.div`
  margin: 0;
  padding:0
`;


const Contacts = () => {
  const [isAddindContact , setAddingContact] = useState(false);
  const [ contacts , setContacts ] = useState(Contact) 

  const handleRemoveContact = (removeContactId:string) => {
    setContacts(contacts => 
      contacts.filter(contact => contact.id !== removeContactId))
  }


  return (  
  <Wrapper>
    <Cards >
      <header>
         
        <button onClick={() => setAddingContact(true)}>Adicionar Contato</button>
      </header>
    <ContatctList>
      {contacts.map(contact => (
        <Contactitem
          key={contact.id}
          contact={contact}
          onRemoveContact={handleRemoveContact}
        />
      ))}
    </ContatctList>
    </Cards>
    </Wrapper>
  )
}
export default Contacts;