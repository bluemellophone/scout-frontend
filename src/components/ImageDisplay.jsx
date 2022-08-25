import React, { useMemo, useState } from 'react';
import { isEmpty } from 'lodash-es';

import Text from './Text';
import Button from './ButtonNew';
import MultipleOptionFilter from './filterFields/MultipleOptionFilter';
import TagOptionFilter from './filterFields/TagOptionFilter';
import StringFilter from './filterFields/StringFilter';
import IntegerFilter from './filterFields/IntegerFilter';
import DateFilter from './filterFields/DateFilter';
import buildAssetQueries from '../pages/missions/utils/buildAssetQueries';
import ImageTable from '../pages/missions/components/table/ImageTable';

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
  imageQuery,
  setImageQuery,
  selectedImages,
  setSelectedImages,
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

  const clearAllFilters = useMemo(
    () => () => {
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
    },
    [],
  );

  const onClearSelection = useMemo(
    () => () => {
      if (imageQuery) setImageQuery({});
      if (selectedImages) setSelectedImages([]);
    },
    [imageQuery, selectedImages],
  );

  const showClearSelectionWarning = useMemo(
    () => selectedImages?.length > 0 || !isEmpty(imageQuery),
    [isEmpty(imageQuery), selectedImages?.length],
  );

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
          showClearSelectionWarning={showClearSelectionWarning}
          onClearSelection={onClearSelection}
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
          showClearSelectionWarning={showClearSelectionWarning}
          onClearSelection={onClearSelection}
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
          showClearSelectionWarning={showClearSelectionWarning}
          onClearSelection={onClearSelection}
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
          showClearSelectionWarning={showClearSelectionWarning}
          onClearSelection={onClearSelection}
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
          showClearSelectionWarning={showClearSelectionWarning}
          onClearSelection={onClearSelection}
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
          showClearSelectionWarning={showClearSelectionWarning}
          onClearSelection={onClearSelection}
          label="Tags"
          buttonStyle={buttonStyle}
        />
        <Button
          display="neutral"
          onClick={clearAllFilters}
          style={buttonStyle}
        >
          Clear all
        </Button>
      </div>
      <ImageTable
        title={tableTitle}
        data={images}
        loading={loading}
        totalAssets={resultCount}
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
        {...rest}
      />
    </div>
  );
}
