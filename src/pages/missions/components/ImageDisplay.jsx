import React, { useState } from 'react';

import Text from '../../../components/Text';
import MultipleOptionFilter from '../../../components/filterFields/MultipleOptionFilter';
import TagOptionFilter from '../../../components/filterFields/TagOptionFilter';
import StringFilter from '../../../components/filterFields/StringFilter';
import IntegerFilter from '../../../components/filterFields/IntegerFilter';
import buildAssetQueries from '../utils/buildAssetQueries';
import ImageTable from './table/ImageTable';

const buttonStyle = { marginRight: 4 };

export default function ImageDisplay({
  images,
  loading,
  missionData,
  setImageQuery,
  ...rest
}) {
  const [filename, setFilename] = useState('');
  const [tasks, setTasks] = useState([]);
  const [tags, setTags] = useState([]);
  const [assetCountRange, setAssetCountRange] = useState({});

  const safeMissionTasks = missionData?.tasks || [];
  const taskOptions = safeMissionTasks.map(t => ({
    label: t?.title || 'Untitled task',
    value: t?.guid,
  }));

  const imageCount = images?.length;
  const totalAssets = missionData?.asset_count;

  let tableTitle = `${imageCount} out of ${totalAssets} images.`;
  if (imageCount === 0) tableTitle = 'No images match these filters.';
  if (imageCount === totalAssets)
    tableTitle = `${totalAssets} images in this project.`;
  if (loading) tableTitle = 'Loading images...';

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
          onChange={newFilename => {
            const newQuery = buildAssetQueries({
              filename: newFilename,
              tasks,
              tags,
            });
            setImageQuery(newQuery);
            setFilename(newFilename);
          }}
          buttonStyle={buttonStyle}
        />
        <MultipleOptionFilter
          value={tasks}
          onChange={newTasks => {
            const newQuery = buildAssetQueries({
              filename,
              tasks: newTasks,
              tags,
            });
            setImageQuery(newQuery);
            setTasks(newTasks);
          }}
          label="Tasks"
          options={taskOptions}
          buttonStyle={buttonStyle}
          noOptionsText="This project has no tasks."
        />
        <TagOptionFilter
          value={tags}
          onChange={newTags => {
            const newQuery = buildAssetQueries({
              filename,
              tasks,
              tags: newTags,
            });
            setImageQuery(newQuery);
            setTags(newTags);
          }}
          label="Tags"
          buttonStyle={buttonStyle}
        />
        <IntegerFilter
          value={assetCountRange}
          onChange={newAssetCountRange => {
            const newQuery = buildAssetQueries({
              filename,
              tasks,
              tags,
            });
            setImageQuery(newQuery);
            setAssetCountRange(newAssetCountRange);
          }}
          label="Asset count"
          buttonStyle={buttonStyle}
        />
      </div>
      <ImageTable
        title={tableTitle}
        data={images}
        loading={loading}
        {...rest}
      />
    </div>
  );
}
