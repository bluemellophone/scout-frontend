import React, { useState, useMemo } from 'react';

import { formatDate } from '../utils/formatters';
import StandardDialog from './StandardDialogNew';
import Text from './Text';
import Keywords from './Keywords';
import Button from './ButtonNew';
import AddTagWidget from './AddTagWidget';

export default function SelectedImageDialog({
  open,
  onClose,
  missionGuid,
  missionAssets = [],
  assetGuid,
}) {
  const [addingTag, setAddingTag] = useState(false);

  const asset = useMemo(
    () => missionAssets.find(a => a?.guid === assetGuid),
    [assetGuid, missionAssets],
  );

  function onCloseDialog() {
    setAddingTag(false);
    onClose();
  }

  return (
    <StandardDialog
      fullScreen
      open={open}
      onClose={onCloseDialog}
      title="Selected image"
      renderDialogActions={false}
    >
      <img
        src={asset?.src}
        alt={asset?.filename}
        style={{ width: '100%' }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 80,
        }}
      >
        <Keywords asset={asset} missionGuid={missionGuid} deletable>
          {addingTag ? (
            <AddTagWidget missionGuid={missionGuid} asset={asset} />
          ) : (
            <Button
              display="tag"
              icon="add"
              onClick={() => setAddingTag(true)}
            >
              Add tag
            </Button>
          )}
        </Keywords>
        <div>
          <Text variant="body2">{`Filename: ${
            asset?.filename
          }`}</Text>
          <Text variant="body2">{`Date added: ${formatDate(
            asset?.created,
          )}`}</Text>
          <Text variant="body2">{`Last updated: ${formatDate(
            asset?.updated,
          )}`}</Text>
          <Text variant="body2">{`Dimensions: ${
            asset?.dimensions?.width
          } Χ ${asset?.dimensions?.height} pixels `}</Text>
          <Text variant="body2">{`Size on disk: ${
            asset?.size_bytes
          } bytes`}</Text>
        </div>
      </div>
    </StandardDialog>
  );
}
