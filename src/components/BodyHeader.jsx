import React, { useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';

import Text from './Text';

export default function BodyHeader({
  title,
  subtitle,
  MenuComponent,
}) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        maxWidth: 900,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Text variant="h3">{title}</Text>
        {subtitle && <Text variant="subtitle1">{subtitle}</Text>}
      </div>
      <Tooltip title="More actions">
        <IconButton
          style={{
            marginTop: 8,
            border: `1px solid ${theme.palette.grey.A100}`,
          }}
          onClick={e => setAnchorEl(e.currentTarget)}
        >
          <DropDownIcon />
        </IconButton>
      </Tooltip>
      <MenuComponent anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </div>
  );
}
