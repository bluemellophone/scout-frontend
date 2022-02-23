import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import usePatchUser from '../../models/users/usePatchUser';
import CustomAlert from '../../components/Alert';
import SimpleFormPage from '../../components/SimpleFormPage';

const buttonId = 'saveProfile';

export default function ProfileSetup({ userData }) {
  const [name, setName] = useState('');

  const { mutate: patchUser, isLoading, error } = usePatchUser();

  useDocumentTitle('Set up profile');

  const actionDisabled = isLoading || name === '';

  async function saveProfile() {
    if (!actionDisabled) {
      await patchUser({
        userGuid: userData?.guid,
        operations: [
          {
            op: 'replace',
            path: '/full_name',
            value: name,
          },
        ],
      });
    }
  }
  return (
    <SimpleFormPage
      title="Set up profile"
      instructions="Enter your name to begin using Scout."
      buttonId={buttonId}
      buttonText="Continue"
      onSubmit={saveProfile}
      buttonProps={{
        disabled: actionDisabled,
        loading: isLoading,
      }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        style={{ padding: '8px 0 16px 0' }}
      >
        <Grid item>
          <FormControl
            required
            style={{ width: '100%', marginBottom: 4 }}
          >
            <TextField
              variant="outlined"
              id="name"
              onChange={e => setName(e.target.value)}
              label="Full name"
            />
          </FormControl>
        </Grid>
        {error && (
          <CustomAlert style={{ marginBottom: 8 }} severity="error">
            {error}
          </CustomAlert>
        )}
      </Grid>
    </SimpleFormPage>
  );
}
