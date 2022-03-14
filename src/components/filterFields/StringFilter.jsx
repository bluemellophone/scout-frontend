import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

import useOnEnter from '../../hooks/useOnEnter';
import Button from '../Button';
import FilterButton from './components/FilterButton';

export default function StringFilter({
  label,
  value,
  onChange,
  openDirection = 'left',
  buttonStyle = {},
}) {
  const [internalValue, setInternalValue] = useState('');

  const buttonLabel = value ? `${label}: ${value}` : label;
  const inputId = `${label}-input`;

  useOnEnter(e => {
    if (e.target.id === inputId) {
      onChange(internalValue);
    }
  });

  return (
    <FilterButton
      buttonLabel={buttonLabel}
      buttonProps={{ style: buttonStyle }}
      openDirection={openDirection}
    >
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
          }}
        >
          Clear filter
        </Button>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            autoFocus
            id={inputId}
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
              flexShrink: 0,
            }}
            onClick={() => {
              onChange(internalValue);
            }}
          >
            Go
          </Button>
        </div>
      </div>
    </FilterButton>
  );
}
