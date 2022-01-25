import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import Text from '../../../components/Text';
import TaskSwitcher from './TaskSwitcher';
import MissionSwitcher from './MissionSwitcher';

export default function MissionDrawer({ missionData, projectName })
{
  const [open, setOpen] = useState(true);
  const [notes, setNotes] = useState(true);

  return (
    <Drawer
      anchor="left"
      variant="permanent"
      open={open}
      onClose={() => setOpen(false)}
      style={{ width: 300 }}
      PaperProps={{ style: { padding: 20 } }}
    >
      <Text>MWS</Text>
      <Divider />

      <MissionSwitcher missionData={missionData} />

      <TaskSwitcher />

      <FormControl style={{ marginTop: 20 }}>
        <TextField
          id="project notes"
          multiline
          minRows={7}
          maxRows={7}
          label="Notes"
          variant="outlined"
          onChange={e => setNotes(e.target.value)}
          value={notes}
        />
      </FormControl>
    </Drawer>
  );
}
