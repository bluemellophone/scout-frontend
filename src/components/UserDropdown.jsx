import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function UserDropdown({
  users,
  filterInactive = true,
  value,
  onChange,
}) {
  const safeUsers = users || [];
  const activeUsers = safeUsers.filter(
    u => u.full_name !== 'Inactivated User',
  );
  const displayedUsers = filterInactive ? activeUsers : safeUsers;

  return (
    <FormControl variant="outlined" style={{ width: '100%' }}>
      <InputLabel id="select-roles-label">User</InputLabel>
      <Select
        id="user-selector"
        variant="outlined"
        onChange={e => onChange(e.target.value)}
        value={value}
        style={{ width: 360 }}
        MenuProps={{ style: { maxHeight: 440 } }}
      >
        {displayedUsers.map(u => (
          <MenuItem key={u.guid} value={u.guid}>
            {`${u?.full_name || 'Unnamed User'} (${u?.email})`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
