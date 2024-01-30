import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  // componentDidMount() invoked after a component has been rendered to the DOM
  // implement this code
  componentDidMount() {
    // If 'contacts' key in LS is not null, we write it in the 'contacts' state
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }

    // else {
    //   this.setState({
    //     contacts: [
    //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    //     ],
    //   });
    // }

    console.log('componentDidMount()');
  }

  // componentDidUpdate() after a component is updated
  // implement this code
  componentDidUpdate(_prevProps, prevState) {
    // if 'contacts' state is updated, set value to localStorage
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    console.log('componentDidUpdate()');
  }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    console.log('render()');
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} contacts={contacts} />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

/*
component mounted?
       \
initial render()
       \
componentDidMount()
  

props/states are changed?/forceUpdate()
       \
re - render()


component WILL remove/unmount?
        \
componentWillUnmount()


component updated?
        | 
componentDidUpdate()
*/
