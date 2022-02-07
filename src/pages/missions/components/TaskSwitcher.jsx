import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

import Link from '../../../components/Link';
import ListTitle from './ListTitle';
import CreateTaskDialog from './CreateTaskDialog';

const currrentProjectButtonId = 'current-project-button';

export default function TaskSwitcher({ missionData }) {
  const [creatingTask, setCreatingTask] = useState(false);
  const tasks = missionData?.tasks || [];
  return (
    <>
      <CreateTaskDialog
        message="Are you sure you want to create a new task?"
        selectedImages={[]}
        missionGuid={missionData?.guid}
        open={creatingTask}
        onClose={() => setCreatingTask(false)}
      />
      <ListTitle
        title="Tasks"
        buttonVariant="button"
        buttonText="New task"
        onClick={() => setCreatingTask(true)}
      />
      <Paper
        style={{
          marginBottom: 20,
          maxHeight: 268,
          overflow: 'scroll',
        }}
      >
        <List
          component="nav"
          aria-label="tasks in this project"
          style={{ padding: 0 }}
        >
          {tasks.map(task =>
          {
            const taskTitle = task?.title || 'Unnamed task';
            const assetCount = task?.asset_count || 0;
            let taskSubtitle = `${assetCount} images`;
            if (assetCount === 0) taskSubtitle = 'No images';
            if (assetCount === 1) taskSubtitle = '1 image';
            return (
              <Link noUnderline to={`/tasks/${task?.guid}`}>
                <ListItem
                  button
                  id={currrentProjectButtonId}
                  aria-controls="view task"
                  aria-label={taskTitle}
                >
                  <ListItemText
                    primary={taskTitle}
                    secondary={taskSubtitle}
                  />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Paper>
    </>
  );
}
