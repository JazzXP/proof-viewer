import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import theme from '../Theme';
import { Button, ButtonProps } from './Button';

export interface IconButtonProps extends ButtonProps {
  icon: IconDefinition;
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <Button onClick={props.onClick} disabled={props.disabled}>
      <FontAwesomeIcon
        icon={props.icon}
        color={theme.button.foreground(props)}
        style={{ paddingRight: props.children ? 5 : 0 }}
      />
      {props.children}
    </Button>
  );
};
