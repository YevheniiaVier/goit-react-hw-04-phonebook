import styled from 'styled-components';

export const NotificationText = styled.p`
  padding: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.accentDark};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const NotificationImg = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 300px;
  display: block;
  margin: 0 auto;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.transparent};
`;

export const NotificationBox = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  position: relative;
`;
