import React, { Component } from 'react';
// import { Formik, Form } from 'formik';

export class App extends Component {
  state = {
    contacts: ['qwer', 'wer'],
    name: '',
    email: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = evt => {
    // const { name } = this.state.name;

    evt.preventDefault();

    // contactName({ name });
    // Проп который передается форме для вызова при сабмите

    const newName = evt.target.elements.name.value;
    const newEmail = evt.target.elements.email.value;
    // const newEl = this.state.name;
    const newArr = [...this.state.contacts, newName, newEmail];
    console.log('newArr :>> ', newArr);

    this.setState({ contacts: newArr });
    console.log('this.state.contacts :>> ', this.state.contacts);
  };
  contactName = name => {
    <li>{name}</li>;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
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
          email
          <input
            type="text"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
