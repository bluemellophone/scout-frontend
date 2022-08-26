import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function EphemeralFeedback({
  severity = 'success',
  message,
  open,
  setOpen,
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
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
}
