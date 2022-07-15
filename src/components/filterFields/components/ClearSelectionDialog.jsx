import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import StandardDialog from '../../StandardDialog';
import Text from '../../Text';
import Button from '../../Button';

export default function ClearSelectionDialog({
  open,
  onClose,
  onClearSelection,
}) {
  const handleClearSelection = () => {
    onClearSelection();
    onClose();
  };

  return (
    <StandardDialog
      open={open}
      onClose={onClose}
      title="Clear selection"
    >
      <DialogContent>
        <Text style={{ paddingBottom: 20 }}>
          Your selection must be cleared before filters can be
          updated.
        </Text>
      </DialogContent>
      <DialogActions style={{ padding: '0px 24px 24px 24px' }}>
        <Button display="basic" onClick={onClose}>
          Cancel
        </Button>
        <Button display="primary" onClick={handleClearSelection}>
          Clear selection
        </Button>
      </DialogActions>
    </StandardDialog>
  );
}
