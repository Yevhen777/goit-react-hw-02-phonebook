import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
// import { Formik, Form } from 'formik';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.contacts.find(el => el.name === this.state.name)) {
      alert(`${this.state.name} is already in contacs`);
      this.reset();
      return;
    }

    const { name, number } = evt.target.elements;

    const contactInput = {
      id: name.value,
      name: name.value,
      number: number.value,
    };
    const newContact = [...this.state.contacts, contactInput];

    this.setState({ contacts: newContact });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
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
  deleteContact = contactId => {
    this.setState(preState => ({
      contacts: preState.contacts.filter(
        contactEl => contactEl.id !== contactId
      ),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phone Book</h1>
        <ContactForm
          initialValues={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={this.state.name}
          number={this.state.number}
        />
        <h2>Contacts</h2>
        <Filter
          contact={this.state.contacts}
          filter={this.state.filter}
          changeFilter={this.changeFilter}
        />

        <ContactList
          visibleContacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
ContactForm.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};

Filter.propTypes = {
  contact: PropTypes.array,
  filterState: PropTypes.string,
  handleFilter: PropTypes.func,
};

ContactList.propTypes = {
  visibleContacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
