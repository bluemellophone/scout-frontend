import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DownIcon from '@material-ui/icons/ArrowDropDown';

import Button from './Button';

export default function ButtonMenu({
  children,
  buttonId,
  actions,
  ...rest
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick} endIcon={<DownIcon />} {...rest}>
        {children}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={buttonId}
      >
        {actions.map(action => (
          <MenuItem
            key={action.id}
            onClick={e => {
              action.onClick(e);
              handleClose();
            }}
          >
            {action.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
