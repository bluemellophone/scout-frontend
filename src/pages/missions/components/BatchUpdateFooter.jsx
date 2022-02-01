import React, { useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '../../../components/Button';
import Text from '../../../components/Text';
import BulkAddTagDialog from './BulkAddTagDialog';

export default function BatchUpdateFooter({ open, selectedImages }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(false);
  const [addingTag, setAddingTag] = useState(false);
  const selectedImageCount = selectedImages.length;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        width: 'inherit',
        background: theme.palette.common.black,
        transform: open ? 'translate(0, 0)' : 'translate(0, 80px)',
        transition: '0.15s ease-in-out 0s',
      }}
    >
      <BulkAddTagDialog
        selectedImages={selectedImages}
        open={addingTag}
        onClose={() => setAddingTag(false)}
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
          <MenuItem>Create task</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
