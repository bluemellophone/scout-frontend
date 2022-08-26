import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CollapseIcon from '@material-ui/icons/ChevronLeft';

import WildMeLogo from '../../../assets/wild-me-gradient-logo.png';
import Button from '../../../components/ButtonNew';
import Text from '../../../components/Text';
import DrawerAccordion from './DrawerAccordion';
import AddImagesDialog from './dialogs/AddImagesDialog';

export default function TaskDrawer({
  taskData,
  taskAssets,
  mode,
  selectedAssets,
  setSelectedAssets,
}) {
  const [addImagesDialogOpen, setAddImagesDialogOpen] = useState(
    false,
  );
  const [minimized, setMinimized] = useState(false);

  const minimizedStyles = {
    opacity: minimized ? 0 : 1,
    pointerEvents: minimized ? 'none' : undefined,
  };

  const noImages = taskData?.assets?.length === 0;
  const hasEditPermissions = true;

  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open
      style={{
        width: minimized ? 88 : 361,
        cursor: minimized ? 'pointer' : undefined,
      }}
      PaperProps={{
        style: {
          width: minimized ? 88 : 361,
          display: 'flex',
          height: '100vh',
        },
      }}
      onClick={() => {
        if (minimized) setMinimized(false);
      }}
    >
      <AddImagesDialog
        open={addImagesDialogOpen}
        onClose={() => setAddImagesDialogOpen(false)}
        missionGuid={taskData?.mission?.guid}
        taskGuid={taskData?.guid}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <img
            src={WildMeLogo}
            style={{ width: 48, marginRight: 12 }}
            alt="Wild Me logo"
          />
          <Text
            variant="h5"
            style={{
              whiteSpace: 'nowrap',
              fontSize: 26,
              ...minimizedStyles,
            }}
          >
            Wild Me Scout
          </Text>
        </div>
        <IconButton
          style={minimizedStyles}
          onClick={() => setMinimized(true)}
        >
          <CollapseIcon />
        </IconButton>
      </div>
      <Divider style={minimizedStyles} />

      {noImages ? (
        <div
          style={{ ...minimizedStyles, margin: '20px 20px 0 20px ' }}
        >
          <Text style={{ marginBottom: 12 }}>
            {hasEditPermissions
              ? 'This task has no images. Get started by adding some images!'
              : 'This task has no images.'}
          </Text>
          {hasEditPermissions && (
            <Button
              display="primary"
              icon="add"
              onClick={() => setAddImagesDialogOpen(true)}
            >
              Add images
            </Button>
          )}
        </div>
      ) : (
        <div
          style={{ ...minimizedStyles, flexGrow: 1, minHeight: 0 }}
        >
          <DrawerAccordion
            taskData={taskData}
            taskAssets={taskAssets}
            mode={mode}
            selectedAssets={selectedAssets}
            setSelectedAssets={setSelectedAssets}
          />
        </div>
      )}
    </Drawer>
  );
}
