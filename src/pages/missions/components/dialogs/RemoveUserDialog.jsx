import React from 'react';

import Alert from '../../../../components/Alert';
import Text from '../../../../components/Text';
import StandardDialog from '../../../../components/StandardDialogNew';
import useRemoveUserFromMission from '../../../../models/missions/useRemoveUserFromMission';

export default function RemoveUserDialog({
  open,
  onClose,
  missionGuid,
  user,
}) {
  const {
    mutate: removeUserFromMission,
    isLoading,
    error,
  } = useRemoveUserFromMission();

  const userName = user?.full_name || 'Unnamed User';

  return (
    <StandardDialog
      open={open}
      onClose={onClose}
      onSubmit={async () => {
        const result = await removeUserFromMission({
          missionGuid,
          userGuid: user?.guid,
        });

        if (result?.status === 200) {
          onClose();
        }
      }}
      submitButtonLoading={isLoading}
      submitButtonLabel="Remove user"
      title="Remove user"
    >
      <Text variant="body2">
        {`Are you sure you want to remove ${userName} from this project?`}
      </Text>
      {error && (
        <Alert
          style={{ marginTop: 16, marginBottom: 8 }}
          severity="error"
          title="Server error"
        >
          {error}
        </Alert>
      )}
    </StandardDialog>
  );
}
