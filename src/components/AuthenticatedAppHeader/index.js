import React, { useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';
import HomeIcon from '@material-ui/icons/Home';

import useGetMe from '../../models/users/useGetMe';
import Link from '../Link';
import AppDrawer from '../AppDrawer';
import BannerLogo from '../BannerLogo';
import HeaderButton from './HeaderButton';
import ActionsPane from './ActionsPane';

export default function AppHeader() {
  const theme = useTheme();
  const { data: meData } = useGetMe();

  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = React.useState(false);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = React.useState(
    null,
  );

  const handleClick = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      }}
    >
      {exploreOpen && (
        <ClickAwayListener
          onClickAway={() => {
            setExploreOpen(false);
          }}
        >
          <div />
        </ClickAwayListener>
      )}
      {isSm && (
        <AppDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          handleClick={handleClick}
        />
      )}
      <Toolbar
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        {isSm ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BannerLogo href="/" onClick={handleClick} />
          </div>
        )}

        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link href="/">
            <HeaderButton
              Icon={HomeIcon}
              titleId="HOME"
              style={{ marginLeft: 8 }}
            />
          </Link>
          <Link href="/report">
            <HeaderButton
              Icon={AddIcon}
              titleId="REPORT_A_SIGHTING"
              style={{ marginLeft: 8 }}
            />
          </Link>
          <HeaderButton
            onClick={e => setUserMenuAnchorEl(e.currentTarget)}
            Icon={DropDownIcon}
            titleId="ACTIONS"
          />
          <ActionsPane
            anchorEl={userMenuAnchorEl}
            setAnchorEl={setUserMenuAnchorEl}
            userData={meData}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
