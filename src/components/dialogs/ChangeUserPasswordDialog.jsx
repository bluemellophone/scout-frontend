import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

import Alert from '../../components/Alert';
import Button from '../../components/Button';
import StandardDialog from '../../components/StandardDialog';
import PasswordVerificationAlert from '../../components/PasswordVerificationAlert';
import usePatchUser from '../../models/users/usePatchUser';

export default function ChangeUserPasswordDialog({
  open,
  onClose,
  userGuid,
  title,
}) {
  const [userPassword1, setUserPassword1] = useState('');
  const [userPassword2, setUserPassword2] = useState('');
  const [showMatchWarning, setShowMatchWarning] = useState(false);
  const [verificationPassword, setVerificationPassword] = useState(
    '',
  );

  const {
    mutate: patchUser,
    isLoading,
    error,
    clearError,
  } = usePatchUser();

  function cleanupAndClose() {
    setUserPassword1('');
    setUserPassword2('');
    setShowMatchWarning(false);
    setVerificationPassword('');
    if (error) clearError();
    onClose();
  }

  async function saveProperties() {
    if (userPassword1 === userPassword2) {
      const result = await patchUser({
        password: verificationPassword,
        userGuid,
        operations: [
          {
            op: 'replace',
            path: '/password',
            value: userPassword1,
          },
        ],
      });

      if (result?.status === 200) cleanupAndClose();
    }
  }

  return (
    <StandardDialog
      open={open}
      onClose={(_, reason) => {
        if (reason === 'backdropClick') return;
        cleanupAndClose();
      }}
      title={title}
      maxWidth="xs"
    >
      <div style={{ padding: '12px 24px' }}>
        <FormControl variant="outlined" style={{ width: '100%' }}>
          <TextField
            variant="outlined"
            id="enter-new-password"
            value={userPassword1}
            onChange={e => {
              if (e.target.value === userPassword2)
                setShowMatchWarning(false);
              setUserPassword1(e.target.value);
            }}
            onBlur={e => {
              if (e.target.value !== userPassword2)
                setShowMatchWarning(true);
            }}
            type="password"
            label="New password"
          />
        </FormControl>
        <FormControl
          variant="outlined"
          style={{ width: '100%', margin: '12px 0 12px 0' }}
        >
          <TextField
            variant="outlined"
            id="repeat-new-password"
            value={userPassword2}
            onChange={e => {
              if (e.target.value === userPassword1)
                setShowMatchWarning(false);
              setUserPassword2(e.target.value);
            }}
            onBlur={e => {
              if (e.target.value !== userPassword1)
                setShowMatchWarning(true);
            }}
            type="password"
            label="Repeat new password"
          />
        </FormControl>
        {showMatchWarning && (
          <Alert severity="error">Passwords do not match.</Alert>
        )}
        <PasswordVerificationAlert
          setPassword={setVerificationPassword}
          descriptionId="SENSITIVE_USER_DATA_CHANGE_DESCRIPTION"
          style={{ marginTop: 16, marginBottom: 0 }}
        />
        {error && (
          <Alert
            style={{ marginTop: 16 }}
            severity="error"
            titleId="SERVER_ERROR"
          >
            {error}
          </Alert>
        )}
      </div>
      <DialogActions style={{ padding: '0px 24px 24px 24px' }}>
        <Button
          disabled={verificationPassword === '' || showMatchWarning}
          display="primary"
          onClick={saveProperties}
          loading={isLoading}
        >
          Change password
        </Button>
      </DialogActions>
    </StandardDialog>
  );
}
