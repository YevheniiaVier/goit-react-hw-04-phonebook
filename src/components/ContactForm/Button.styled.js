import styled from 'styled-components';

export const StyledButton = styled.button`
width: 200px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.large};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  background-image: radial-gradient(
      93% 87% at 87% 89%,
      rgba(0, 0, 0, 0.23) 0%,
      transparent 86.18%
    ),
    radial-gradient(
      66% 66% at 26% 20%,
      rgba(255, 255, 255, 0.55) 0%,
      rgba(255, 255, 255, 0) 69.79%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: inset -3px -3px 9px rgba(255, 255, 255, 0.25),
    inset 0px 3px 9px rgba(255, 255, 255, 0.3),
    inset 0px 1px 1px rgba(255, 255, 255, 0.6),
    inset 0px -8px 36px rgba(0, 0, 0, 0.3),
    inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover,
  &:focus {
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.4);
      2px 2px 5px 2px rgba(0, 0, 0, 0);
  }

  transition: background-color 300ms 100ms;
`;
