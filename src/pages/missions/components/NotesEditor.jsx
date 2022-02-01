import React, { useEffect, useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import usePatchMission from '../../../models/missions/usePatchMission';

function getStatusText(status) {
  if (status === 'loading') return 'Saving changes...';
  if (status === 'error') return 'Error saving changes.';
  if (status === 'success') return 'Changes saved.';
  return undefined;
}

export default function NotesEditor({ missionData }) {
  const { patchMission, status, error } = usePatchMission();
  const [notes, setNotes] = useState('');

  useEffect(
    () => {
      const initialNotes = missionData?.notes;
      if (initialNotes) setNotes(initialNotes);
    },
    [missionData],
  );

  const missionId = missionData?.guid;

  return (
    <FormControl style={{ marginTop: 20 }}>
      <TextField
        id="project notes"
        multiline
        minRows={7}
        maxRows={7}
        label="Notes"
        variant="outlined"
        onChange={e => setNotes(e.target.value)}
        onBlur={async () => {
          const replaceNotesOperation = {
            op: 'replace',
            path: '/notes',
            value: notes,
          };
          await patchMission(missionId, [replaceNotesOperation]);
        }}
        value={notes}
        helperText={getStatusText(status)}
        error={Boolean(error)}
        style={{ width: 320 }}
      />
    </FormControl>
  );
}
