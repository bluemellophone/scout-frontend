import React from 'react';

import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Cancel';

export default function UserChips({
  users = [],
  deletable = false,
  onDelete,
  style,
  children,
  invincibleLabel = 'owner',
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
        {users.map(user => {
          const userIsDeletable = user?.invincible
            ? false
            : deletable;
          const baseUserLabel = user?.full_name || user?.email;
          const userLabel = user?.invincible
            ? `${baseUserLabel} (${invincibleLabel})`
            : baseUserLabel;
          return (
            <Chip
              key={user?.guid}
              style={{
                marginTop: 4,
                marginRight: 4,
              }}
              label={userLabel}
              deleteIcon={<DeleteIcon />}
              onDelete={
                userIsDeletable ? () => onDelete(user) : undefined
              }
            />
          );
        })}
        {children}
      </div>
    </div>
  );
}
