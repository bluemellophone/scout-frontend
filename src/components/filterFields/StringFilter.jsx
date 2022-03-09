import React, { useState } from 'react';

import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import ExpandIcon from '@material-ui/icons/ExpandMore';

import Button from '../Button';

export default function StringFilter({
  label,
  value,
  onChange,
  openDirection = 'right',
  buttonStyle = {},
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [internalValue, setInternalValue] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuLabel = value ? `${label}: ${value}` : label;

  return (
    <div>
      <Button
        onClick={handleClick}
        endIcon={<ExpandIcon />}
        style={buttonStyle}
      >
        {menuLabel}
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
        id={`${label}-filter-menu`}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div style={{ width: 340 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0 8px',
            }}
          >
            <Button
              display="text"
              style={{
                float: 'right',
                marginBottom: 2,
                marginRight: 48,
              }}
              onClick={() => {
                onChange('');
                handleClose();
              }}
            >
              Clear filter
            </Button>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                placeholder={label}
                variant="outlined"
                fullWidth
                value={internalValue}
                onChange={e => setInternalValue(e.target.value)}
              />
              <Button
                display="primary"
                style={{
                  marginLeft: 4,
                  padding: '8px 12px',
                  minWidth: 12,
                  height: 'fit-content',
                }}
                onClick={() => {
                  onChange(internalValue);
                  handleClose();
                }}
              >
                Go
              </Button>
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}
