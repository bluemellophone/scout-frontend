import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteChipIcon from '@material-ui/icons/Cancel';

import useGetKeywords from '../../models/keywords/useGetKeywords';
import { getKeywordColor } from '../../utils/colorUtils';
import Text from '../Text';
import FilterButton from './components/FilterButton';

function getValueFromGuid(options, guid) {
  const matchingItem = options.find(o => o?.guid === guid);
  return matchingItem?.value;
}

export default function TagOptionFilter({
  label,
  value,
  onChange,
  buttonStyle = {},
  ...rest
}) {
  const { data: keywordOptions } = useGetKeywords();

  const [filter, setFilter] = useState('');

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
    <FilterButton
      buttonLabel={label}
      showChip={value?.length > 0}
      chipLabel={value?.length}
      buttonProps={{ style: buttonStyle }}
      onCloseMenu={() => setFilter('')}
      {...rest}
    >
      {safeKeywordOptions.length > 0 ? (
        <div>
          <div style={{ padding: '0 8px' }}>
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
      ) : (
        <Text variant="body2" style={{ padding: 12 }}>
          This project has no tags.
        </Text>
      )}
    </FilterButton>
  );
}
