import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from 'lodash-es';

import { formatDate } from '../../utils/formatters';
import useGetTask from '../../models/tasks/useGetTask';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import TaskDrawer from './components/TaskDrawer';
import TaskDashboard from './components/TaskDashboard';

export default function Task({ id: idFromProps }) {
  const { id: idFromUrl } = useParams();
  const id = idFromProps || idFromUrl;
  const { data, isLoading } = useGetTask(id);

  const [selectedAsset, setSelectedAsset] = useState(null);
  useEffect(
    () => {
      if (data) setSelectedAsset(get(data, ['assets', '0'], null));
    },
    [data],
  );

  const taskName = data?.title || 'Untitled task';
  const createdDate = formatDate(data?.created, true);

  const displayTaskName = isLoading ? 'Loading task..' : taskName;
  useDocumentTitle(displayTaskName);

  return (
    <div style={{ display: 'flex' }}>
      <TaskDrawer
        taskData={data}
        taskName={displayTaskName}
        createdDate={createdDate}
        selectedAsset={selectedAsset}
        setSelectedAsset={setSelectedAsset}
      />
      <TaskDashboard
        taskData={data}
        taskName={displayTaskName}
        createdDate={createdDate}
        selectedAsset={selectedAsset}
        setSelectedAsset={setSelectedAsset}
      />
    </div>
  );
}
