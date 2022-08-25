import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import CustomAlert from '../../components/Alert';
import useLogin from '../../models/auth/useLogin';
import ButtonLink from '../../components/ButtonLink';
import SimpleFormPage from '../../components/SimpleFormPage';

export default function Login({ showBanner, redirect = '/' }) {
  const { authenticate, error, setError, loading } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SimpleFormPage
      disableBack
      title="Login to continue"
      buttonId="submitLogin"
      buttonText="LOGIN"
      onSubmit={() => {
        authenticate(email, password, redirect);
      }}
      buttonProps={{ loading }}
      renderBelowButton={
        <ButtonLink
          display="text"
          href="/forgot"
          style={{ margin: '8px 0 0 4px' }}
        >
          Forgot password?
        </ButtonLink>
      }
    >
      {showBanner && (
        <CustomAlert
          style={{ marginTop: 12 }}
          severity="warning"
          descriptionId="MUST_LOG_IN"
        />
      )}
      <Grid
        container
        spacing={2}
        direction="column"
        style={{ padding: '8px 0 4px 0' }}
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
              label={<FormattedMessage id="EMAIL_ADDRESS" />}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl
            required
            style={{ width: '100%', marginBottom: 4 }}
          >
            <TextField
              autoComplete="password"
              variant="outlined"
              id="password"
              type="password"
              onChange={e => {
                setPassword(e.target.value);
                setError(null);
              }}
              label={<FormattedMessage id="PASSWORD" />}
            />
          </FormControl>
        </Grid>
        {error && <CustomAlert severity="error">{error}</CustomAlert>}
      </Grid>
    </SimpleFormPage>
  );
}
