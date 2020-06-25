import React, { createRef } from 'react';
import { ListControl, ListControlProps, IconButton } from './';
import { faMinus, faImage } from '@fortawesome/free-solid-svg-icons';

export interface ListControlWithButtonsProps extends ListControlProps {
  onRemove: (item?: string) => void;
  onGoTo: (item?: string) => void;
}

export const ListControlWithButtons = (props: ListControlWithButtonsProps) => {
  const ref = createRef<HTMLSelectElement>();

  const getSelectedItem = () => {
    if (ref.current) {
      return props.items[ref.current.selectedIndex];
    }
    return undefined;
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
      }}
    >
      <ListControl ref={ref} items={props.items} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <IconButton icon={faMinus} onClick={() => props.onRemove(getSelectedItem())} />
        <IconButton icon={faImage} onClick={() => props.onGoTo(getSelectedItem())} />
      </div>
    </div>
  );
};
