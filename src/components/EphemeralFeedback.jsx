import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

import Alert from './Alert';

export default function EphemeralFeedback({
  severity = 'success',
  message,
  open,
  setOpen,
  title,
  ...rest
}) {
  return (
    <Snackbar
      open={open}
      onClose={(_, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
      }}
      autoHideDuration={6000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...rest}
    >
      <Alert title={title} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
