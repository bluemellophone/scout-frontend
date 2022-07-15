import React, { useEffect, useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '../../../components/Button';
import Text from '../../../components/Text';
import BulkAddTagDialog from './BulkAddTagDialog';
import CreateTaskDialog from './CreateTaskDialog';
import AddToTaskDialog from './dialogs/AddToTaskDialog';

export default function BatchUpdateFooter({
  open,
  resultCount,
  allImages,
  selectedImages,
  missionData,
  imageQuery,
}) {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(false);
  const [addingTag, setAddingTag] = useState(false);
  const [creatingTask, setCreatingTask] = useState(false);
  const [addingToTask, setAddingToTask] = useState(false);
  const [selectedImageCount, setSelectedImageCount] = useState(null);

  const missionGuid = missionData?.guid;

  useEffect(
    () => {
      const startCount = imageQuery
        ? resultCount - allImages?.length
        : 0;
      const imageCount = startCount + selectedImages?.length;
      if (imageCount) setSelectedImageCount(imageCount);
    },
    [
      selectedImages?.length,
      allImages?.length,
      imageQuery,
      resultCount,
    ],
  );

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        width: 'inherit',
        background: theme.palette.common.black,
        transform: open ? 'translate(0, 0)' : 'translate(0, 80px)',
        opacity: open ? 1 : 0,
        transition: '0.15s ease-in-out 0s',
      }}
    >
      <BulkAddTagDialog
        missionGuid={missionGuid}
        selectedImages={selectedImages}
        open={addingTag}
        onClose={() => setAddingTag(false)}
      />
      <CreateTaskDialog
        selectedImages={selectedImages}
        missionGuid={missionGuid}
        open={creatingTask}
        onClose={() => setCreatingTask(false)}
      />
      <AddToTaskDialog
        selectedImages={selectedImages}
        missionGuid={missionGuid}
        open={addingToTask}
        onClose={() => setAddingToTask(false)}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          color: theme.palette.common.white,
        }}
      >
        <Text>
          {selectedImageCount > 1
            ? `${selectedImageCount} images selected.`
            : '1 image selected.'}
        </Text>
        <Button
          display="primary"
          onClick={e => setAnchorEl(e.currentTarget)}
        >
          Actions
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          transformOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <MenuItem
            onClick={() => {
              setAddingTag(true);
              setAnchorEl(null);
            }}
          >
            Add tag
          </MenuItem>

          <MenuItem
            onClick={() => {
              setCreatingTask(true);
              setAnchorEl(null);
            }}
          >
            Create task
          </MenuItem>
          <MenuItem
            onClick={() => {
              setAddingToTask(true);
              setAnchorEl(null);
            }}
          >
            Add to task
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
