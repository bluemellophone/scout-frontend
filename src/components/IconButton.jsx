import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import MuiIconButton from '@material-ui/core/IconButton';

export default function IconButton({ active, style = {}, ...rest }) {
  const theme = useTheme();

  const baseStyles = {
    borderRadius: 3,
    border: `1px solid rgba(0, 0, 0, 0.23)`,
    color: theme.palette.text.primary,
    marginLeft: 4,
    backgroundColor: active ? theme.palette.action.selected : 'unset',
  };

  return (
    <MuiIconButton
      style={{
        ...baseStyles,
        ...style,
      }}
      {...rest}
    />
  );
}
