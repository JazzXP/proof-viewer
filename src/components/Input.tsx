import styled from 'styled-components';
import theme from '../Theme';

export const Input = styled.input`
  background: ${theme.input.background};
  color: ${theme.input.foreground};
  border: 1px solid ${theme.input.foreground};
  border-radius: 5px;
  padding: 5px;
  &::placeholder {
    color: ${theme.input.placeholder};
  }
`;
