import { Component } from 'react';
import { Form as ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './ContactList/ContactList';
import { StyledFilter } from './ContactList/ContactList.styled';

import { nanoid } from 'nanoid';
import { Filter } from './filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  // addContact = (newContact ) => {
  //   console.log(newContact);
  // };
  addContact = newContact => {
    const { contacts } = this.state;
    const contactWithId = { ...newContact, id: nanoid() };
    
    if (contacts.some(contact => contact.name === contactWithId.name)) {
      alert(`${contactWithId.name} is already in contacts`);
    } else {
     this.setState(prevState => ({
       contacts: [...prevState.contacts, contactWithId],
    }));
    }
  };
  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  onDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onDeleteContact = contactId => {
    this.onDelete(contactId);
  };

  render() {
    const { contacts, name, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <StyledFilter>
          <h2>Contacts</h2>
          <Filter
            filter={filter}
            handleFilterChange={this.handleFilterChange}
          />
        </StyledFilter>
        <Contacts
          contacts={filteredContacts}
          name={name}
          onClick={this.onDeleteContact}
        />
      </div>
    );
  }
}
