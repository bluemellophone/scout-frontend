import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import usePostUser from '../../models/users/usePostUser';
import CreateUserPage from './components/CreateUserPage';

const roleOptions = [
  {
    label: 'Basic user',
    payload: [],
  },
  {
    label: 'Data manager',
    payload: ['is_data_manager'],
  },
  {
    label: 'Administration',
    payload: ['is_admin', 'is_data_manager'],
  },
]

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
        const selectedRole = roleOptions.find(o => o.label === newUserRole) || roleOptions[0];
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
            <FormControl
              variant="outlined"
              style={{ width: '100%' }}
            >
              <InputLabel id="select-roles-label">
                Role
              </InputLabel>
              <Select
                id="user-roles-selector"
                variant="outlined"
                onChange={e =>
                {
                  setNewUserRole(e.target.value);
                }}
                value={newUserRole}
              >
                {roleOptions.map(o => (
                  <MenuItem key={o.label} value={o.label}>
                    {o.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )
      }}
    />
  );
}
