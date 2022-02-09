import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';
import ManageUsersIcon from '@material-ui/icons/AccountCircle';
import ProjectSettingsIcon from '@material-ui/icons/Settings';
import LogoutIcon from '@material-ui/icons/ExitToApp';

import Link from '../../../components/Link';
import Text from '../../../components/Text';

export default function TaskActionsMenu({ anchorEl, setAnchorEl }) {
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
      <MenuList style={{ minWidth: 270 }}>
        <Link
          href={`/projects/settings/${'herp'}`}
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
        <Link
          href={`/projects/manage-users/${'herp'}`}
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
              <ManageUsersIcon />
            </div>
            <Text style={{ margin: '0 8px' }}>Manage users</Text>
          </MenuItem>
        </Link>
        <Divider style={{ margin: '8px 16px' }} />
        <form
          action={`${__houston_url__}/logout?next=/`}
          method="POST"
        >
          <button
            type="submit"
            onClick={closePopover}
            style={{
              backgroundColor: 'unset',
              width: '100%',
              border: 'unset',
              padding: 0,
            }}
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
                <LogoutIcon />
              </div>
              <Text style={{ margin: '0 8px' }}>Logout</Text>
            </MenuItem>
          </button>
        </form>
      </MenuList>
    </Popover>
  );
}
