import React, { useState } from 'react';

import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandIcon from '@material-ui/icons/ExpandMore';
import DeleteChipIcon from '@material-ui/icons/Cancel';

import useGetKeywords from '../../models/keywords/useGetKeywords';
import { getKeywordColor } from '../../utils/colorUtils';
import Button from '../Button';

function getValueFromGuid(options, guid) {
  const matchingItem = options.find(o => o?.guid === guid);
  return matchingItem?.value;
}

export default function TagOptionFilter({
  label,
  value,
  onChange,
  openDirection = 'right',
  buttonStyle = {},
}) {
  const { data: keywordOptions } = useGetKeywords();

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
  const safeKeywordOptions = keywordOptions || [];

  const visibleOptions = safeKeywordOptions.filter(o => {
    const filterMatch = filter.toUpperCase();
    const valueMatch = o?.value?.toUpperCase(); // what if value is not a string?
    const guidMatch = o?.guid?.toUpperCase();
    return (
      valueMatch.includes(filterMatch) ||
      guidMatch.includes(filterMatch)
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
                    {value.map(optionGuid => (
                      <Chip
                        key={optionGuid}
                        style={{
                          marginRight: 4,
                          marginBottom: 4,
                          color: 'white',
                          backgroundColor: getKeywordColor(
                            optionGuid,
                          ),
                        }}
                        label={getValueFromGuid(
                          safeKeywordOptions,
                          optionGuid,
                        )}
                        onDelete={() => {
                          onChange(
                            value.filter(o => o !== optionGuid),
                          );
                        }}
                        deleteIcon={
                          <DeleteChipIcon
                            style={{ color: 'white' }}
                          />
                        }
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
              const isChecked = value.includes(option?.guid);
              const optionLabel = option?.value || 'Unlabeled filter';
              return (
                <FormControlLabel
                  key={option?.guid}
                  style={{ marginLeft: 0 }}
                  label={
                    <Chip
                      label={optionLabel}
                      style={{
                        color: 'white',
                        backgroundColor: getKeywordColor(
                          option?.guid,
                        ),
                      }}
                    />
                  }
                  control={
                    <Checkbox
                      size="small"
                      checked={isChecked}
                      onChange={() => {
                        if (isChecked) {
                          onChange(
                            value.filter(o => o !== option?.guid),
                          );
                        } else {
                          onChange([...value, option?.guid]);
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
