import PropTypes from 'prop-types';
import shortid from 'shortid';

import { StyledFilter, FilterLabel, FilterBox } from './Filter.styled';
import { Button } from 'components/ContactForm/Button';
const inputId = shortid.generate();

export const Filter = ({ onChange, value, onClear }) => (
  <>
    <FilterBox>
      <StyledFilter
        id={inputId}
        type="text"
        placeholder="Name"
        value={value}
        onChange={onChange}
      />
      <FilterLabel htmlFor={inputId}>Find contacts by name</FilterLabel>
      <Button type="button" text="X" onClick={onClear} />
    </FilterBox>
  </>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onClear: PropTypes.func,
};
