import styled from 'styled-components';

export const SectionTitle = styled.h1`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.primary};
`;
export const SectionContainer = styled.section`
  padding-left: ${p => p.theme.space[5]}px;
`;
