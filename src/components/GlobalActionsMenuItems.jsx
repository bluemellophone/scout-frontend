import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import ManageUsersIcon from '@material-ui/icons/AccountCircle';
import LogoutIcon from '@material-ui/icons/ExitToApp';

import useGetMe from '../models/users/useGetMe';
import Link from './Link';
import Text from './Text';

export default function GlobalActionsMenuItems({
  closePopover,
  noDivider = false,
}) {
  const { data: userData } = useGetMe();
  const isAdmin = userData?.is_admin;
  const theme = useTheme();
  return (
    <>
      {!noDivider && <div style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '16px 20px 8px 20px' }}>
        <Divider style={{ flexGrow: 1, marginRight: 8 }} />
        <Text variant="h6" style={{ whiteSpace: 'nowrap' }}>System administration</Text>
        <Divider style={{ flexGrow: 1, marginLeft: 8 }} />
      </div>}
      {isAdmin && (
        <Link
          href="/administration"
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
            <Text style={{ margin: '0 8px' }}>User administration</Text>
          </MenuItem>
        </Link>
      )}
      <Link href="/settings" onClick={closePopover} noUnderline>
        <MenuItem style={{ minHeight: 'auto' }}>
          <div
            style={{
              padding: 12,
              borderRadius: 1000,
              color: theme.palette.grey['600'],
              lineHeight: 0,
            }}
          >
            <SettingsIcon />
          </div>
          <Text style={{ margin: '0 8px' }}>Profile settings</Text>
        </MenuItem>
      </Link>
      <form action={`${__houston_url__}/logout?next=/`} method="POST">
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
    </>
  );
}
