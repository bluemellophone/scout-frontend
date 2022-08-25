import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

import viewModes from '../../constants/viewModes';

export default function Files({
  taskAssets = [],
  mode,
  selectedAssets,
  setSelectedAssets,
})
{
  return (
    <div style={{ width: '100%' }}>
      <Paper
        style={{
          overflow: 'scroll',
          maxHeight: 420,
        }}
      >
        <List
          component="nav"
          aria-label="tasks in this project"
          style={{ padding: 0 }}
          dense
        >
          {taskAssets.map(asset =>
          {
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
                onClick={() =>
                {
                  if (mode === viewModes.one)
                  {
                    setSelectedAssets([asset]);
                  } else
                  {
                    const secondAsset =
                      taskAssets?.[asset?.index + 1];
                    if (secondAsset)
                    {
                      setSelectedAssets([asset, secondAsset]);
                    } else
                    {
                      setSelectedAssets([asset]);
                    }
                  }
                }}
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
