import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import usePostUser from '../../models/users/usePostUser';
import roleSchema from './constants/roleSchema';
import CreateUserPage from './components/CreateUserPage';
import RoleDropdown from './components/RoleDropdown';

export default function CreateAdminUser()
{
  const {
    postUser,
    error,
    loading,
  } = usePostUser();

  const [newUserRole, setNewUserRole] = useState('');

  return (
    <CreateUserPage
      title="Create a new user"
      instructions="The best passwords contain a mix of upper and lower case letters, numbers, and special characters."
      onSubmit={async (email, password) =>
      {
        const selectedRole = roleSchema.find(o => o.label === newUserRole) || roleSchema[0];
        const selectedRolePayload = selectedRole?.payload;
        const successful = await postUser(email, password, selectedRolePayload);
        if (successful)
        {
          window.location.href = '/administration';
        }
      }}
      loading={loading}
      error={error}
      renderInputs={() =>
      {
        return (

          <Grid item>
            <RoleDropdown
              value={newUserRole}
              onChange={newValue => setNewUserRole(newValue)}
            />
          </Grid>
        )
      }}
    />
  );
}
