import React, { useState } from 'react';
import { get } from 'lodash-es';

import BodyHeader from '../../../components/BodyHeader';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import SelectedImageDialog from './SelectedImageDialog';
import AddImagesDialog from './AddImagesDialog';
import MissionActionsMenu from './MissionActionsMenu';
import ImageTable from './table/ImageTable';

export default function MissionDashboard({
  missionData,
  projectName,
  createdDate,
}) {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const images = get(missionData, 'assets', []);
  const noImages = images.length === 0;

  return (
    <div style={{ margin: '20px 16px 40px 16px', width: '100%' }}>
      <BodyHeader
        title={projectName}
        subtitle={`Created on ${createdDate}`}
        MenuComponent={MissionActionsMenu}
      />
      {noImages && (
        <div style={{ marginTop: 40 }}>
          <Text style={{ marginBottom: 12 }}>
            Your project has no images. Get started by adding some
            images!
          </Text>
          <Button
            display="primary"
            onClick={() => setAddDialogOpen(true)}
          >
            Add images
          </Button>
        </div>
      )}
      {!noImages && (
        <ImageTable
          data={images}
          onClickImage={asset => setSelectedAsset(asset)}
        />
      )}
      <AddImagesDialog
        missionGuid={missionData?.guid}
        open={addDialogOpen}
        onClose={() => setAddDialogOpen(false)}
      />
      <SelectedImageDialog
        asset={selectedAsset}
        open={Boolean(selectedAsset)}
        onClose={() => setSelectedAsset(null)}
      />
    </div>
  );
}