import React from 'react';

import Alert from '../../../../components/Alert';
import Text from '../../../../components/Text';
import StandardDialog from '../../../../components/StandardDialogNew';
import useDeleteMission from '../../../../models/missions/useDeleteMission';

const title = 'DELETE PROJECT';

export default function DeleteMissionDialog({
  open,
  onClose,
  missionGuid,
}) {
  const {
    mutate: deleteMission,
    isLoading,
    error,
  } = useDeleteMission();

  return (
    <StandardDialog
      open={open}
      onClose={onClose}
      onSubmit={async () => {
        const result = await deleteMission({ missionGuid });
        if (result?.status === 200) onClose();
      }}
      submitButtonLabel="Delete project"
      submitButtonLoading={isLoading}
      submitButtonProps={{ display: 'danger' }}
      title={title}
      maxWidth="xs"
    >
      <Text variant="body2">
        Are you sure you want to delete this project? This action
        cannot be undone.
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
