import React, { useEffect, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import useGetMe from '../../models/users/useGetMe';
import usePatchUser from '../../models/users/usePatchUser';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import BodyHeader from '../../components/BodyHeader';
import Button from '../../components/Button';
import Text from '../../components/Text';
import PasswordVerificationAlert from '../../components/PasswordVerificationAlert';

export default function UserSettings() {
  const { data, isLoading } = useGetMe();
  const {
    mutate: patchUser,
    isLoading: patchLoading,
  } = usePatchUser();

  const userGuid = data?.guid;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  useDocumentTitle('Project settings');

  if (isLoading) return null; // make this nicer...

  return (
    <div style={{ padding: '32px 0 0 200px', maxWidth: 800 }}>
      <BodyHeader
        title="User settings"
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
            patchUser({ userGuid, operations: [namePatchOp] });
          }}
        >
          Update
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
              patchUser({
                userGuid,
                password,
                operations: [emailPatchOp],
              });
            }}
          >
            Update
          </Button>
        </PasswordVerificationAlert>
      )}
    </div>
  );
}
