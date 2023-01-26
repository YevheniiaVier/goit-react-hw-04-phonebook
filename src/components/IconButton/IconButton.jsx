import PropTypes from 'prop-types';

import { StyledIconBtn } from './IconButton.styled';

export const IconButton = ({ children, type, onClick, ...allyProps }) => {
  return (
    <StyledIconBtn type={type} onClick={onClick} {...allyProps}>
      {children}
    </StyledIconBtn>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
