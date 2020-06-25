import styled from 'styled-components';
import { Link as lnk } from 'react-router-dom';
import theme from '../Theme';

export const Link = styled(lnk)`
  color: ${theme.button.foreground};
`;
