import React from 'react';
import auth0Client from '../auth/Auth';
import { useSelector } from 'react-redux';
import { StoreShape } from '../state';
import styled from 'styled-components';
import theme from '../Theme';
import { Button } from './';

const StyledHeader = styled.header`
  background: ${theme.header.background};
  color: ${theme.header.foreground};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledSpan = styled.span`
  padding-right: 20px;
`;

export interface HeaderProps {
  history?: any;
}

export const Header = (props: HeaderProps) => {
  const name = useSelector<StoreShape, string>((state) => state.authData.profile?.name);
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };
  return (
    <StyledHeader>
      <StyledSpan>{name ?? 'Not logged in'}</StyledSpan>
      <Button onClick={signOut}>Sign Out</Button>
    </StyledHeader>
  );
};
