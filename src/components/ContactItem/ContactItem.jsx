import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/Button';
import { StyledItem, ContactImg, Box } from './ContactItem.styled';
import defaultUserImg from '../../images/default.png';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg';

export const ContactItem = ({ name, avatar, number, onDeleteContact }) => {
  return (
    <StyledItem>
      <Box>
        <ContactImg src={avatar === '' ? defaultUserImg : avatar} alt={name} />
        {name}
        <PhoneIcon width="20" height="20" fill="#29668b"></PhoneIcon>
        {number}
      </Box>
      <Button
        type="button"
        text="Delete"
        active
        onClick={onDeleteContact}
      ></Button>
    </StyledItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};
