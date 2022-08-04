import React, { useState } from 'react';
import { isEmpty } from 'lodash-es';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { startOfDay, endOfDay, format } from 'date-fns';

import useOnEnter from '../../hooks/useOnEnter';
import { isValidDate } from '../../utils/dateUtils';
import Button from '../Button';
import FilterButton from './components/FilterButton';

const dateFormat = 'yyyy-MM-dd'; // US: MM/dd/yyyy

function deriveChipLabel(value) {
  const gte =
    isValidDate(value?.gte) && format(value?.gte, dateFormat);
  const lte =
    isValidDate(value?.lte) && format(value?.lte, dateFormat);

  if (gte && lte) {
    return `${gte} to ${lte}`;
  } else if (gte) {
    return `After ${gte}`;
  } else if (lte) {
    return `Before ${lte}`;
  } else {
    return '';
  }
}

export default function DateFilter({
  label,
  value,
  onChange,
  buttonStyle = {},
  ...rest
}) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const startInputId = `${label}-start-date-input`;
  const endInputId = `${label}-start-date-input`;

  function updateFilter() {
    const newFilter = {};
    if (startDate) newFilter.gte = startDate;
    if (endDate) newFilter.lte = endDate;
    onChange(newFilter);
  }

  useOnEnter(e => {
    if ([startInputId, endInputId].includes(e.target.id))
      updateFilter();
  });

  return (
    <FilterButton
      buttonLabel={label}
      buttonProps={{ style: buttonStyle }}
      showChip={!isEmpty(value)}
      chipLabel={deriveChipLabel(value)}
      chipStyles={{ textTransform: 'none' }}
      {...rest}
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
          onClick={() => {
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
            format={dateFormat}
            margin="normal"
            id={`${label}-start-date`}
            label="Start date"
            value={startDate}
            onChange={nextStartDate => {
              const adjustedStartDate = startOfDay(nextStartDate);
              setStartDate(adjustedStartDate);
            }}
            style={{ margin: 0 }}
            KeyboardButtonProps={{
              'aria-label': `Change ${label} start date`,
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format={dateFormat}
            margin="normal"
            id={`${label}-end-date`}
            style={{ marginTop: 0 }}
            label="End date"
            value={endDate}
            onChange={nextEndDate => {
              const adjustedEndDate = endOfDay(nextEndDate);
              setEndDate(adjustedEndDate);
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
