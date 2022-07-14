import React, { useMemo, useState } from 'react';

import Text from '../../../components/Text';
import Button from '../../../components/Button';
import MultipleOptionFilter from '../../../components/filterFields/MultipleOptionFilter';
import TagOptionFilter from '../../../components/filterFields/TagOptionFilter';
import StringFilter from '../../../components/filterFields/StringFilter';
import IntegerFilter from '../../../components/filterFields/IntegerFilter';
import DateFilter from '../../../components/filterFields/DateFilter';
import buildAssetQueries from '../utils/buildAssetQueries';
import ImageTable from './table/ImageTable';

const initialFilename = '';
const initialTasks = [];
const initialTags = [];
const initialCountRange = {};
const initialCreatedRange = {};
const initialUpdatedRange = {};

const buttonStyle = { marginRight: 4, marginTop: 4 };

export default function ImageDisplay({
  images,
  loading,
  resultCount,
  missionData,
  setImageQuery,
  ...rest
}) {
  const [filename, setFilename] = useState(initialFilename);
  const [tasks, setTasks] = useState(initialTasks);
  const [tags, setTags] = useState(initialTags);
  const [annotationCountRange, setAnnotationCountRange] = useState(
    initialCountRange,
  );
  const [createdRange, setCreatedRange] = useState(
    initialCreatedRange,
  );
  const [updatedRange, setUpdatedRange] = useState(
    initialUpdatedRange,
  );

  const clearAllFilters = useMemo(() => {
    return () => {
      setFilename(initialFilename);
      setTasks(initialTasks);
      setTags(initialTags);
      setAnnotationCountRange(initialCountRange);
      setCreatedRange(initialCreatedRange);
      setUpdatedRange(initialUpdatedRange);

      const newQuery = buildAssetQueries({
        filename: initialFilename,
        tasks: initialTasks,
        tags: initialTags,
        annotationCountRange: initialCountRange,
        createdRange: initialCreatedRange,
        updatedRange: initialUpdatedRange,
      });
      setImageQuery(newQuery);
    };
  }, []);

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

  let tableTitle = `Displaying ${imageCount} out of ${resultCount} matching images.`;
  if (imageCount === 0) tableTitle = 'No images match these filters.';
  if (imageCount === resultCount)
    tableTitle = `${resultCount} images in this project.`;
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
          value={createdRange}
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
          value={updatedRange}
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
        <Button onClick={clearAllFilters} style={buttonStyle}>
          Clear all
        </Button>
      </div>
      <ImageTable
        title={tableTitle}
        data={images}
        loading={loading}
        totalAssets={resultCount}
        {...rest}
      />
    </div>
  );
}
