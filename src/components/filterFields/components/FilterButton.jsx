import React, { useState } from 'react';

import Menu from '@material-ui/core/Menu';
import Chip from '@material-ui/core/Chip';

import Button from '../../ButtonNew';
import ClearSelectionDialog from './ClearSelectionDialog';

export default function FilterButton({
  buttonLabel,
  buttonProps = {},
  showChip = false,
  chipLabel,
  chipProps = {},
  chipStyles = {},
  openDirection = 'left',
  onOpenMenu = Function.prototype,
  onCloseMenu = Function.prototype,
  onClearSelection = Function.prototype,
  showClearSelectionWarning = false,
  children,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [warningDialogOpen, setWarningDialogOpen] = useState(false);

  const handleClick = event => {
    if (showClearSelectionWarning) {
      setWarningDialogOpen(true);
    } else {
      setAnchorEl(event.currentTarget);
      onOpenMenu();
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    onCloseMenu();
  };

  return (
    <div>
      <ClearSelectionDialog
        open={warningDialogOpen}
        onClose={() => setWarningDialogOpen(false)}
        onClearSelection={onClearSelection}
      />
      <Button
        display="neutral"
        icon="expand"
        onClick={handleClick}
        {...buttonProps}
      >
        {buttonLabel}
        {showChip && (
          <Chip
            size="small"
            label={chipLabel}
            style={{ marginLeft: 8, ...chipStyles }}
            {...chipProps}
          />
        )}
      </Button>
      <Menu
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: openDirection,
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: openDirection,
        }}
        id={`${buttonLabel}-filter-menu`}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div style={{ width: 340 }}>{children}</div>
      </Menu>
    </div>
  );
}
