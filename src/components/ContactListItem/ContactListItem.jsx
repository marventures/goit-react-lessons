import { Component } from 'react';
import css from './ContactListItem.module.css';

export class ContactListItem extends Component {
  //componentWillUnmount() will be called just before the element will be removed in the DOM
  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  // handleDelete method
  handleDelete = () => {
    const { contact, deleteContact } = this.props;
    deleteContact(contact.id);
  };

  render() {
    const { contact } = this.props;

    return (
      <li className={css.contactListItem}>
        <p>{contact.name}:</p>
        <p>{contact.number}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}
