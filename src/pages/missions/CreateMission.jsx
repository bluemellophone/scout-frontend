import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import CustomAlert from '../../components/Alert';
import usePostMission from '../../models/missions/usePostMission';
import SimpleFormPage from '../../components/SimpleFormPage';

export default function CreateMission() {
  const [projectName, setProjectName] = useState('');
  const { mutate: postMission, isLoading, error } = usePostMission();
  return (
    <SimpleFormPage
      title="Create a project"
      instructions="Pick a short name for your new project. There are no character restrictions."
      buttonId="createMission"
      buttonText="Create project"
      onSubmit={() => {
        postMission({ title: projectName });
      }}
      buttonProps={{
        disabled: isLoading || projectName === '',
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
              id="project-name"
              onChange={e => {
                setProjectName(e.target.value);
              }}
              label="Project name"
            />
          </FormControl>
        </Grid>
      </Grid>
      {error && (
        <CustomAlert style={{ marginBottom: 8 }} severity="error">
          {error}
        </CustomAlert>
      )}
    </SimpleFormPage>
  );
}
