import React, { useState } from 'react';
import { get } from 'lodash-es';

import Text from '../Text';
import Alert from '../Alert';
import StandardDialog from '../StandardDialogNew';
import PasswordVerificationAlert from '../PasswordVerificationAlert';
import useDeleteUser from '../../models/users/useDeleteUser';

export default function UserDeleteDialog({
  open,
  onClose,
  userData,
  deactivatingSelf = false,
}) {
  const [touched, setTouched] = useState(true);
  const [password, setPassword] = useState('');

  const { deleteUser, loading, error } = useDeleteUser();

  function cleanupAndClose() {
    setTouched(true);
    setPassword('');
    onClose();
  }

  async function processDeletion() {
    const success = await deleteUser(get(userData, 'guid'), password);
    if (success) {
      cleanupAndClose();
    }
  }

  const title = deactivatingSelf
    ? 'Deactivate account'
    : 'Deactivate user';
  const confirmationId = deactivatingSelf
    ? 'DEACTIVATE_ACCOUNT_CONFIRMATION'
    : 'CONFIRM_USER_DEACTIVATION';
  const confirmationValues = deactivatingSelf
    ? undefined
    : {
        username: get(userData, 'full_name')
          ? get(userData, 'full_name')
          : get(userData, 'email'),
      };

  return (
    <StandardDialog
      open={open}
      title={title}
      onClose={cleanupAndClose}
      onSubmit={processDeletion}
      submitButtonLoading={loading}
      submitButtonLabel={title}
      submitButtonProps={{ display: 'danger' }}
      maxWidth="xs"
    >
      <div>
        <Text id={confirmationId} values={confirmationValues} />
        {touched ? (
          <PasswordVerificationAlert
            style={{ marginTop: 20 }}
            setPassword={setPassword}
            descriptionId="DEACTIVATION_SENSITIVE_ACTION_DESCRIPTION"
          />
        ) : null}
        {error && (
          <Alert severity="error" titleId="SERVER_ERROR">
            {error}
          </Alert>
        )}
      </div>
    </StandardDialog>
  );
}
