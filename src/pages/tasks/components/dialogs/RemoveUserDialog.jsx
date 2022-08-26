import React from 'react';

import Alert from '../../../../components/Alert';
import Text from '../../../../components/Text';
import StandardDialog from '../../../../components/StandardDialogNew';
import useRemoveUserFromTask from '../../../../models/tasks/useRemoveUserFromTask';

export default function RemoveUserDialog({
  open,
  onClose,
  taskGuid,
  user,
  refreshTaskData,
}) {
  const {
    removeUserFromTask,
    isLoading,
    error,
  } = useRemoveUserFromTask();

  const userName = user?.full_name || 'Unnamed User';

  return (
    <StandardDialog
      open={open}
      onClose={onClose}
      onSubmit={async () => {
        const result = await removeUserFromTask(taskGuid, user?.guid);

        if (result?.status === 200) {
          refreshTaskData();
          onClose();
        }
      }}
      submitButtonLoading={isLoading}
      submitButtonLabel="Remove user"
      title="Remove user"
    >
      <Text variant="body2">
        {`Are you sure you want to remove ${userName} from this task?`}
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
