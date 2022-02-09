import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import useGetMission from '../../models/missions/useGetMission';
import usePatchMission from '../../models/missions/usePatchMission';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import BodyHeader from '../../components/BodyHeader';
import Button from '../../components/Button';
import Text from '../../components/Text';
import UserChips from '../../components/UserChips';
import DeleteMissionDialog from './components/dialogs/DeleteMissionDialog';
import RemoveUserDialog from './components/dialogs/RemoveUserDialog';

export default function MissionSettings() {
  const { id: missionGuid } = useParams();
  const theme = useTheme();

  const { data, isLoading } = useGetMission(missionGuid);
  const { patchMission } = usePatchMission();

  const [userToRemove, setUserToRemove] = useState(null);
  const [deletingMission, setDeletingMission] = useState(false);
  const [title, setTitle] = useState([]);
  useEffect(
    () => {
      if (data) setTitle(data?.title);
    },
    [data],
  );

  useDocumentTitle('Project settings');

  if (isLoading) return null; // make this nicer...
  console.log(data);

  return (
    <div style={{ padding: '32px 0 0 200px', maxWidth: 800 }}>
      <RemoveUserDialog
        open={Boolean(userToRemove)}
        onClose={() => setUserToRemove(null)}
        missionGuid={missionGuid}
        user={userToRemove}
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
          onClick={async () => {
            const result = await patchMission(missionGuid, [
              { op: 'replace', path: '/title', value: title },
            ]);
            console.log(result);
          }}
        >
          Rename
        </Button>
      </div>
      <Text style={{ fontWeight: 'bold', margin: '24px 0 4px 4px' }}>
        Users
      </Text>
      <UserChips
        users={data?.assigned_users}
        deletable
        onDelete={user => setUserToRemove(user)}
      />
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
          onClick={() => setDeletingMission(true)}
          style={{
            background: theme.palette.error.main,
            color: theme.palette.common.white,
          }}
        >
          Delete project
        </Button>
      </div>
    </div>
  );
}
