import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { get } from 'lodash-es';

import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';

import useGetTask from '../../models/tasks/useGetTask';
import usePatchTask from '../../models/tasks/usePatchTask';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import BodyHeader from '../../components/BodyHeader';
import Button from '../../components/Button';
import Text from '../../components/Text';
import UserChips from '../../components/UserChips';
import { getTaskQueryKey } from '../../constants/queryKeys';
import DeleteTaskDialog from './components/dialogs/DeleteTaskDialog';
import AddUserDialog from './components/dialogs/AddUserDialog';
import RemoveUserDialog from './components/dialogs/RemoveUserDialog';

export default function TaskSettings() {
  const theme = useTheme();
  const queryClient = useQueryClient();
  const { id: taskGuid } = useParams();

  const { data, isLoading } = useGetTask(taskGuid);
  const { mutate: patchTask } = usePatchTask();

  function refreshTaskData() {
    const queryKey = getTaskQueryKey(taskGuid);
    queryClient.invalidateQueries(queryKey);
  }

  const [userToRemove, setUserToRemove] = useState(null);
  const [deletingTask, setDeletingTask] = useState(false);
  const [addingUser, setAddingUser] = useState(false);
  const [title, setTitle] = useState([]);
  useEffect(
    () => {
      if (data) setTitle(data?.title);
    },
    [data],
  );

  useDocumentTitle('Task settings');

  if (isLoading) return null; // make this nicer...

  const ownerGuid = data?.owner?.guid;
  const safeUsers = data?.assigned_users || [];
  const chipUsers = safeUsers.map(u => {
    if (u?.guid === ownerGuid) return { ...u, invincible: true };
    return u;
  });

  const missionGuid = get(data, ['mission', 'guid']);

  return (
    <div style={{ padding: '32px 0 0 200px', maxWidth: 800 }}>
      <AddUserDialog
        open={addingUser}
        onClose={() => setAddingUser(false)}
        taskUsers={safeUsers}
        taskGuid={taskGuid}
        missionGuid={missionGuid}
        refreshTaskData={refreshTaskData}
      />
      <RemoveUserDialog
        open={Boolean(userToRemove)}
        onClose={() => setUserToRemove(null)}
        taskGuid={taskGuid}
        user={userToRemove}
        refreshTaskData={refreshTaskData}
      />
      <DeleteTaskDialog
        open={deletingTask}
        onClose={() => setDeletingTask(false)}
        taskGuid={taskGuid}
      />
      <BodyHeader
        title="Task settings"
        showBackButton
        backButtonHref={`/tasks/${taskGuid}`}
        backButtonText="Return to task"
      />
      <Divider style={{ margin: '12px 0 20px 0' }} />
      <Text style={{ fontWeight: 'bold', margin: '24px 0 4px 4px' }}>
        Task name
      </Text>
      <div style={{ display: 'flex' }}>
        <TextField
          style={{ marginRight: 8 }}
          fullWidth
          variant="outlined"
          size="small"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Button
          display="primary"
          disabled={data?.title === title}
          onClick={async () => {
            const titlePatchOp = {
              op: 'replace',
              path: '/title',
              value: title,
            };
            patchTask({
              taskGuid,
              missionGuid,
              operations: [titlePatchOp],
            });
          }}
        >
          Rename
        </Button>
      </div>
      <Text style={{ fontWeight: 'bold', margin: '24px 0 4px 4px' }}>
        Users
      </Text>
      <UserChips
        users={chipUsers}
        deletable
        onDelete={user => setUserToRemove(user)}
      >
        <Button
          onClick={() => setAddingUser(true)}
          startIcon={<AddIcon />}
          size="small"
          style={{
            margin: '4px 4px 0 0',
            height: 32,
            padding: '0 12px',
          }}
        >
          Add user
        </Button>
      </UserChips>
      <Text style={{ fontWeight: 'bold', margin: '24px 0 4px 4px' }}>
        Task actions
      </Text>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '12px 20px',
          border: `1px solid ${theme.palette.grey['400']}`,
          borderRadius: 12,
          marginTop: 8,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Text style={{ fontWeight: 'bold' }}>Delete this task</Text>
          <Text style={{ fontSize: '0.9rem' }}>
            This action cannot be undone.
          </Text>
        </div>
        <Button
          onClick={() => setDeletingTask(true)}
          style={{
            background: theme.palette.error.main,
            color: theme.palette.common.white,
          }}
        >
          Delete task
        </Button>
      </div>
    </div>
  );
}
