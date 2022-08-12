import React from 'react';

import Grid from '@material-ui/core/Grid';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import BodyHeader from '../../components/BodyHeader';
import useGetUsers from '../../models/users/useGetUsers';
import UserEditTable from './UserEditTable';

export default function UserManagement() {
  useDocumentTitle('User Administration');

  const {
    data: userData,
    loading: userDataLoading,
    error: userDataError,
  } = useGetUsers();

  return (
    <div style={{ margin: '32px 16px 0 200px', maxWidth: 800 }}>
      <BodyHeader
        title="User Administration"
        showBackButton
        backButtonHref="/"
        backButtonText="Return home"
      />
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ paddingBottom: 40 }}
      >
        <Grid item style={{ width: '100%' }}>
          <UserEditTable
            data={userData}
            loading={userDataLoading}
            usersError={userDataError}
          />
        </Grid>
      </Grid>
    </div>
  );
}
