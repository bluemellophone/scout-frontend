import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import AddIcon from '@material-ui/icons/Add';

import DataDisplay from '../../components/dataDisplays/DataDisplay';
import ActionIcon from '../../components/ActionIcon';
import ButtonLink from '../../components/ButtonLink';
import UserDeleteDialog from '../../components/dialogs/UserDeleteDialog';
import Text from '../../components/Text';
import deriveUserRole from './utils/deriveUserRole';
import UserEditDialog from './UserEditDialog';

export default function UserEditTable({ data, loading, usersError }) {
  const intl = useIntl();
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
      options: {
        customBodyRender: email => (
          <Text variant="body2">{email}</Text>
        ),
      },
    },
    {
      name: 'full_name',
      align: 'left',
      label: 'Full name',
      options: {
        customBodyRender: fullName => (
          <Text variant="body2">{fullName}</Text>
        ),
      },
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
        customBodyRender: (_, user) => (
          <div
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <ActionIcon
              variant="edit"
              onClick={() => setEditUser(user)}
            />
            <ActionIcon
              variant="delete"
              onClick={() => setDeleteUser(user)}
            />
          </div>
        ),
      },
    },
  ];

  return (
    <Grid item>
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
        <Text variant="h5">User Management</Text>
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
