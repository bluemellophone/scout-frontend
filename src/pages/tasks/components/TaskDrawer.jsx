import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CollapseIcon from '@material-ui/icons/ChevronLeft';

import WildMeLogo from '../../../assets/wild-me-gradient-logo.png';
import Text from '../../../components/Text';

export default function TaskDrawer({
  taskData,
  taskName,
  createdDate,
}) {
  const [minimized, setMinimized] = useState(false);

  const minimizedStyles = {
    opacity: minimized ? 0 : 1,
    pointerEvents: minimized ? 'none' : undefined,
  };

  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open
      style={{
        width: minimized ? 88 : 361,
        cursor: minimized ? 'pointer' : undefined,
      }}
      PaperProps={{
        style: { padding: 20, width: minimized ? 88 : 361 },
      }}
      onClick={() => {
        if (minimized) setMinimized(false);
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <img
            src={WildMeLogo}
            style={{ width: 48, marginRight: 12 }}
            alt="Wild Me logo"
          />
          <Text
            variant="h5"
            style={{
              whiteSpace: 'nowrap',
              fontSize: 26,
              ...minimizedStyles,
            }}
          >
            Wild Me Scout
          </Text>
        </div>
        <IconButton
          style={minimizedStyles}
          onClick={() => setMinimized(true)}
        >
          <CollapseIcon />
        </IconButton>
      </div>
      <Divider style={minimizedStyles} />

      <div style={minimizedStyles}>Heyaaa</div>
    </Drawer>
  );
}
