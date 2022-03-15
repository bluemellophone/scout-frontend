import React, { useState } from 'react';
import { parseISO, format } from 'date-fns';

import DateFnsUtils from '@date-io/date-fns';
import
{
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import useOnEnter from '../../hooks/useOnEnter';
import Button from '../Button';
import Text from '../Text';
import FilterButton from './components/FilterButton';

export default function DateFilter({
  label,
  onChange,
  openDirection = 'left',
  buttonStyle = {},
})
{
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const startInputId = `${label}-start-date-input`;
  const endInputId = `${label}-start-date-input`;

  function updateFilter()
  {
    onChange({});
  }

  useOnEnter(e =>
  {
    if ([startInputId, endInputId].includes(e.target.id)) updateFilter();
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
          padding: '0px 20px 8px 20px',
        }}
      >
        <Button
          display="text"
          style={{
            float: 'right',
          }}
          onClick={() =>
          {
            setStartDate(null);
            setEndDate(null);
            onChange({});
          }}
        >
          Clear filter
        </Button>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy-MM-dd" // US: MM/dd/yyyy
            margin="normal"
            id={`${label}-start-date`}
            label="Start date"
            value={startDate}
            onChange={nextStartDate =>
            {
              setStartDate(nextStartDate);
            }}
            style={{ margin: 0 }}
            KeyboardButtonProps={{
              'aria-label': `Change ${label} start date`,
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy-MM-dd" // US: MM/dd/yyyy
            margin="normal"
            id={`${label}-end-date`}
            style={{ marginTop: 0 }}
            label="End date"
            value={endDate}
            onChange={nextEndDate =>
            {
              setEndDate(nextEndDate);
            }}
            KeyboardButtonProps={{
              'aria-label': `Change ${label} end date`,
            }}
          />
        </MuiPickersUtilsProvider>
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
    </FilterButton>
  );
}
