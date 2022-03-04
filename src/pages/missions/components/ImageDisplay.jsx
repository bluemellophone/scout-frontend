import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import KeywordAutocomplete from '../../../components/KeywordAutocomplete';
import TaskDropdown from '../../../components/TaskDropdown';
import Text from '../../../components/Text';
import ImageTable from './table/ImageTable';

const filterWidth = 320;
const filterMarginRight = 12;

export default function ImageDisplay({ missionData, ...rest })
{
  const [filename, setFilename] = useState('');
  const [tasks, setTasks] = useState([]);

  console.log(missionData);

  return (
    <div>
      <Text style={{ marginTop: 32, fontWeight: 'bold' }}>
        Filters
      </Text>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        <TextField
          variant="outlined"
          id="filename-filter"
          onChange={e =>
          {
            setFilename(e.target.value);
          }}
          label="Filename"
          value={filename}
          style={{
            marginRight: filterMarginRight,
            width: filterWidth,
          }}
          size="small"
        />
        <TaskDropdown
          label="Tasks"
          tasks={missionData?.tasks}
          value={tasks}
          onChange={newTasks => setTasks(newTasks)}
          formControlStyle={{
            width: filterWidth,
            marginRight: filterMarginRight,
          }}
          style={{ marginRight: filterMarginRight }}
          SelectDisplayProps={{ style: { padding: '10.5px 14px' } }}
          multiple
        />
        <KeywordAutocomplete
          textFieldProps={{
            variant: 'outlined',
            size: 'small',
            style: {
              width: filterWidth,
              marginRight: filterMarginRight,
            },
          }}
        />
      </div>
      <Text>{`${missionData?.asset_count
        } images in this project.`}</Text>
      <ImageTable {...rest} />
    </div>
  );
}
