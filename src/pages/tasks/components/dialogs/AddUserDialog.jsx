import React, { useState } from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Alert from '../../../../components/Alert';
import Button from '../../../../components/Button';
import UserDropdown from '../../../../components/UserDropdown';
import Text from '../../../../components/Text';
import StandardDialog from '../../../../components/StandardDialog';
import useAddUserToTask from '../../../../models/tasks/useAddUserToTask';
import useGetUsers from '../../../../models/users/useGetUsers';

export default function AddUserDialog({
  open,
  onClose,
  taskGuid,
  refreshTaskData,
}) {
  const { data: userData } = useGetUsers();

  const { addUserToTask, isLoading, error } = useAddUserToTask();

  const [selectedUser, setSelectedUser] = useState(null);

  function handleClose() {
    setSelectedUser(null);
    onClose();
  }

  return (
    <StandardDialog
      open={open}
      onClose={handleClose}
      title="Add user to task"
    >
      <DialogContent>
        <Text variant="body2">
          Select a user to add to this task.
        </Text>
        <UserDropdown
          users={userData}
          value={selectedUser || ''}
          onChange={userGuid => setSelectedUser(userGuid)}
        />
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
        <Button display="basic" onClick={handleClose} id="CANCEL" />

        <Button
          disabled={isLoading || !selectedUser}
          loading={isLoading}
          display="primary"
          onClick={async () => {
            const result = await addUserToTask(
              taskGuid,
              selectedUser,
            );
            if (result?.status === 200) {
              refreshTaskData();
              handleClose();
            }
          }}
        >
          Add user
        </Button>
      </DialogActions>
    </StandardDialog>
  );
}
