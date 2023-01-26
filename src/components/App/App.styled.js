import styled from 'styled-components';

export const Container = styled.div`
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 900px;
`;
