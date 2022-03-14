import React, { useState } from 'react';

import Menu from '@material-ui/core/Menu';
import Chip from '@material-ui/core/Chip';
import ExpandIcon from '@material-ui/icons/ExpandMore';

import Button from '../../Button';

export default function FilterButton({
  buttonLabel,
  buttonProps = {},
  showChip = false,
  chipLabel,
  chipProps = {},
  openDirection = 'left',
  onCloseMenu = Function.prototype,
  children,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    onCloseMenu();
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        endIcon={<ExpandIcon />}
        {...buttonProps}
      >
        {buttonLabel}
        {showChip && (
          <Chip
            size="small"
            label={chipLabel}
            style={{ marginLeft: 8 }}
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
