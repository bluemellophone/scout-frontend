import React from 'react';
import { useParams } from 'react-router-dom';

import { formatDate } from '../../utils/formatters';
import useGetTask from '../../models/tasks/useGetTask';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import TaskDrawer from './components/TaskDrawer';
import TaskDashboard from './components/TaskDashboard';

export default function Task({ id: idFromProps }) {
  const { id: idFromUrl } = useParams();
  const id = idFromProps || idFromUrl;

  const { data, isLoading } = useGetTask(id);

  const taskName = data?.title || 'Untitled task';
  const createdDate = formatDate(data?.created, true);

  const displayTaskName = isLoading ? 'Loading task..' : taskName;
  useDocumentTitle(displayTaskName);

  console.log(data);

  return (
    <div style={{ display: 'flex' }}>
      <TaskDrawer
        taskData={data}
        taskName={displayTaskName}
        createdDate={createdDate}
      />
      <TaskDashboard
        taskData={data}
        taskName={displayTaskName}
        createdDate={createdDate}
      />
    </div>
  );
}
