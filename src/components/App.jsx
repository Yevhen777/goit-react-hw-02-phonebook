import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import { Formik, Form } from 'formik';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    name: '',
    number: '',
    filter: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const filteredArr = this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return filteredArr;
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const newName = evt.target.elements.name.value;
    const newNumber = evt.target.elements.number.value;

    const contactInput = { id: newName, name: newName, number: newNumber };
    const newContact = [...this.state.contacts, contactInput];

    this.setState({ contacts: newContact });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h2>Phone Book</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Name</h3>
            <input
              id={nanoid()}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <h3>Number</h3>
            <input
              id={nanoid()}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        {visibleContacts.map(contact => {
          return (
            <li key={nanoid()}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
        <h4>Find contacts by name</h4>
        <input
          id={nanoid()}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={this.state.filter}
          onChange={this.changeFilter}
        />
      </div>
    );
  }
}
