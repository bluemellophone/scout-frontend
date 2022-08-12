import React, { useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import ProjectSettingsIcon from '@material-ui/icons/Build';
import AddImagesIcon from '@material-ui/icons/AddAPhoto';

import Link from '../../../components/Link';
import Text from '../../../components/Text';
import ActionsMenuList from '../../../components/ActionsMenuList';
import GlobalActionsMenuItems from '../../../components/GlobalActionsMenuItems';
import AddImagesDialog from './dialogs/AddImagesDialog';

export default function TaskActionsMenu({
  anchorEl,
  setAnchorEl,
  taskGuid,
  missionGuid,
}) {
  const theme = useTheme();
  const closePopover = () => setAnchorEl(null);

  const [addImagesDialogOpen, setAddImagesDialogOpen] = useState(
    false,
  );

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      PaperProps={{ style: { marginTop: -8 } }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorEl={anchorEl}
      onClose={closePopover}
    >
      <AddImagesDialog
        open={addImagesDialogOpen}
        onClose={() => setAddImagesDialogOpen(false)}
        missionGuid={missionGuid}
        taskGuid={taskGuid}
      />
      <ActionsMenuList>
        <MenuItem
          style={{ minHeight: 'auto' }}
          onClick={() => {
            setAddImagesDialogOpen(true);
          }}
        >
          <div
            style={{
              padding: 12,
              borderRadius: 1000,
              color: theme.palette.grey['600'],
              lineHeight: 0,
            }}
          >
            <AddImagesIcon />
          </div>
          <Text style={{ margin: '0 8px' }}>Add images</Text>
        </MenuItem>
        <Link
          href={`/tasks/settings/${taskGuid}`}
          onClick={closePopover}
          noUnderline
        >
          <MenuItem style={{ minHeight: 'auto' }}>
            <div
              style={{
                padding: 12,
                borderRadius: 1000,
                color: theme.palette.grey['600'],
                lineHeight: 0,
              }}
            >
              <ProjectSettingsIcon />
            </div>
            <Text style={{ margin: '0 8px' }}>Task settings</Text>
          </MenuItem>
        </Link>
        <GlobalActionsMenuItems closePopover={closePopover} />
      </ActionsMenuList>
    </Popover>
  );
}
