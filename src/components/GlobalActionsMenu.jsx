import React from 'react';

import Popover from '@material-ui/core/Popover';
import MenuList from '@material-ui/core/MenuList';

import GlobalActionsMenuItems from './GlobalActionsMenuItems';

export default function GlobalActionsMenu({ anchorEl, setAnchorEl }) {
  const closePopover = () => setAnchorEl(null);

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      PaperProps={{ style: { marginTop: -8 } }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorEl={anchorEl}
      onClose={closePopover}
    >
      <MenuList style={{ minWidth: 270 }}>
        <GlobalActionsMenuItems
          noDivider
          closePopover={closePopover}
        />
      </MenuList>
    </Popover>
  );
}
