import React, { useState } from 'react';
import { get } from 'lodash-es';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

import Text from '../../../components/Text';

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
  return (
    <>
      <Text variant="caption" style={{ margin: '20px 0 0 12px' }}>
        Tasks
      </Text>
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
