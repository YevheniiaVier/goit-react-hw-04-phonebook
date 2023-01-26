import styled from 'styled-components';

export const StyledContacts = styled.ul`
  width: 600px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  margin: ${p => p.theme.space[0]}px;
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
`;
