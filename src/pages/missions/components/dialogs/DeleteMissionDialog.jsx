import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Alert from '../../../../components/Alert';
import Button from '../../../../components/ButtonNew';
import Text from '../../../../components/Text';
import StandardDialog from '../../../../components/StandardDialog';
import useDeleteMission from '../../../../models/missions/useDeleteMission';

const title = 'DELETE PROJECT';

export default function DeleteMissionDialog({
  open,
  onClose,
  missionGuid,
}) {
  const theme = useTheme();
  const {
    mutate: deleteMission,
    isLoading,
    error,
  } = useDeleteMission();

  return (
    <StandardDialog open={open} onClose={onClose} title={title}>
      <DialogContent>
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
      </DialogContent>
      <DialogActions>
        <Button display="basic" onClick={onClose} id="CANCEL" />

        <Button
          disabled={isLoading}
          loading={isLoading}
          onClick={async () => {
            const result = await deleteMission({ missionGuid });
            if (result?.status === 200) onClose();
          }}
          style={{
            background: theme.palette.error.main,
            color: theme.palette.common.white,
          }}
        >
          {title}
        </Button>
      </DialogActions>
    </StandardDialog>
  );
}
