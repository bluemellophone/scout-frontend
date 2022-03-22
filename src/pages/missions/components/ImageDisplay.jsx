import React, { useState } from 'react';

import Text from '../../../components/Text';
import MultipleOptionFilter from '../../../components/filterFields/MultipleOptionFilter';
import TagOptionFilter from '../../../components/filterFields/TagOptionFilter';
import StringFilter from '../../../components/filterFields/StringFilter';
import IntegerFilter from '../../../components/filterFields/IntegerFilter';
import DateFilter from '../../../components/filterFields/DateFilter';
import buildAssetQueries from '../utils/buildAssetQueries';
import ImageTable from './table/ImageTable';

const buttonStyle = { marginRight: 4, marginTop: 4 };

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
  const [annotationCountRange, setAnnotationCountRange] = useState(
    {},
  );
  const [createdRange, setCreatedRange] = useState({});
  const [updatedRange, setUpdatedRange] = useState({});

  const filters = {
    filename,
    tasks,
    tags,
    annotationCountRange,
    createdRange,
    updatedRange,
  };

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
          marginBottom: 8,
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
              ...filters,
              filename: newFilename,
            });
            setImageQuery(newQuery);
            setFilename(newFilename);
          }}
          buttonStyle={buttonStyle}
        />
        <DateFilter
          label="Date added"
          onChange={newCreatedRange => {
            const newQuery = buildAssetQueries({
              ...filters,
              createdRange: newCreatedRange,
            });
            setImageQuery(newQuery);
            setCreatedRange(newCreatedRange);
          }}
          buttonStyle={buttonStyle}
        />
        <DateFilter
          label="Last updated"
          onChange={newUpdatedRange => {
            const newQuery = buildAssetQueries({
              ...filters,
              updatedRange: newUpdatedRange,
            });
            setImageQuery(newQuery);
            setUpdatedRange(newUpdatedRange);
          }}
          buttonStyle={buttonStyle}
        />
        <MultipleOptionFilter
          value={tasks}
          onChange={newTasks => {
            const newQuery = buildAssetQueries({
              ...filters,
              tasks: newTasks,
            });
            setImageQuery(newQuery);
            setTasks(newTasks);
          }}
          label="Tasks"
          options={taskOptions}
          buttonStyle={buttonStyle}
          noOptionsText="This project has no tasks."
        />
        <IntegerFilter
          value={annotationCountRange}
          onChange={newAnnotationCountRange => {
            const newQuery = buildAssetQueries({
              ...filters,
              annotationCountRange: newAnnotationCountRange,
            });
            setImageQuery(newQuery);
            setAnnotationCountRange(newAnnotationCountRange);
          }}
          label="Annotation count"
          buttonStyle={buttonStyle}
        />
        <TagOptionFilter
          value={tags}
          onChange={newTags => {
            const newQuery = buildAssetQueries({
              ...filters,
              tags: newTags,
            });
            setImageQuery(newQuery);
            setTags(newTags);
          }}
          label="Tags"
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
