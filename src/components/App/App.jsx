import { useState, useEffect } from 'react';
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

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  );
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const addContact = (name, number, avatar) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
      avatar: avatar ?? defaultUserImg,
    };
    setContacts(prevState => [...prevState, contact]);
    toggleModal();
  };

  const deleteContact = contactId => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      setContacts(prevState =>
        prevState.filter(prevState => prevState.id !== contactId)
      );
    }
    return;
  };

  const onClearBtnClick = () => {
    setFilter('');
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  };

  const filteredContacts = getFilteredContacts();
  return (
    <Container>
      <IconButton onClick={toggleModal} type="button" aria-label="Add contact">
        <AddIcon width="40" height="40" fill="#29668b" />
      </IconButton>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm actualContacts={contacts} onSubmit={addContact} />
          <IconButton
            onClick={toggleModal}
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
        onChange={changeFilter}
        onClear={onClearBtnClick}
      />
      <Title text="Contacts" />
      {contacts[0] ? (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
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
};
