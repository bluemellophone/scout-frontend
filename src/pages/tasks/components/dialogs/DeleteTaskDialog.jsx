import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Alert from '../../../../components/Alert';
import Button from '../../../../components/Button';
import Text from '../../../../components/Text';
import StandardDialog from '../../../../components/StandardDialog';
import useDeleteTask from '../../../../models/tasks/useDeleteTask';

export default function DeleteTaskDialog({
  open,
  onClose,
  taskGuid,
}) {
  const theme = useTheme();
  const { isLoading, deleteTask, error } = useDeleteTask();

  return (
    <StandardDialog open={open} onClose={onClose} title="Delete task">
      <DialogContent>
        <Text variant="body2">
          Are you sure you want to delete this task? This action
          cannot be undone.
        </Text>
        {error && (
          <Alert
            style={{ marginTop: 16, marginBottom: 8 }}
            severity="error"
            title="Server error"
          >
            {error}
          </Alert>
        )}
      </DialogContent>
      <DialogActions>
        <Button display="basic" onClick={onClose} id="CANCEL" />

        <Button
          disabled={isLoading}
          loading={isLoading}
          onClick={async () => {
            const result = await deleteTask(taskGuid);
            if (result?.status === 200) onClose();
          }}
          style={{
            background: theme.palette.error.main,
            color: theme.palette.common.white,
          }}
        >
          Delete task
        </Button>
      </DialogActions>
    </StandardDialog>
  );
}
