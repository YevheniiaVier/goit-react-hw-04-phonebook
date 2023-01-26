import styled from 'styled-components';

export const StyledForm = styled.form`
  padding-top: ${p => p.theme.space[6]}px};
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[5]}px};
  :invalid {
    button {
      background-color: ${p => p.theme.colors.darkGrey};
    }
  }
  button {
    align-self: center;
  }
`;
export const StyledInput = styled.input`
  outline: none;
  cursor: pointer;
  border: ${p => `2px solid ${p.theme.colors.accentDark}`};
  border-radius: ${p => p.theme.radii.large};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  width: 100%;
  padding: ${p => p.theme.space[3]}px};
  font-size: ${p => p.theme.fontSizes.l};
  background-color: ${p => p.theme.colors.transparent};
  color: ${p => p.theme.colors.primary};
`;
export const StyledLabel = styled.label`
  position: absolute;
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes.l};
  top: 0;
  padding: ${p => p.theme.space[3]}px};
  transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out;
  ${StyledInput}:focus ~ & {
     top: -25px;
  font-size: ${p => p.theme.fontSizes.m};
  }
  ${StyledInput}:not(:placeholder-shown) ~ & {
     top: -25px;
  font-size: ${p => p.theme.fontSizes.m};
  }

`;
export const Box = styled.div`
  position: relative;
  padding: 0;
`;
