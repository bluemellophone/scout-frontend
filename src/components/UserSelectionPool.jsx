import React, { useState, useMemo } from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import SearchIcon from '@material-ui/icons/Search';

import Text from './Text';
import UserChips from './UserChips';

export default function ChipPool({
  users = [],
  label,
  filterLabel,
  style = {},
  ...rest
}) {
  const [filter, setFilter] = useState('');

  const filteredUsers = useMemo(
    () => {
      if (filter === '') return users;
      return users.filter(
        u =>
          u?.full_name.includes(filter) || u?.email.includes(filter),
      );
    },
    [users, filter],
  );

  return (
    <div style={style}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 4,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>{label}</Text>
        <TextField
          size="small"
          placeholder="Filter"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" color="action" />
              </InputAdornment>
            ),
            style: { width: 180 },
          }}
        />
      </div>
      <div
        style={{
          // not in MUI theme for some reason, but this is the color of borders on other inputs
          border: '1px solid rgba(0,0,0,0.23)',
          borderRadius: 4,
          padding: '4px 12px 12px',
          overflow: 'scroll',
          height: 90,
        }}
      >
        <UserChips users={filteredUsers} {...rest} />
      </div>
    </div>
  );
}
