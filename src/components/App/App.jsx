import { Component } from 'react';
import shortid from 'shortid';
import { Container } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'components/Title/Title';
import { Notification } from 'components/Notification/Notification';
import { Modal } from 'components/Modal/Modal';
import { IconButton } from 'components/IconButton/IconButton';
import noContactImg from '../../images/no-contacts.png';
import { ReactComponent as AddIcon } from '../../icons/addContact.svg';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

import initialContacts from '../../contacts.json';
import defaultUserImg from '../../images/default.png';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  addContact = (name, number, avatar) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
      avatar: avatar ?? defaultUserImg,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
    this.toggleModal();
  };

  deleteContact = contactId => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      }));
    }
    return;
  };
  onClearBtnClick = () => {
    this.setState({ filter: '' });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  };
  render() {
    const { contacts, filter, showModal } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Container>
        <IconButton
          onClick={this.toggleModal}
          type="button"
          aria-label="Add contact"
        >
          <AddIcon width="40" height="40" fill="#29668b" />
        </IconButton>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ContactForm actualContacts={contacts} onSubmit={this.addContact} />
            <IconButton
              onClick={this.toggleModal}
              type="button"
              aria-label="Close modal window"
            >
              <CloseIcon width="20" height="20" fill="#29668b" />
            </IconButton>
          </Modal>
        )}
        <Title text="Phonebook" />
        <Filter
          value={filter}
          onChange={this.changeFilter}
          onClear={this.onClearBtnClick}
        />
        <Title text="Contacts" />
        {contacts[0] ? (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          <Notification
            text="There is no contact yet, you can add a new one!"
            imgPath={noContactImg}
          />
        )}
        {!filteredContacts[0] && contacts[0] && (
          <Notification text="No contact found" imgPath={noContactImg} />
        )}
      </Container>
    );
  }
}
