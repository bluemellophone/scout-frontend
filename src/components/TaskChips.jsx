import React from 'react';

import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Cancel';

export default function TaskChips({
  tasks = [],
  deletable = false,
  onDelete,
  style,
  children,
  chipSize = 'medium',
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
        {tasks.map(task => {
          const label = task?.title || 'Untitled task';
          return (
            <Chip
              key={task?.guid}
              style={{
                marginTop: 4,
                marginRight: 4,
              }}
              label={label}
              deleteIcon={<DeleteIcon />}
              onDelete={deletable ? () => onDelete(task) : undefined}
              size={chipSize}
            />
          );
        })}
        {children}
      </div>
    </div>
  );
}
