import React, { useState } from 'react';
import { get } from 'lodash-es';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Paper from '@material-ui/core/Paper';

import useGetMe from '../../../models/users/useGetMe';
import Link from '../../../components/Link';
import Text from '../../../components/Text';

const currrentProjectButtonId = 'current-project-button';

const componentWidth = 280;

export default function MissionDrawer({ missionData }) {
  const { data: meData, loading } = useGetMe();
  const missions = get(meData, 'assigned_missions', []);
  const missionsForDisplay = missions.map(m => ({
    ...m,
    subtitle: 'Created on January 24th, 2022',
  }));
  const currentMission = missionsForDisplay[0]; // switch this to missionData once it includes creation date

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Text variant="caption" style={{ margin: '20px 0 0 12px' }}>
        Current project
      </Text>
      <Paper style={{ marginBottom: 20 }}>
        <List
          component="nav"
          aria-label="current project"
          style={{ padding: 0, width: componentWidth }}
        >
          <ListItem
            button
            id={currrentProjectButtonId}
            aria-haspopup="listbox"
            aria-controls="current project"
            aria-label={currentMission.title}
            aria-expanded={anchorEl ? 'true' : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              primary={missionData?.title}
              secondary="Created on January 24"
            />
          </ListItem>
        </List>
      </Paper>

      <Menu
        id="current-project-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': currrentProjectButtonId,
          role: 'listbox',
        }}
      >
        {missionsForDisplay.map(m => (
          <MenuItem key={m?.guid}>
            <Link
              to={`/projects/${m.guid}`}
              noUnderline
              style={{ width: componentWidth }}
            >
              {m.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
