import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Button from './ButtonNew';
import Text from './Text';

export default function StandardDialog({
  open,
  title,
  titleId,
  children,
  onClose,
  closeDisabled = false,
  closeButtonLabel = 'CANCEL',
  closeButtonLoading = false,
  closeButtonStyle = {},
  closeButtonProps = {},
  onSubmit,
  submitDisabled = false,
  submitButtonLabel = 'SAVE',
  submitButtonLoading = false,
  submitButtonStyle = {},
  submitButtonProps = {},
  ...rest
}) {
  const closeActionDisabled = submitButtonLoading || closeDisabled;
  const submitActionDisabled = submitButtonLoading || submitDisabled;
  return (
    <Dialog open={open} onClose={onClose} {...rest}>
      <DialogTitle>
        <Text id={titleId} style={{ marginRight: 60 }}>
          {title}
        </Text>
        {onClose && (
          <IconButton
            style={{ position: 'absolute', top: 4, right: 12 }}
            aria-label="close"
            disabled={closeActionDisabled}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions style={{ padding: '4px 24px 24px 24px' }}>
        {onClose && (
          <Button
            display="inline"
            onClick={onClose}
            disabled={closeActionDisabled}
            loading={closeButtonLoading}
            {...closeButtonProps}
            style={closeButtonStyle}
          >
            {closeButtonLabel}
          </Button>
        )}
        {onSubmit && (
          <Button
            onClick={onSubmit}
            disabled={submitActionDisabled}
            loading={submitButtonLoading}
            {...submitButtonProps}
            style={{
              ...submitButtonStyle,
              textTransform: 'uppercase',
            }}
          >
            {submitButtonLabel}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
