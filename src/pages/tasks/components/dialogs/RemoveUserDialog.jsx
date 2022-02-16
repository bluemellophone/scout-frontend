import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Alert from '../../../../components/Alert';
import Button from '../../../../components/Button';
import Text from '../../../../components/Text';
import StandardDialog from '../../../../components/StandardDialog';
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
    <StandardDialog open={open} onClose={onClose} title="Remove user">
      <DialogContent>
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
      </DialogContent>
      <DialogActions>
        <Button display="basic" onClick={onClose} id="CANCEL" />

        <Button
          disabled={isLoading}
          loading={isLoading}
          display="primary"
          onClick={async () => {
            const result = await removeUserFromTask(
              taskGuid,
              user?.guid,
            );

            if (result?.status === 200) {
              refreshTaskData();
              onClose();
            }
          }}
        >
          Remove user
        </Button>
      </DialogActions>
    </StandardDialog>
  );
}
