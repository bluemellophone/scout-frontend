import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';

import useGetMission from '../../models/missions/useGetMission';
import usePatchMission from '../../models/missions/usePatchMission';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import BodyHeader from '../../components/BodyHeader';
import Button from '../../components/ButtonNew';
import EphemeralFeedback from '../../components/EphemeralFeedback';
import Text from '../../components/Text';
import UserChips from '../../components/UserChips';
import { getMissionQueryKey } from '../../constants/queryKeys';
import DeleteMissionDialog from './components/dialogs/DeleteMissionDialog';
import AddUserDialog from './components/dialogs/AddUserDialog';
import RemoveUserDialog from './components/dialogs/RemoveUserDialog';

export default function MissionSettings() {
  const theme = useTheme();
  const queryClient = useQueryClient();
  const { id: missionGuid } = useParams();

  const { data, isLoading } = useGetMission(missionGuid);
  const {
    mutate: patchMission,
    loading: renameMissionLoading,
  } = usePatchMission();

  function refreshMissionData() {
    const queryKey = getMissionQueryKey(missionGuid);
    queryClient.invalidateQueries(queryKey);
  }

  const [renameSuccessOpen, setRenameSuccessOpen] = useState(false);
  const [userToRemove, setUserToRemove] = useState(null);
  const [deletingMission, setDeletingMission] = useState(false);
  const [addingUser, setAddingUser] = useState(false);
  const [title, setTitle] = useState([]);
  useEffect(
    () => {
      if (data) setTitle(data?.title);
    },
    [data],
  );

  useDocumentTitle('Project settings');

  if (isLoading) return null; // make this nicer...

  const ownerGuid = data?.owner?.guid;
  const safeUsers = data?.assigned_users || [];
  const chipUsers = safeUsers.map(u => {
    if (u?.guid === ownerGuid) return { ...u, invincible: true };
    return u;
  });

  return (
    <div style={{ padding: '32px 0 0 200px', maxWidth: 800 }}>
      <EphemeralFeedback
        open={renameSuccessOpen}
        setOpen={setRenameSuccessOpen}
        message={`Project name changed to "${data?.title}"`}
      />
      <AddUserDialog
        open={addingUser}
        onClose={() => setAddingUser(false)}
        missionGuid={missionGuid}
        missionUsers={safeUsers}
      />
      <RemoveUserDialog
        open={Boolean(userToRemove)}
        onClose={() => setUserToRemove(null)}
        missionGuid={missionGuid}
        user={userToRemove}
        refreshMissionData={refreshMissionData}
      />
      <DeleteMissionDialog
        open={deletingMission}
        onClose={() => setDeletingMission(false)}
        missionGuid={missionGuid}
      />
      <BodyHeader
        title="Project settings"
        showBackButton
        backButtonHref={`/projects/${missionGuid}`}
        backButtonText="Return to project"
      />
      <Divider style={{ margin: '12px 0 20px 0' }} />
      <Text style={{ fontWeight: 'bold', margin: '24px 0 4px 4px' }}>
        Project name
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
          loading={renameMissionLoading}
          onClick={async () => {
            const titlePatchOp = {
              op: 'replace',
              path: '/title',
              value: title,
            };
            const result = await patchMission({
              missionGuid,
              operations: [titlePatchOp],
            });
            if (result?.status === 200) setRenameSuccessOpen(true);
          }}
        >
          RENAME
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
          display="tag"
          onClick={() => setAddingUser(true)}
          startIcon={<AddIcon />}
        >
          Add user
        </Button>
      </UserChips>
      <Text style={{ fontWeight: 'bold', margin: '24px 0 4px 4px' }}>
        Project actions
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
          <Text style={{ fontWeight: 'bold' }}>
            Delete this project
          </Text>
          <Text style={{ fontSize: '0.9rem' }}>
            This action cannot be undone.
          </Text>
        </div>
        <Button
          display="danger"
          onClick={() => setDeletingMission(true)}
        >
          DELETE PROJECT
        </Button>
      </div>
    </div>
  );
}
