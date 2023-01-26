import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { StyledContacts } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledContacts>
      {contacts.map(({ id, avatar, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          number={number}
          avatar={avatar}
          name={name}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </StyledContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    })
  ),
};
