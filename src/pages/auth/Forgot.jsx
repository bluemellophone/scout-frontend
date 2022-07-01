import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextInput from '../../components/inputs/TextInput';
import Link from '../../components/Link';
import Text from '../../components/Text';
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
        onSubmit={() => {
          setRequestSent(false);
        }}
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
      renderBelowButton={
        <Typography style={{ margin: '8px 0px 0px 4px' }}>
          <Link href="/login">
            <Text variant="subtitle2" component="span" id="LOG_IN" />
          </Link>
          <span style={{ margin: '0 4px' }}> | </span>
          <Link href="/request">
            <Text
              variant="subtitle2"
              component="span"
              id="REQUEST_INVITE"
            />
          </Link>
        </Typography>
      }
    >
      <Grid
        container
        spacing={2}
        direction="column"
        style={{ padding: '16px 0', width: 280 }}
      >
        <Grid item>
          <TextInput
            schema={{ labelId: 'EMAIL_ADDRESS' }}
            value={email}
            onChange={newEmail => setEmail(newEmail)}
            variant="outlined"
          />
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
