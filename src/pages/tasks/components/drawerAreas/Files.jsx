import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PreviousImageIcon from '@material-ui/icons/ChevronLeft';
import NextImageIcon from '@material-ui/icons/ChevronRight';

import Text from '../../../../components/Text';

export default function Files({
  taskData,
  selectedAssets,
  setSelectedAssets,
}) {
  const assets = taskData?.assets || [];

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',
          margin: '20px 0 8px 12px',
        }}
      >
        <Text variant="h6">{`${taskData?.asset_count} images`}</Text>
        <div>
          <IconButton size="small">
            <PreviousImageIcon />
          </IconButton>
          <IconButton size="small">
            <NextImageIcon />
          </IconButton>
        </div>
      </div>
      <Paper
        style={{
          overflow: 'scroll',
        }}
      >
        <List
          component="nav"
          aria-label="tasks in this project"
          style={{ padding: 0 }}
          dense
        >
          {assets.map(asset => {
            const filename = asset?.filename || 'Filename not found';
            const selectedAssetGuids = selectedAssets.map(
              a => a?.guid,
            );
            return (
              <ListItem
                button
                key={asset?.guid}
                aria-controls="select asset"
                aria-label={filename}
                onClick={() => setSelectedAssets([asset])}
                selected={selectedAssetGuids.includes(asset?.guid)}
              >
                <ListItemText primary={filename} />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </div>
  );
}
