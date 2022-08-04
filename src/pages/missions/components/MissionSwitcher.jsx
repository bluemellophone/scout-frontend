import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Paper from '@material-ui/core/Paper';

import { formatDate } from '../../../utils/formatters';
import useGetMyMissions from '../../../models/users/useGetMyMissions';
import Link from '../../../components/Link';
import ListTitle from './ListTitle';

const currrentProjectButtonId = 'current-project-button';

const componentWidth = 320;

export default function MissionSwitcher({ missionData }) {
  const { data: myMissions } = useGetMyMissions();
  const missionsForDisplay = myMissions.map(m => ({
    ...m,
    subtitle: `Created on ${formatDate(m?.created, true)}`,
  }));
  const currentMission = missionsForDisplay.find(
    m => m?.guid === missionData?.guid,
  );

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListTitle
        title="Current project"
        buttonText="New project"
        href="/projects/new"
      />
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
            aria-label={currentMission?.title}
            aria-expanded={anchorEl ? 'true' : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              primary={currentMission?.title}
              secondary={currentMission?.subtitle}
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
