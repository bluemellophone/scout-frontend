import React, { useState } from 'react';

import useGetMission from '../../../../models/missions/useGetMission';
import usePostAssetsToTask from '../../../../models/tasks/usePostAssetsToTask';
import StandardDialog from '../../../../components/StandardDialogNew';
import Text from '../../../../components/Text';
import Alert from '../../../../components/Alert';
import TaskDropdown from '../../../../components/TaskDropdown';

export default function AddToTaskDialog({
  open,
  onClose,
  selectedImages,
  missionGuid,
}) {
  const [selectedTask, setSelectedTask] = useState('');

  const { data: missionData } = useGetMission(missionGuid);
  const {
    mutate: postAssetsToTask,
    isLoading,
    error,
  } = usePostAssetsToTask();

  function handleClose() {
    setSelectedTask('');
    onClose();
  }

  return (
    <StandardDialog
      open={open}
      onClose={handleClose}
      onSubmit={async () => {
        const operations = [
          {
            op: 'union',
            path: '/assets',
            value: selectedImages,
          },
        ];
        const result = await postAssetsToTask({
          taskGuid: selectedTask,
          missionGuid,
          operations,
        });
        if (result?.status === 200) handleClose();
      }}
      submitDisabled={selectedTask === ''}
      submitButtonLoading={isLoading}
      submitButtonLabel="Add to task"
      title="Add to task"
      maxWidth="xs"
    >
      <Text variant="body2" style={{ marginBottom: 12 }}>
        {`Select a task to add ${selectedImages?.length} images.`}
      </Text>
      <TaskDropdown
        tasks={missionData?.tasks}
        value={selectedTask}
        onChange={taskGuid => setSelectedTask(taskGuid)}
      />
      {error && (
        <Alert
          style={{ marginTop: 16, marginBottom: 8 }}
          severity="error"
          title="Failed to add images to task"
        >
          {error}
        </Alert>
      )}
    </StandardDialog>
  );
}
