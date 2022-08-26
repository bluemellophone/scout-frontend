import React from 'react';

import usePostTask from '../../../models/tasks/usePostTask';
import StandardDialog from '../../../components/StandardDialogNew';
import Text from '../../../components/Text';
import Alert from '../../../components/Alert';

export default function CreateTaskDialog({
  open,
  onClose,
  selectedImages,
  missionGuid,
  message,
}) {
  const { mutate: postTask, isLoading, error } = usePostTask();

  function handleClose() {
    onClose();
  }

  const displayMessage =
    message ||
    `Create new task from ${selectedImages?.length} images?`;

  return (
    <StandardDialog
      open={open}
      title="Create task"
      onClose={handleClose}
      onSubmit={async () => {
        const operations = [
          {
            op: 'union',
            path: '/assets',
            value: selectedImages,
          },
        ];
        const result = await postTask({
          missionGuid,
          operations,
        });
        if (result?.status === 200) handleClose();
      }}
      submitButtonLoading={isLoading}
      submitButtonLabel="Create task"
      maxWidth="xs"
    >
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
    </StandardDialog>
  );
}
