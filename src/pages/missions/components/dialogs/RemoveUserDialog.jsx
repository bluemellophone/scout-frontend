import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Alert from '../../../../components/Alert';
import Button from '../../../../components/Button';
import Text from '../../../../components/Text';
import StandardDialog from '../../../../components/StandardDialog';
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
    <StandardDialog open={open} onClose={onClose} title="Remove user">
      <DialogContent>
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
      </DialogContent>
      <DialogActions>
        <Button display="basic" onClick={onClose} id="CANCEL" />

        <Button
          disabled={isLoading}
          loading={isLoading}
          display="primary"
          onClick={async () => {
            const result = await removeUserFromMission({
              missionGuid,
              userGuid: user?.guid,
            });

            if (result?.status === 200) {
              onClose();
            }
          }}
        >
          Remove user
        </Button>
      </DialogActions>
    </StandardDialog>
  );
}
