import React, { useState } from 'react';
import { differenceBy } from 'lodash-es';

import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Alert from '../../../../components/Alert';
import Button from '../../../../components/Button';
import UserDropdown from '../../../../components/UserDropdown';
import Text from '../../../../components/Text';
import StandardDialog from '../../../../components/StandardDialog';
import useAddUserToMission from '../../../../models/missions/useAddUserToMission';
import useGetUsers from '../../../../models/users/useGetUsers';

export default function AddUserDialog({
  open,
  onClose,
  missionGuid,
  missionUsers,
}) {
  const { data: userData } = useGetUsers();

  const {
    mutate: addUserToMission,
    isLoading,
    error,
  } = useAddUserToMission();

  const [selectedUser, setSelectedUser] = useState(null);

  function handleClose() {
    setSelectedUser(null);
    onClose();
  }

  const allUsers = userData || [];
  const availableUsers = differenceBy(allUsers, missionUsers, 'guid');
  const noUsersAvailable = availableUsers.length === 0;

  return (
    <StandardDialog
      open={open}
      onClose={handleClose}
      title={
        noUsersAvailable
          ? 'No users available'
          : 'Add user to project'
      }
    >
      <DialogContent>
        {noUsersAvailable ? (
          <Text variant="body2">
            There are no users available. Users cannot be assigned to
            the same project twice.
          </Text>
        ) : (
          <>
            <Text variant="body2">
              Select a user to add to this project.
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
      </DialogContent>
      <DialogActions>
        <Button display="basic" onClick={handleClose} id="CANCEL" />

        <Button
          disabled={isLoading || !selectedUser}
          loading={isLoading}
          display="primary"
          onClick={async () => {
            const result = await addUserToMission({
              missionGuid,
              userGuid: selectedUser,
            });
            if (result?.status === 200) {
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
