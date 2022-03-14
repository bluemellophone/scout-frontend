import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import useOnEnter from '../../hooks/useOnEnter';
import Button from '../Button';
import FilterButton from './components/FilterButton';

const comparators = [
  {
    label: 'Greater than',
    value: 'gt',
  },
  {
    label: 'Greater than or equal to',
    value: 'gte',
  },
  {
    label: 'Less than',
    value: 'lt',
  },
  {
    label: 'Less than or equal to',
    value: 'lte',
  },
];

export default function IntegerFilter({
  label,
  onChange,
  openDirection = 'left',
  buttonStyle = {},
}) {
  const [integerInput, setIntegerInput] = useState('');
  const [comparator, setComparator] = useState('gt');

  const inputId = `${label}-number-input`;

  function updateFilter() {
    onChange({ [comparator]: parseInt(integerInput, 10) });
  }

  useOnEnter(e => {
    if (e.target.id === inputId) updateFilter();
  });

  return (
    <FilterButton
      buttonLabel={label}
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
            setIntegerInput('');
            onChange({});
          }}
        >
          Clear filter
        </Button>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FormControl style={{ width: '100%' }}>
            <Select
              id="comparator-selector"
              variant="outlined"
              onChange={e => setComparator(e.target.value)}
              value={comparator}
            >
              {comparators.map(c => (
                <MenuItem key={c.label} value={c.value}>
                  {c.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            autoFocus
            id={inputId}
            placeholder="Count"
            variant="outlined"
            value={integerInput}
            onChange={e => {
              const inputValue = e.target.value;
              const isPositiveInteger = /^[0-9]*[1-9][0-9]*$/.test(
                inputValue,
              );
              if (isPositiveInteger || inputValue === '') {
                setIntegerInput(e.target.value);
              }
            }}
            style={{
              width: 148,
              marginLeft: 8,
            }}
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
            onClick={updateFilter}
          >
            Go
          </Button>
        </div>
      </div>
    </FilterButton>
  );
}
