import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { get } from 'lodash-es';

import { formatDate } from '../../utils/formatters';
import useGetTask from '../../models/tasks/useGetTask';
import useGetAssets from '../../models/assets/useGetAssets';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import TaskDrawer from './components/TaskDrawer';
import TaskDashboard from './components/TaskDashboard';
import viewModes from './constants/viewModes';

export default function Task({ id: idFromProps }) {
  const { id: idFromUrl } = useParams();
  const id = idFromProps || idFromUrl;

  const [mode, setMode] = useState(viewModes.one);
  const [selectedAssets, setSelectedAssets] = useState([]);

  const { data, isLoading, dataUpdatedAt } = useGetTask(id);
  const [firstSelectedAssetQuery] = useGetAssets(
    selectedAssets.map(a => a?.guid),
  );

  const taskAssets = useMemo(
    () => get(data, 'assets', []).map((a, i) => ({ ...a, index: i })),
    [dataUpdatedAt],
  );

  useEffect(
    () => {
      if (taskAssets.length > 0) setSelectedAssets([taskAssets[0]]);
    },
    [taskAssets],
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
        taskAssets={taskAssets}
        createdDate={createdDate}
        selectedAssets={selectedAssets}
        setSelectedAssets={setSelectedAssets}
        selectedAssetQuery={firstSelectedAssetQuery}
        mode={mode}
      />
      <TaskDashboard
        taskData={data}
        taskAssets={taskAssets}
        taskName={displayTaskName}
        createdDate={createdDate}
        selectedAssets={selectedAssets}
        setSelectedAssets={setSelectedAssets}
        mode={mode}
        setMode={setMode}
      />
    </div>
  );
}
