import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import usePostTask from '../../../models/tasks/usePostTask';
import StandardDialog from '../../../components/StandardDialog';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import Alert from '../../../components/Alert';

export default function CreateTaskDialog({
  open,
  onClose,
  selectedImages,
  missionGuid,
  message,
}) {
  const { postTask, isLoading, error } = usePostTask();

  function handleClose() {
    onClose();
  }

  const displayMessage =
    message ||
    `Create new task from ${selectedImages?.length} images?`;

  return (
    <StandardDialog
      open={open}
      onClose={handleClose}
      title="Create task"
      PaperProps={{ style: { width: 400 } }}
    >
      <DialogContent>
        <Text variant="body2" style={{ marginBottom: 12 }}>
          {displayMessage}
        </Text>
        {error && (
          <Alert
            style={{ marginTop: 16, marginBottom: 8 }}
            severity="error"
            title="Failed to create task"
          >
            {error}
          </Alert>
        )}
      </DialogContent>
      <DialogActions style={{ padding: '0px 24px 24px 24px' }}>
        <Button display="basic" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          display="primary"
          loading={isLoading}
          disabled={isLoading}
          onClick={async () => {
            const operations = [
              {
                op: 'union',
                path: '/assets',
                value: selectedImages,
              },
            ];
            const result = await postTask(missionGuid, operations);
            if (result?.status === 200) handleClose();
          }}
        >
          Create task
        </Button>
      </DialogActions>
    </StandardDialog>
  );
}
