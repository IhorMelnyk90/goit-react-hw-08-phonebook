import React from 'react';
import { useState } from 'react';
import {
  useAddContactsMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsOperation';

import {
  FormTitle,
  FormTextField,
  FormGroup,
  NameGroup,
  FormInput,
  FormBtn,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactsMutation();
  const { data } = useGetContactsQuery();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      data.find(
        contact => contact.name.toLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return alert(`${name} is already in contact`);
    }
    addContact({ name, number });
    alert('Contact added!');

    setName('');
    setNumber('');
  };

  return (
    <>
      <FormTitle>Phonebook</FormTitle>
      <FormGroup action="submit" onSubmit={handleSubmit}>
        <FormTextField>
          <FormInput
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
            // placeholder="Your Name"
          />
          <NameGroup htmlFor="name">
            Name
          </NameGroup>
        </FormTextField>
        <FormTextField>
          <FormInput
            type="tel"
            id="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
            // placeholder="+XX XXX XX XX"
          />
          <NameGroup htmlFor="tel">
            Phone number
          </NameGroup>
        </FormTextField>
        <FormBtn type="submit">
          Add contact
        </FormBtn>
      </FormGroup>
    </>
  );
};

export default ContactForm;
