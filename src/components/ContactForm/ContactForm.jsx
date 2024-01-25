import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    // implement this method
  };

  handleNumberChange = e => {
    // implement this method
  };

  handleSubmit = e => {
    // implement this method
    // prevent the form from submitting
    // if name and number is empty, it will not submit(return)
    // if existing contact set an alert, it will not submit(return)
    // Add Contact
    // Reset Form Fields upon submitting
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            // add \ before - in [' \-] to make it work (LMS)
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            //must have value prop when onChange prop is used
            onChange={this.handleNameChange}
          />
        </label>

        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            // add \ before - in [\-.\s] to make it work (LMS)
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            //must have value prop when onChange prop is used
            onChange={this.handleNumberChange}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
