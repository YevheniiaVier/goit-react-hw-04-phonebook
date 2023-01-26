import PropTypes from 'prop-types';

import { StyledTitle } from './Title.styled';

export const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

Title.propTypes = {
  text: PropTypes.string,
};
