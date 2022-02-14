import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SimpleFormPage from '../../../components/SimpleFormPage';
import CustomAlert from '../../../components/Alert';

export default function CreateUserPage({
  title,
  instructions,
  error,
  loading,
  onSubmit,
  renderInputs = Function.prototype,
})
{
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [formError, setFormError] = useState(null);

  const displayError = formError || error;

  return (
    <SimpleFormPage
      title={title}
      instructions={instructions}
      buttonId="create-user"
      buttonText="Create user"
      onSubmit={() =>
      {
        if (password1 === password2)
        {
          onSubmit(email, password1);
        } else
        {
          setFormError('Passwords do not match');
        }
      }}
      buttonProps={{ loading }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        style={{ padding: '16px 0 16px 0' }}
      >
        <Grid item>
          <FormControl
            required
            style={{ width: '100%' }}
          >
            <TextField
              autoComplete="username"
              variant="outlined"
              id="email"
              onChange={e =>
              {
                setEmail(e.target.value);
                setFormError(null);
              }}
              label="Email address"
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl
            required
            style={{ width: '100%' }}
          >
            <TextField
              autoComplete="off"
              variant="outlined"
              id="password1"
              type="password"
              onChange={e =>
              {
                setPassword1(e.target.value);
                setFormError(null);
              }}
              label="Password"
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl
            required
            style={{ width: '100%' }}
          >
            <TextField
              autoComplete="off"
              variant="outlined"
              id="password2"
              type="password"
              onChange={e =>
              {
                setPassword2(e.target.value);
                setFormError(null);
              }}
              label="Confirm password"
            />
          </FormControl>
        </Grid>
        {renderInputs()}
        {displayError && (
          <CustomAlert severity="error" description={displayError} />
        )}
      </Grid>
    </SimpleFormPage>
  );
}
