import styled from 'styled-components';

export const StyledFilter = styled.input`
  cursor: pointer;
  background-color: ${p => p.theme.colors.transparent};
  border: ${p => `2px solid ${p.theme.colors.accentDark}`};
  height: 30px;
  width: 225px;
  padding: ${p => p.theme.space[0]}px;
  font-size: 1.1em;
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.transparent};
  transition: all 300ms;
  transition-timing-function: ease-out;
  transform: scale(0.15, 1);
  transform-origin: left;
  border-radius: ${p => p.theme.radii.round};
  &:focus,  &: not(: placeholder-shown) {
    border-radius: 24px;
    transform: scale(1, 1);
    padding: 0 12px;
    outline: none;
    color: ${p => p.theme.colors.secondary};
    ~ button {
      display: block;
    }
  }
`;
export const FilterLabel = styled.label`
  color: ${p => p.theme.colors.secondary};
  cursor: pointer;
  position: relative;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  ${StyledFilter}:focus ~ & {
    color: ${p => p.theme.colors.primary};
    font-weight: 500;
  }
  &:after {
    content: '';
    border-top: ${p => `3px solid ${p.theme.colors.accentDark}`};
    width: 15px;
    display: block;
    position: absolute;
    right: -47px;
    bottom: -3px;
    transform: rotate(45deg);
    transition: all 0.2s;
    transition-timing-function: ease-out;
    ${StyledFilter}:focus ~ & {
      content: '';
      border-top: ${p => `3px solid ${p.theme.colors.accentDark}`};
      display: block;
      position: absolute;
      right: -95%;
      bottom: 45%;
      transform: rotate(45deg);
    }
    ${StyledFilter}:not(:placeholder-shown) ~ & {
      content: '';
      border-top: ${p => `3px solid ${p.theme.colors.accentDark}`};
      display: block;
      position: absolute;
      right: -95%;
      bottom: 45%;
      transform: rotate(45deg);
    }
  }
  &:before {
    content: '';
    border-top: ${p => `3px solid ${p.theme.colors.accentDark}`};
    width: 0px;
    display: block;
    position: absolute;
    right: -2px;
    bottom: 19px;
    transform: rotate(-45deg);
    transition: all 0.2s;
    transition-timing-function: ease-out;
    transition-delay: 0s;
    ${StyledFilter}:focus ~ & {
      right: -95%;
      bottom: 45%;
      width: 15px;
      transition: all 0.1s;
      transition-timing-function: ease-in;
      transition-delay: 0.2s;
    }
    ${StyledFilter}:not(:placeholder-shown) ~ & {
      right: -95%;
      bottom: 45%;
      width: 15px;
      transition: all 0.1s;
      transition-timing-function: ease-in;
      transition-delay: 0.2s;
    }
  }
`;

export const FilterBox = styled.div`
  border: ${p => `2px solid ${p.theme.colors.transparent}`};
  border-radius: ${p => p.theme.radii.large};
  padding: ${p => p.theme.space[3]}px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  display: flex;
  width: 550px;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  flex-direction: row-reverse;
  justify-content: left;
  position: relative;
  & button {
    display: none;
    position: absolute;
    width: 30px;
    height: 30px;
    padding: ${p => p.theme.space[0]}px;
    top: 0;
    right: 38px;
    background-color: ${p => p.theme.colors.transparent};
    box-shadow: none;
    color: ${p => p.theme.colors.transparent};
    background-image: none;
    &:hover,
    &:focus {
      box-shadow: none;
    }
  }
`;
