import React, { useState } from 'react';

import Text from '../../../components/Text';
import MultipleOptionFilter from '../../../components/filterFields/MultipleOptionFilter';
import TagOptionFilter from '../../../components/filterFields/TagOptionFilter';
import StringFilter from '../../../components/filterFields/StringFilter';
import ImageTable from './table/ImageTable';

const buttonStyle = { marginRight: 4 };

export default function ImageDisplay({
  missionData,
  setImageQuery,
  ...rest
}) {
  const [filename, setFilename] = useState('');
  const [tasks, setTasks] = useState([]);
  const [tags, setTags] = useState([]);

  const safeMissionTasks = missionData?.tasks || [];
  const taskOptions = safeMissionTasks.map(t => ({
    label: t?.title || 'Untitled task',
    value: t?.guid,
  }));

  return (
    <div>
      <Text
        style={{
          marginTop: 32,
          marginBottom: 12,
          fontWeight: 'bold',
        }}
      >
        Filters
      </Text>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        <StringFilter
          label="Filename"
          value={filename}
          onChange={newFilename => setFilename(newFilename)}
          buttonStyle={buttonStyle}
        />
        <MultipleOptionFilter
          value={tasks}
          onChange={newTasks => setTasks(newTasks)}
          label="Tasks"
          options={taskOptions}
          openDirection="left"
          buttonStyle={buttonStyle}
        />
        <TagOptionFilter
          value={tags}
          onChange={newTags => setTags(newTags)}
          label="Tags"
          openDirection="left"
          buttonStyle={buttonStyle}
        />
      </div>
      <Text style={{ marginTop: 12 }} variant="body2">{`${
        missionData?.asset_count
      } images in this project.`}</Text>
      {/* <ImageTable {...rest} /> */}
    </div>
  );
}
