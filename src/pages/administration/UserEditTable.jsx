import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import AddIcon from '@material-ui/icons/Add';

import { cellRendererTypes } from '../../components/dataDisplays/cellRenderers';
import DataDisplay from '../../components/dataDisplays/DataDisplay';
import ButtonLink from '../../components/ButtonLink';
import UserDeleteDialog from '../../components/dialogs/UserDeleteDialog';
import Text from '../../components/Text';
import deriveUserRole from './utils/deriveUserRole';
import UserEditDialog from './UserEditDialog';
import ChangeUserPasswordDialog from '../../components/dialogs/ChangeUserPasswordDialog';

export default function UserEditTable({ data, loading, usersError }) {
  const intl = useIntl();
  const [resetUser, setResetUser] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  const safeUsers = data || [];
  const activeUsers = safeUsers.filter(
    u => u.full_name !== 'Inactivated User',
  );

  const tableColumns = [
    {
      name: 'email',
      label: 'Email address',
    },
    {
      name: 'full_name',
      align: 'left',
      label: 'Full name',
    },
    {
      name: 'roles',
      align: 'left',
      label: 'Role',
      options: {
        customBodyRender: (_, userObj) =>
          deriveUserRole(userObj)?.label,
      },
    },
    {
      name: 'actions',
      align: 'right',
      label: intl.formatMessage({ id: 'ACTIONS' }),
      options: {
        cellRenderer: cellRendererTypes.actions,
        cellRendererProps: {
          actions: [
            {
              variant: 'edit',
              id: 'edit-user-data',
              label: 'Edit user data',
              onClick: (_, user) => setEditUser(user),
            },
            {
              variant: 'password',
              id: 'change-password',
              label: 'Change password',
              onClick: (_, user) => setResetUser(user),
            },
            {
              variant: 'delete',
              id: 'delete-account',
              label: 'Delete account',
              onClick: (_, user) => setDeleteUser(user),
            },
          ],
        },
      },
    },
  ];

  return (
    <Grid item>
      <ChangeUserPasswordDialog
        title="Reset user password"
        open={Boolean(resetUser)}
        onClose={() => {
          setResetUser(null);
        }}
        userGuid={resetUser?.guid}
      />
      <UserEditDialog
        open={Boolean(editUser)}
        onClose={() => {
          setEditUser(null);
        }}
        userData={editUser}
      />
      <UserDeleteDialog
        open={Boolean(deleteUser)}
        onClose={() => {
          setDeleteUser(null);
        }}
        userData={deleteUser}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '36px 0 16px 4px',
        }}
      >
        <Text variant="h5">Manage users</Text>
        <ButtonLink
          href="/administration/create-new-user"
          display="primary"
          style={{
            textTransform: 'none',
            borderRadius: 3,
          }}
          startIcon={<AddIcon />}
        >
          Create user
        </ButtonLink>
      </div>
      <DataDisplay
        idKey="guid"
        style={{ marginTop: 8 }}
        columns={tableColumns}
        data={activeUsers}
        noTitleBar
      />
      {loading ? (
        <Skeleton style={{ transform: 'unset' }} height={44} />
      ) : null}
      {usersError ? (
        <Text
          id="USER_DATA_ERROR"
          variant="body2"
          style={{ margin: '8px 16px', display: 'block' }}
        />
      ) : null}
    </Grid>
  );
}
