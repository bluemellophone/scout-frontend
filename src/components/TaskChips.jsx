import React from 'react';

import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Cancel';

import Link from './Link';

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
          <Link
            key={task?.guid}
            href={`/tasks/${task?.guid}`}
            noUnderline
          >
            <Chip
              style={{
                marginTop: 4,
                marginRight: 4,
                cursor: 'pointer',
              }}
              label={label}
              deleteIcon={<DeleteIcon />}
              onDelete={deletable ? () => onDelete(task) : undefined}
              size={chipSize}
            />
          </Link>
        );
      })}
      {children}
    </div>
  );
}
