import React, { useState } from 'react';
import { get, keys, isEmpty, isNumber } from 'lodash-es';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import useOnEnter from '../../hooks/useOnEnter';
import Button from '../ButtonNew';
import FilterButton from './components/FilterButton';

const comparators = [
  {
    label: 'Greater than',
    symbol: '>',
    value: 'gt',
  },
  {
    label: 'Greater than or equal to',
    symbol: '≥',
    value: 'gte',
  },
  {
    label: 'Less than',
    symbol: '<',
    value: 'lt',
  },
  {
    label: 'Less than or equal to',
    symbol: '≤',
    value: 'lte',
  },
  {
    label: 'Equals',
    symbol: '=',
    value: 'eq',
  },
];

function deriveChipLabel(value) {
  const comparatorType = get(keys(value), 0);
  const comparator = value?.[comparatorType];
  const comparatorSymbol = comparators.find(
    c => c.value === comparatorType,
  )?.symbol;
  if (!isNumber(comparator) || !comparatorSymbol) return '';
  return `${comparatorSymbol} ${comparator}`;
}

export default function IntegerFilter({
  label,
  value,
  onChange,
  buttonStyle = {},
  ...rest
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
      showChip={!isEmpty(value)}
      chipLabel={deriveChipLabel(value)}
      {...rest}
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
            margin: '0 0 2px 2px',
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
              // const isPositiveInteger = /^[0-9]*[1-9][0-9]*$/.test(
              //   inputValue,
              // );
              const isNotNegative = /^[0-9]*[0-9]*$/.test(inputValue);
              if (isNotNegative || inputValue === '') {
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
              padding: 16,
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
