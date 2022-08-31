import React, { useState } from 'react';
import { get } from 'lodash-es';

import TextField from '@material-ui/core/TextField';

import useGetMission from '../../../models/missions/useGetMission';
import usePostTask from '../../../models/tasks/usePostTask';
import StandardDialog from '../../../components/StandardDialogNew';
import Text from '../../../components/Text';
import Alert from '../../../components/Alert';
import UserSelectionPool from '../../../components/UserSelectionPool';

export default function CreateTaskDialog({
  open,
  onClose,
  selectedImages,
  missionGuid,
}) {
  const { data: missionData } = useGetMission(missionGuid);
  const { mutate: postTask, isLoading, error } = usePostTask();
  const [title, setTitle] = useState('');
  const [selectedUserGuids, setSelectedUserGuids] = useState([]);

  function handleClose() {
    onClose();
  }

  const missionUsers = get(missionData, 'assigned_users', []);

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
        if (title)
          operations.push({
            op: 'identity',
            path: '/title',
            value: title,
          });
        if (selectedUserGuids.length > 1)
          operations.push({
            op: 'identity',
            path: '/users',
            value: selectedUserGuids,
          });
        const result = await postTask({
          missionGuid,
          operations,
        });
        if (result?.status === 200) handleClose();
      }}
      submitButtonLoading={isLoading}
      submitButtonLabel="Create task"
      maxWidth="sm"
    >
      <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>
        Task name
      </Text>
      <TextField
        autoFocus
        fullWidth
        variant="outlined"
        helperText="If you leave this blank, a silly name will be randomly assigned."
        FormHelperTextProps={{ style: { marginLeft: 4 } }}
        size="small"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <UserSelectionPool
        label="Assign users"
        users={missionUsers}
        selectedUserGuids={selectedUserGuids}
        onClick={user => {
          if (selectedUserGuids.includes(user?.guid)) {
            setSelectedUserGuids(
              selectedUserGuids.filter(guid => guid !== user?.guid),
            );
          } else {
            setSelectedUserGuids([...selectedUserGuids, user?.guid]);
          }
        }}
        style={{ margin: '16px 0 16px 0', width: 536 }}
      />
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
