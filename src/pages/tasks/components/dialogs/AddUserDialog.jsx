import React, { useState } from 'react';
import { get, differenceBy } from 'lodash-es';

import Alert from '../../../../components/Alert';
import UserDropdown from '../../../../components/UserDropdown';
import Text from '../../../../components/Text';
import StandardDialog from '../../../../components/StandardDialogNew';
import useAddUserToTask from '../../../../models/tasks/useAddUserToTask';
import useGetMission from '../../../../models/missions/useGetMission';

export default function AddUserDialog({
  open,
  onClose,
  taskUsers,
  taskGuid,
  missionGuid,
  refreshTaskData,
}) {
  const { data: missionData } = useGetMission(missionGuid);
  const { addUserToTask, isLoading, error } = useAddUserToTask();
  const [selectedUser, setSelectedUser] = useState(null);

  function handleClose() {
    setSelectedUser(null);
    onClose();
  }

  const missionUsers = get(missionData, 'assigned_users', []);
  const availableUsers = differenceBy(
    missionUsers,
    taskUsers,
    'guid',
  );
  const noUsersAvailable = availableUsers.length === 0;

  return (
    <StandardDialog
      open={open}
      onClose={handleClose}
      onSubmit={async () => {
        const result = await addUserToTask(taskGuid, selectedUser);
        if (result?.status === 200) {
          refreshTaskData();
          handleClose();
        }
      }}
      submitDisabled={!selectedUser}
      submitButtonLoading={isLoading}
      submitButtonLabel="Add user"
      title={
        noUsersAvailable ? 'No users available' : 'Add user to task'
      }
    >
      {noUsersAvailable ? (
        <Text variant="body2">
          There are no users available. Users must be assigned to the
          parent project before they can be assigned to a task.
        </Text>
      ) : (
        <>
          <Text variant="body2">
            Select a user to add to this task.
          </Text>
          <UserDropdown
            users={availableUsers}
            value={selectedUser || ''}
            onChange={userGuid => setSelectedUser(userGuid)}
          />
        </>
      )}
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
