import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

import ListTitle from './ListTitle';
import CreateTaskDialog from './CreateTaskDialog';

const currrentProjectButtonId = 'current-project-button';

const componentWidth = 280;

const tasks = [
  {
    guid: 123,
    title: 'Task for Jimbo',
    status: 'Complete',
  },
  {
    guid: 512,
    title: 'Task for Mark',
    status: '93% of images viewed',
  },
  {
    guid: 523,
    title: 'Imgs for Sally',
    status: '43% of images viewed',
  },
  {
    guid: 234,
    title: 'Review Jimbos work',
    status: '13% of images viewed',
  },
  {
    guid: 4215,
    title: 'Review Sallys work',
    status: '43% of images viewed',
  },
];

export default function TaskSwitcher({ missionData }) {
  const [creatingTask, setCreatingTask] = useState(false);
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
          style={{ padding: 0, width: componentWidth }}
        >
          {tasks.map(task => (
            <ListItem
              button
              id={currrentProjectButtonId}
              aria-controls="view task"
              aria-label={task.title}
              onClick={Function.prototype}
            >
              <ListItemText
                primary={task.title}
                secondary={task.status}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
}
