import React, { useState } from 'react';

import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandIcon from '@material-ui/icons/ExpandMore';

import Button from '../Button';
import Text from '../Text';

function getLabelFromValue(options, value) {
  const matchingItem = options.find(o => o?.value === value);
  return matchingItem?.label;
}

export default function OptionFilter({
  label,
  options = [],
  multiple = false,
  value,
  onChange,
  openDirection = 'right',
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filter, setFilter] = useState('');

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFilter('');
  };

  const showChip = multiple ? value?.length > 0 : Boolean(value);
  const chipLabel = multiple ? value?.length : 1;

  const visibleOptions = options.filter(
    o => o?.value?.includes(filter) || o?.label?.includes(filter),
  );

  return (
    <div>
      <Button onClick={handleClick} endIcon={<ExpandIcon />}>
        {label}
        {showChip && (
          <Chip
            size="small"
            label={chipLabel}
            style={{ marginLeft: 8 }}
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
        id={`${label}-filter-menu`}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div style={{ width: 340 }}>
          <div style={{ padding: '0 8px' }}>
            <Button
              display="text"
              style={{ float: 'right', marginBottom: 2 }}
            >
              Clear filters
            </Button>
            <TextField
              style={{ marginBottom: 8 }}
              variant="outlined"
              fullWidth
              value={filter}
              onChange={e => setFilter(e.target.value)}
              InputProps={{
                startAdornment: (
                  <div style={{ marginLeft: 8 }}>
                    {value.map(optionGuid => (
                      <Chip
                        key={optionGuid}
                        style={{ marginRight: 4, marginBottom: 2 }}
                        label={getLabelFromValue(options, optionGuid)}
                      />
                    ))}
                  </div>
                ),
              }}
            />
          </div>
          <Divider />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {visibleOptions.map(option => {
              const isChecked = multiple
                ? value.includes(option?.value)
                : value === option?.value;
              const optionLabel = option?.label || 'Unlabeled filter';
              return (
                <FormControlLabel
                  style={{ marginLeft: 0 }}
                  label={<Text variant="body2">{optionLabel}</Text>}
                  control={
                    <Checkbox
                      size="small"
                      checked={isChecked}
                      onChange={() => {
                        if (multiple) {
                          if (isChecked) {
                            onChange(
                              value.filter(o => o !== option?.value),
                            );
                          } else {
                            onChange([...value, option?.value]);
                          }
                        } else {
                          if (isChecked) {
                            onChange(null);
                          } else {
                            onChange(option?.value);
                          }
                        }
                      }}
                      name={`Checkbox for ${optionLabel}`}
                    />
                  }
                />
              );
            })}
          </div>
        </div>
      </Menu>
    </div>
  );
}
