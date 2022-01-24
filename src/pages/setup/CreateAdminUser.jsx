import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SimpleFormPage from '../../components/SimpleFormPage';
import CustomAlert from '../../components/Alert';

import useCreateAdminUser from '../../models/setup/useCreateAdminUser';

export default function CreateAdminUser() {
  const {
    authenticate,
    error,
    setError,
    loading,
  } = useCreateAdminUser();

  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  return (
    <SimpleFormPage
      title="MWS Initialized!"
      instructions="First step is to create an admin user."
      buttonId="createAdminUser"
      buttonText="Create user"
      onSubmit={() => {
        if (password1 === password2) {
          authenticate(email, password1, '/');
        } else {
          setError('Passwords do not match');
        }
      }}
      buttonProps={{ loading }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        style={{ padding: '16px 40px 16px 0' }}
      >
        <Grid item>
          <FormControl
            required
            style={{ width: '100%', marginBottom: 4 }}
          >
            <TextField
              autoComplete="username"
              variant="outlined"
              id="email"
              onChange={e => {
                setEmail(e.target.value);
                setError(null);
              }}
              label="Email address"
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl
            required
            style={{ width: '100%', marginBottom: 4 }}
          >
            <TextField
              autoComplete="off"
              variant="outlined"
              id="password1"
              type="password"
              onChange={e => {
                setPassword1(e.target.value);
                setError(null);
              }}
              label="Password"
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl
            required
            style={{ width: '100%', marginBottom: 4 }}
          >
            <TextField
              autoComplete="off"
              variant="outlined"
              id="password2"
              type="password"
              onChange={e => {
                setPassword2(e.target.value);
                setError(null);
              }}
              label="Confirm password"
            />
          </FormControl>
        </Grid>
        {error && (
          <CustomAlert severity="error" description={error} />
        )}
      </Grid>
    </SimpleFormPage>
  );
}
