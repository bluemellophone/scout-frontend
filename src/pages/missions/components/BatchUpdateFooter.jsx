import React, { useMemo, useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '../../../components/ButtonNew';
import Text from '../../../components/Text';
import BulkAddTagDialog from './BulkAddTagDialog';
import CreateTaskDialog from './CreateTaskDialog';
import AddToTaskDialog from './dialogs/AddToTaskDialog';
import RemoveFromTaskDialog from './dialogs/RemoveFromTaskDialog';

const buttonIds = {
  all: 'all',
  selected: 'selected',
};

export default function BatchUpdateFooter({
  open,
  resultCount,
  selectedImages = [],
  missionData,
  imageQuery,
}) {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [addingTag, setAddingTag] = useState(false);
  const [creatingTask, setCreatingTask] = useState(false);
  const [addingToTask, setAddingToTask] = useState(false);
  const [removingFromTask, setRemovingFromTask] = useState(false);

  const missionGuid = missionData?.guid;

  const selectedImageCount = selectedImages.length;
  let displayDescription =
    selectedImageCount === 0
      ? `${resultCount} matching images`
      : `${selectedImageCount} of ${resultCount} images selected`;

  const allImagesContext = anchorEl?.id === buttonIds.all;
  const selectedImagesContext = anchorEl?.id === buttonIds.selected;

  const requestOperations = useMemo(
    () => {
      const op = removingFromTask ? 'difference' : 'union';
      if (selectedImagesContext) {
        return [
          {
            op,
            path: '/assets',
            value: selectedImages,
          },
        ];
      } else if (allImagesContext) {
        return [
          {
            op,
            path: '/search',
            value: imageQuery,
          },
        ];
      }
      return null;
    },
    [
      selectedImages,
      imageQuery,
      removingFromTask,
      allImagesContext,
      selectedImagesContext,
    ],
  );

  const affectedImageCount = useMemo(
    () => {
      if (allImagesContext) return resultCount;
      if (selectedImagesContext) return selectedImageCount;
      return 0;
    },
    [
      resultCount,
      selectedImageCount,
      allImagesContext,
      selectedImagesContext,
    ],
  );

  function createCloseHandler(setter) {
    return () => {
      setter(false);
      setAnchorEl(null);
    };
  }

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        width: 'inherit',
        background: theme.palette.common.white,
        borderTop: `1px solid ${theme.palette.action.focus}`,
        transform: open ? 'translate(0, 0)' : 'translate(0, 80px)',
        opacity: open ? 1 : 0,
        transition: '0.15s ease-in-out 0s',
      }}
    >
      <BulkAddTagDialog
        missionGuid={missionGuid}
        selectedImages={selectedImages}
        open={addingTag}
        onClose={createCloseHandler(setAddingTag)}
      />
      <CreateTaskDialog
        requestOperations={requestOperations}
        missionGuid={missionGuid}
        open={creatingTask}
        onClose={createCloseHandler(setCreatingTask)}
      />
      <AddToTaskDialog
        affectedImageCount={affectedImageCount}
        requestOperations={requestOperations}
        missionGuid={missionGuid}
        open={addingToTask}
        onClose={createCloseHandler(setAddingToTask)}
      />
      <RemoveFromTaskDialog
        affectedImageCount={affectedImageCount}
        requestOperations={requestOperations}
        missionGuid={missionGuid}
        open={removingFromTask}
        onClose={createCloseHandler(setRemovingFromTask)}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <Text>{displayDescription}</Text>
        <div>
          <Button
            id={buttonIds.selected}
            icon="expandup"
            style={{ marginRight: 4 }}
            disabled={selectedImageCount === 0}
            onClick={e => setAnchorEl(e.currentTarget)}
          >
            Selected images
          </Button>
          <Button
            id={buttonIds.all}
            icon="expandup"
            onClick={e => setAnchorEl(e.currentTarget)}
          >
            All images
          </Button>
          <Menu
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            anchorEl={anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            transformOrigin={{
              horizontal: 'left',
              vertical: 'bottom',
            }}
          >
            {selectedImagesContext && (
              <MenuItem onClick={() => setAddingTag(true)}>
                Add tag
              </MenuItem>
            )}
            <MenuItem onClick={() => setCreatingTask(true)}>
              Create task
            </MenuItem>
            <MenuItem onClick={() => setAddingToTask(true)}>
              Add to task
            </MenuItem>
            <MenuItem onClick={() => setRemovingFromTask(true)}>
              Remove from task
            </MenuItem>
            {allImagesContext && (
              <MenuItem onClick={Function.prototype}>Export</MenuItem>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
}
