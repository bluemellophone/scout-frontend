import React, { useEffect, useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

import Alert from '../../components/Alert';
import Button from '../../components/Button';
import StandardDialog from '../../components/StandardDialog';
import PasswordVerificationAlert from '../../components/PasswordVerificationAlert';
import usePatchUser from '../../models/users/usePatchUser';
import RoleDropdown from './components/RoleDropdown';
import deriveUserRole from './utils/deriveUserRole';
import deriveRolePaths from './utils/deriveRolePaths';

export default function UserEditDialog({ open, onClose, userData }) {
  const [email, setEmail] = useState(userData?.email || '');
  const [name, setName] = useState(userData?.full_name || '');
  const [role, setRole] = useState(deriveUserRole(userData)?.label);
  const [password, setPassword] = useState('');

  useEffect(
    () => {
      if (!userData) {
        setEmail('');
        setName('');
        setRole('');
        setPassword('');
      } else {
        setEmail(userData?.email || '');
        setName(userData?.full_name || '');
        setRole(deriveUserRole(userData)?.label);
      }
    },
    [userData],
  );

  const { mutate: patchUser, isLoading, error } = usePatchUser();

  function cleanupAndClose() {
    setEmail(userData?.email);
    setName(userData?.name);
    setPassword('');
    onClose();
  }

  async function saveProperties() {
    const rolePaths = deriveRolePaths(role);
    const operations = [
      {
        op: 'replace',
        path: '/email',
        value: email,
      },
      {
        op: 'replace',
        path: '/full_name',
        value: name,
      },
      ...rolePaths,
    ];

    const success = await patchUser({
      userGuid: userData?.guid,
      operations,
      password,
    });

    if (success) cleanupAndClose();
  }

  return (
    <StandardDialog
      open={open}
      onClose={(_, reason) => {
        if (reason === 'backdropClick') return;
        cleanupAndClose();
      }}
      titleId="EDIT_USER"
      maxWidth="xs"
    >
      <div style={{ padding: '12px 24px' }}>
        <FormControl variant="outlined" style={{ width: '100%' }}>
          <TextField
            variant="outlined"
            id="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            label="Email address"
          />
        </FormControl>
        <FormControl
          variant="outlined"
          style={{ width: '100%', margin: '12px 0 12px 0' }}
        >
          <TextField
            id="full_name"
            variant="outlined"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            label="Full name"
          />
        </FormControl>
        <RoleDropdown
          value={role}
          onChange={newRole => setRole(newRole)}
        />
        <PasswordVerificationAlert
          setPassword={setPassword}
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
          display="primary"
          onClick={saveProperties}
          loading={isLoading}
          id="SAVE"
        />
      </DialogActions>
    </StandardDialog>
  );
}
