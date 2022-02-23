import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function TaskDropdown({ tasks, value, onChange }) {
  const safeTasks = tasks || [];

  return (
    <FormControl variant="outlined" style={{ width: '100%' }}>
      <InputLabel id="select-roles-label">Task</InputLabel>
      <Select
        id="task-selector"
        variant="outlined"
        onChange={e => onChange(e.target.value)}
        value={value}
        style={{ width: 360 }}
        MenuProps={{ style: { maxHeight: 440 } }}
      >
        {safeTasks.map(u => (
          <MenuItem key={u?.guid} value={u?.guid}>
            {u?.title || 'Untitled task'}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
