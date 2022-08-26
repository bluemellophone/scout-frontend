import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddIcon from '@material-ui/icons/Add';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import ExpandIcon from '@material-ui/icons/ExpandMore';
import ViewIcon from '@material-ui/icons/Visibility';

const baseStyles = {
  borderRadius: 3,
  textTransform: 'none',
};

const iconPropsMap = {
  add: {
    startIcon: <AddIcon />,
  },
  back: {
    startIcon: <BackIcon />,
  },
  expand: {
    endIcon: <ExpandIcon />,
  },
  view: {
    startIcon: <ViewIcon />,
  },
  none: {},
};

const getDisplayPropsMap = theme => ({
  primary: {
    variant: 'contained',
    color: 'primary',
  },
  danger: {
    variant: 'contained',
    style: {
      background: theme.palette.error.main,
      color: theme.palette.common.white,
    },
  },
  neutral: {
    variant: 'outlined',
  },
  inline: {
    variant: 'text',
    style: {
      padding: '4px 16px',
      textTransform: 'uppercase',
    },
  },
  tag: {
    variant: 'outlined',
    size: 'small',
    style: {
      borderRadius: 16,
      height: 32,
      margin: '4px 4px 0 0',
    },
  },
  text: {
    style: {
      textTransform: 'none',
      background: 'none',
      border: 'none',
      padding: '0',
      color: theme.palette.text.primary,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      fontSize: 14,
      minWidth: 'unset',
      width: 'fit-content',
    },
  },
});

export default function Button({
  children,
  display = 'primary',
  icon = 'none',
  loading = false,
  style,
  disabled,
  size,
  ...rest
}) {
  const theme = useTheme();
  const displayPropsMap = getDisplayPropsMap(theme);
  const displayProps = displayPropsMap?.[display];
  const displayStyles = displayProps?.style || {};
  const compositeStyles = {
    ...baseStyles,
    ...displayStyles,
    ...style,
  };
  const iconProps = iconPropsMap?.[icon];
  const compositeProps = { ...displayProps, ...iconProps };

  if (disabled) {
    delete compositeStyles.backgroundColor;
    delete compositeStyles.color;
  }

  return (
    <MuiButton
      {...compositeProps}
      disabled={disabled}
      style={compositeStyles}
      size={size}
      {...rest}
    >
      {loading ? (
        <CircularProgress
          size={24}
          style={{ color: theme.palette.common.white }}
        />
      ) : (
        children
      )}
    </MuiButton>
  );
}
