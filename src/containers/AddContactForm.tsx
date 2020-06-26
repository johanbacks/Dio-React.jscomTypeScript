import React, { useState, FormEvent } from 'react';
import  uuid from 'uuid';

import Contact from '../models/Contact';

type Props = {
  onAddContact: (contact: Contact) => void;
}

const AddContactForm = ({ onAddContact }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAddContact({
      id: uuid(),
      name,
      email,
      phoneNumber
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input-name">Name</label>
        <input id="input-name" type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="input-email">E-mail</label>
        <input id="input-email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="input-phone">Phone Number</label>
        <input id="input-phone" type="number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      </div>
      <button type="submit">Criar Contato</button>
    </form>
  );
};

export default AddContactForm;