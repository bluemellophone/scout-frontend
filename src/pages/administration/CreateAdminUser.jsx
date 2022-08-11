import React from 'react';

import useCreateAdminUser from '../../models/setup/useCreateAdminUser';
import CreateUserPage from './components/CreateUserPage';

export default function CreateAdminUser() {
  const { authenticate, error, loading } = useCreateAdminUser();

  return (
    <CreateUserPage
      title="Scout Initialized!"
      instructions="First step is to create an admin user."
      onSubmit={(email, password) => {
        authenticate(email, password, '/');
      }}
      loading={loading}
      error={error}
      disableBack
      disableLogout
    />
  );
}
