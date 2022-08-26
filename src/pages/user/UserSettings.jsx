import React, { useEffect, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import useGetMe from '../../models/users/useGetMe';
import usePatchUser from '../../models/users/usePatchUser';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import BodyHeader from '../../components/BodyHeader';
import Button from '../../components/ButtonNew';
import EphemeralFeedback from '../../components/EphemeralFeedback';
import Text from '../../components/Text';
import PasswordVerificationAlert from '../../components/PasswordVerificationAlert';
import ChangeUserPasswordDialog from '../../components/dialogs/ChangeUserPasswordDialog';

export default function UserSettings() {
  const { data, isLoading } = useGetMe();
  const {
    mutate: patchUser,
    isLoading: patchLoading,
  } = usePatchUser();

  const userGuid = data?.guid;

  const [renameSuccessOpen, setRenameSuccessOpen] = useState(false);
  const [
    changeEmailSuccessOpen,
    setChangeEmailSuccessOpen,
  ] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);

  useEffect(
    () => {
      if (data) {
        setName(data?.full_name);
        setEmail(data?.email);
      }
    },
    [data],
  );

  const emailChanged = data?.email !== email;

  useDocumentTitle('Profile settings');

  if (isLoading) return null; // make this nicer...

  return (
    <div style={{ padding: '32px 0 0 200px', maxWidth: 800 }}>
      <EphemeralFeedback
        open={renameSuccessOpen}
        setOpen={setRenameSuccessOpen}
        message={`User name changed to "${data?.full_name}"`}
      />
      <EphemeralFeedback
        open={changeEmailSuccessOpen}
        setOpen={setChangeEmailSuccessOpen}
        message={`Email address changed to "${data?.email}"`}
      />
      <ChangeUserPasswordDialog
        title="Change password"
        open={changePasswordOpen}
        onClose={() => setChangePasswordOpen(false)}
        userGuid={userGuid}
      />
      <BodyHeader
        title="Profile settings"
        showBackButton
        backButtonHref="/"
        backButtonText="Return home"
      />
      <Divider style={{ margin: '12px 0 20px 0' }} />
      <Text style={{ fontWeight: 'bold', margin: '24px 0 4px 4px' }}>
        Full name
      </Text>
      <div style={{ display: 'flex' }}>
        <TextField
          style={{ marginRight: 8 }}
          fullWidth
          variant="outlined"
          size="small"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Button
          display="primary"
          loading={patchLoading}
          disabled={data?.full_name === name}
          onClick={async () => {
            const namePatchOp = {
              op: 'replace',
              path: '/full_name',
              value: name,
            };
            const result = await patchUser({
              userGuid,
              operations: [namePatchOp],
            });
            if (result?.status === 200) setRenameSuccessOpen(true);
          }}
        >
          RENAME
        </Button>
      </div>
      <Text style={{ fontWeight: 'bold', margin: '24px 0 4px 4px' }}>
        Email address
      </Text>
      <div style={{ display: 'flex' }}>
        <TextField
          style={{ marginRight: 8 }}
          fullWidth
          variant="outlined"
          size="small"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      {emailChanged && (
        <PasswordVerificationAlert
          style={{ marginTop: 8 }}
          setPassword={setPassword}
          descriptionId="EMAIL_CHANGE_DESCRIPTION"
        >
          <Button
            display="primary"
            loading={patchLoading}
            disabled={password === ''}
            onClick={async () => {
              const emailPatchOp = {
                op: 'replace',
                path: '/email',
                value: email,
              };
              const result = await patchUser({
                userGuid,
                password,
                operations: [emailPatchOp],
              });
              if (result?.status === 200)
                setChangeEmailSuccessOpen(true);
            }}
          >
            UPDATE
          </Button>
        </PasswordVerificationAlert>
      )}
      <Text style={{ fontWeight: 'bold', margin: '24px 0 4px 4px' }}>
        Update your password
      </Text>
      <div style={{ display: 'flex' }}>
        <Button
          display="primary"
          onClick={() => setChangePasswordOpen(true)}
        >
          CHANGE PASSWORD
        </Button>
      </div>
    </div>
  );
}
