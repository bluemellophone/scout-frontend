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

export default function MultipleOptionFilter({
  label,
  options = [],
  value,
  onChange,
  openDirection = 'right',
  buttonStyle = {},
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

  const showChip = value?.length > 0;

  const visibleOptions = options.filter(o => {
    const filterMatch = filter.toUpperCase();
    const valueMatch = o?.value?.toUpperCase(); // what if value is not a string?
    const labelMatch = o?.label?.toUpperCase();
    return (
      valueMatch.includes(filterMatch) ||
      labelMatch.includes(filterMatch)
    );
  });

  return (
    <div>
      <Button
        onClick={handleClick}
        endIcon={<ExpandIcon />}
        style={buttonStyle}
      >
        {label}
        {showChip && (
          <Chip
            size="small"
            label={value?.length}
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
            {/* <Button
              display="text"
              style={{ float: 'right', marginBottom: 2 }}
            >
              Clear filters
            </Button> */}
            <TextField
              style={{ marginBottom: 8 }}
              variant="outlined"
              fullWidth
              value={filter}
              onChange={e => setFilter(e.target.value)}
              InputProps={{
                style: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },
                size: 'small',
                startAdornment: (
                  <div style={{ marginTop: 8 }}>
                    {value.map(optionValue => (
                      <Chip
                        key={optionValue}
                        style={{ marginRight: 4, marginBottom: 4 }}
                        label={getLabelFromValue(
                          options,
                          optionValue,
                        )}
                        onDelete={() => {
                          onChange(
                            value.filter(o => o !== optionValue),
                          );
                        }}
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
              const isChecked = value.includes(option?.value);
              const optionLabel = option?.label || 'Unlabeled filter';
              return (
                <FormControlLabel
                  key={option?.value}
                  style={{ marginLeft: 0 }}
                  label={<Text variant="body2">{optionLabel}</Text>}
                  control={
                    <Checkbox
                      size="small"
                      checked={isChecked}
                      onChange={() => {
                        if (isChecked) {
                          onChange(
                            value.filter(o => o !== option?.value),
                          );
                        } else {
                          onChange([...value, option?.value]);
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
