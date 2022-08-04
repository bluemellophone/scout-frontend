import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Alert from '../../components/Alert';
import SimpleFormPage from '../../components/SimpleFormPage';

export default function Forgot() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [error, setError] = useState('');

  if (requestSent) {
    return (
      <SimpleFormPage
        disableLogout
        title="Email sent"
        instructions="Your password reset request has been sent. In a few moments you should receive an email from noreply@wildme.org with next steps. If you do not receive the email, double-check your spam folder before trying again."
        buttonId="resendEmail"
        buttonText="Try again"
        onSubmit={() => setRequestSent(false)}
      />
    );
  }

  return (
    <SimpleFormPage
      disableLogout
      title="Forgot password"
      instructions="Enter your email to reset your password."
      buttonId="resetPassword"
      buttonText="Reset password"
      buttonProps={{ loading }}
      onSubmit={() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setRequestSent(true);
        }, 1000);
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
              id="email"
              label="Email address"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                setError(null);
              }}
              variant="outlined"
            />
          </FormControl>
        </Grid>
        {error && (
          <Grid item>
            <Alert severity="error">{error}</Alert>
          </Grid>
        )}
      </Grid>
    </SimpleFormPage>
  );
}
