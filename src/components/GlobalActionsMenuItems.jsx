import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import ManageUsersIcon from '@material-ui/icons/AccountCircle';
import LogoutIcon from '@material-ui/icons/ExitToApp';

import Link from './Link';
import Text from './Text';

export default function GlobalActionsMenuItems({ closePopover }) {
  const theme = useTheme();
  return (
    <>
      <Divider style={{ margin: '8px 16px' }} />
      <Link href="/administration" onClick={closePopover} noUnderline>
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
          <Text style={{ margin: '0 8px' }}>Administration</Text>
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
