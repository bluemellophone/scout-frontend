import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import AddImagesIcon from '@material-ui/icons/AddAPhoto';
import ProjectSettingsIcon from '@material-ui/icons/Build';

import Link from '../../../components/Link';
import Text from '../../../components/Text';
import ActionsMenuList from '../../../components/ActionsMenuList';
import GlobalActionsMenuItems from '../../../components/GlobalActionsMenuItems';

export default function MissionActionsMenu({
  anchorEl,
  setAnchorEl,
  onAddImages,
  missionGuid,
}) {
  const theme = useTheme();
  const closePopover = () => setAnchorEl(null);

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
      <ActionsMenuList>
        <MenuItem onClick={onAddImages} style={{ minHeight: 'auto' }}>
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
          href={`/projects/settings/${missionGuid}`}
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
            <Text style={{ margin: '0 8px' }}>Project settings</Text>
          </MenuItem>
        </Link>
        <GlobalActionsMenuItems closePopover={closePopover} />
      </ActionsMenuList>
    </Popover>
  );
}
