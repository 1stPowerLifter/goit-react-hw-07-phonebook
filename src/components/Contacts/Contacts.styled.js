import styled from 'styled-components';

export const DeleteContact = styled.button`
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
  }
  `