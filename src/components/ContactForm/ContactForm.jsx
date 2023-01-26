import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from './Button';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  Box,
} from './ContactForm.styled';

const notify = text =>
  toast.error(text, { theme: 'colored', pauseOnHover: true });

export const ContactForm = ({ actualContacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [avatar, setAvatar] = useState('');

  const nameInputId = shortid.generate();
  const telInputId = shortid.generate();
  const imgInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      case 'avatar':
        setAvatar(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    if (actualContacts.find(contact => elements.name.value === contact.name)) {
      return notify(`${elements.name.value} is already in contacts`);
    }

    const foundNumber = actualContacts.find(
      contact => elements.number.value === contact.number
    );
    if (foundNumber) {
      return notify(
        `${elements.number.value} is already belong to ${foundNumber.name}`
      );
    }

    onSubmit(name, number, avatar);
    e.currentTarget.reset();
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setAvatar('');
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <Box>
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          id={nameInputId}
          placeholder=" "
        />
        <StyledLabel htmlFor={nameInputId}>Name*</StyledLabel>
      </Box>
      <Box>
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          id={telInputId}
          placeholder=" "
        />
        <StyledLabel htmlFor={telInputId}>Number*</StyledLabel>
      </Box>
      <Box>
        <StyledInput
          type="url"
          name="avatar"
          id={imgInputId}
          placeholder=" "
          onChange={handleChange}
        />
        <StyledLabel htmlFor={imgInputId}>
          Add path to photo if you like
        </StyledLabel>
      </Box>
      <Button text="Add contact" type="submit" active={false} />
      <ToastContainer autoClose={2000} />
    </StyledForm>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  actualContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
