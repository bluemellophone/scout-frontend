import React from 'react';

import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Cancel';

export default function UserChips({
  users = [],
  deletable = false,
  onDelete,
  style,
  children,
  ...rest
}) {
  return (
    <div>
      <div
        style={{
          marginTop: 4,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          ...style,
        }}
        {...rest}
      >
        {users.map(user => (
          <Chip
            key={user?.guid}
            style={{
              marginTop: 4,
              marginRight: 4,
            }}
            label={user?.full_name}
            deleteIcon={<DeleteIcon />}
            onDelete={deletable ? () => onDelete(user) : undefined}
          />
        ))}
        {children}
      </div>
    </div>
  );
}
