import React from 'react';

import Popover from '@material-ui/core/Popover';

import ActionsMenuList from './ActionsMenuList';
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
      <ActionsMenuList>
        <GlobalActionsMenuItems
          noDivider
          closePopover={closePopover}
        />
      </ActionsMenuList>
    </Popover>
  );
}
