import React from 'react';
import { get } from 'lodash-es';

import { useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import ControlPanelIcon from '@material-ui/icons/PermDataSetting';
import BulkImportIcon from '@material-ui/icons/PostAdd';
import LogoutIcon from '@material-ui/icons/ExitToApp';

import ActionsMenuList from '../ActionsMenuList';
import Link from '../Link';
import Text from '../Text';
import defaultProfilePhoto from '../../assets/defaultProfile.jpg';

const actions = [
  {
    id: 'bulk-import',
    href: '/bulk-import',
    messageId: 'BULK_IMPORT',
    icon: BulkImportIcon,
  },
  {
    id: 'settings',
    href: '/settings',
    messageId: 'SETTINGS_AND_PRIVACY',
    icon: SettingsIcon,
  },
  {
    id: 'control-panel',
    href: '/admin',
    adminOrUserManagerOnly: true,
    messageId: 'CONTROL_PANEL',
    icon: ControlPanelIcon,
  },
];

export default function NotificationsPane({
  anchorEl,
  setAnchorEl,
  userData,
}) {
  const theme = useTheme();
  const closePopover = () => setAnchorEl(null);

  const isAdministrator = get(userData, 'is_admin', false);
  const isUserManager = get(userData, 'is_user_manager', false);
  const name = get(userData, 'full_name') || 'Unnamed user';
  const profileSrc = get(userData, ['profile_fileupload', 'src']);

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
        <Link href="/" onClick={closePopover} noUnderline>
          <MenuItem style={{ minHeight: 'auto' }}>
            <Avatar
              style={{ height: 52, width: 52 }}
              src={profileSrc || defaultProfilePhoto}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Text style={{ margin: '0 20px', fontWeight: 'bold' }}>
                {name}
              </Text>
              <Text
                variant="body2"
                style={{ margin: '0 20px' }}
                id="VIEW_PROFILE"
              />
            </div>
          </MenuItem>
        </Link>
        <Divider style={{ margin: '8px 16px' }} />
        {actions.map(action => {
          const elevatedPermissions =
            isAdministrator || isUserManager;
          if (action.adminOrUserManagerOnly && !elevatedPermissions)
            return null;
          return (
            <Link
              key={action.id}
              href={action.href}
              onClick={closePopover}
              noUnderline
            >
              <MenuItem style={{ minHeight: 'auto' }}>
                <div
                  style={{
                    padding: 12,
                    borderRadius: 1000,
                    backgroundColor: theme.palette.grey.A100,
                    color: theme.palette.grey.A400,
                    lineHeight: 0,
                  }}
                >
                  <action.icon />
                </div>
                <Text
                  style={{ margin: '0 8px' }}
                  id={action.messageId}
                />
              </MenuItem>
            </Link>
          );
        })}
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
                  backgroundColor: theme.palette.grey.A100,
                  color: theme.palette.grey.A400,
                  lineHeight: 0,
                }}
              >
                <LogoutIcon />
              </div>
              <Text style={{ margin: '0 8px' }} id="LOG_OUT" />
            </MenuItem>
          </button>
        </form>
      </ActionsMenuList>
    </Popover>
  );
}
