import React from 'react';

import Alert from '../../../../components/Alert';
import Text from '../../../../components/Text';
import StandardDialog from '../../../../components/StandardDialogNew';
import useDeleteTask from '../../../../models/tasks/useDeleteTask';

export default function DeleteTaskDialog({
  open,
  onClose,
  taskGuid,
}) {
  const { isLoading, deleteTask, error } = useDeleteTask();

  return (
    <StandardDialog
      open={open}
      onClose={onClose}
      title="Delete task"
      onSubmit={async () => {
        const result = await deleteTask(taskGuid);
        if (result?.status === 200) onClose();
      }}
      submitButtonLabel="Delete task"
      submitButtonLoading={isLoading}
      submitButtonProps={{ display: 'danger' }}
      maxWidth="xs"
    >
      <Text variant="body2">
        Are you sure you want to delete this task? This action cannot
        be undone.
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
    </StandardDialog>
  );
}
