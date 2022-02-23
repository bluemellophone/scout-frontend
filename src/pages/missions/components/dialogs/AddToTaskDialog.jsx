import React, { useState } from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import useGetMission from '../../../../models/missions/useGetMission';
import usePostAssetsToTask from '../../../../models/tasks/usePostAssetsToTask';
import StandardDialog from '../../../../components/StandardDialog';
import Button from '../../../../components/Button';
import Text from '../../../../components/Text';
import Alert from '../../../../components/Alert';
import TaskDropdown from '../../../../components/TaskDropdown';

export default function AddToTaskDialog({
  open,
  onClose,
  selectedImages,
  missionGuid,
})
{
  const [selectedTask, setSelectedTask] = useState('');

  const { data: missionData } = useGetMission(missionGuid);
  const { mutate: postAssetsToTask, isLoading, error } = usePostAssetsToTask();

  function handleClose()
  {
    setSelectedTask('');
    onClose();
  }

  return (
    <StandardDialog
      open={open}
      onClose={handleClose}
      title="Add to task"
      PaperProps={{ style: { width: 400 } }}
    >
      <DialogContent>
        <Text variant="body2" style={{ marginBottom: 12 }}>
          {`Select a task to add ${selectedImages?.length} images.`}
        </Text>
        <TaskDropdown tasks={missionData?.tasks} value={selectedTask} onChange={taskGuid => setSelectedTask(taskGuid)} />
        {error && (
          <Alert
            style={{ marginTop: 16, marginBottom: 8 }}
            severity="error"
            title="Failed to add images to task"
          >
            {error}
          </Alert>
        )}
      </DialogContent>
      <DialogActions style={{ padding: '0px 24px 24px 24px' }}>
        <Button display="basic" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          display="primary"
          loading={isLoading}
          disabled={selectedTask === '' || isLoading}
          onClick={async () =>
          {
            const operations = [
              {
                op: 'union',
                path: '/assets',
                value: selectedImages,
              },
            ];
            const result = await postAssetsToTask({ taskGuid: selectedTask, operations });
            if (result?.status === 200) handleClose();
          }}
        >
          Add to task
        </Button>
      </DialogActions>
    </StandardDialog>
  );
}
