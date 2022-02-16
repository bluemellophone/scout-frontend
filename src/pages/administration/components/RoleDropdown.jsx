import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import roleSchema from '../constants/roleSchema';

export default function RoleDropdown({ value, onChange }) {
  return (
    <FormControl variant="outlined" style={{ width: '100%' }}>
      <InputLabel id="select-roles-label">Role</InputLabel>
      <Select
        id="user-roles-selector"
        variant="outlined"
        onChange={e => onChange(e.target.value)}
        value={value}
      >
        {roleSchema.map(o => (
          <MenuItem key={o.label} value={o.label}>
            {o.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
