import React, { useState } from 'react';

import useGetMissionAssets from '../../../models/assets/useGetMissionAssets';
import BodyHeader from '../../../components/BodyHeader';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import SelectedImageDialog from './SelectedImageDialog';
import AddImagesDialog from './AddImagesDialog';
import MissionActionsMenu from './MissionActionsMenu';
import BatchUpdateFooter from './BatchUpdateFooter';
import ImageTable from './table/ImageTable';

export default function MissionDashboard({
  missionData,
  projectName,
  createdDate,
}) {
  const id = missionData?.guid;
  const {
    data: missionAssets,
    isLoading: assetsLoading,
  } = useGetMissionAssets(id);
  const images = missionAssets || [];

  const [clickedImage, setClickedImage] = useState(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const noImages = images.length === 0;
  const footerOpen = selectedImages.length > 0;

  const onAddImages = () => setAddDialogOpen(true);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'scroll',
      }}
    >
      <div
        style={{
          padding: '20px 16px 40px 16px',
          overflow: 'scroll',
          maxHeight: footerOpen
            ? 'calc(100vh - 84px)'
            : 'calc(100vh - 12px)',
        }}
      >
        <BodyHeader
          title={projectName}
          subtitle={`Created on ${createdDate}`}
          MenuComponent={MissionActionsMenu}
          menuComponentProps={{
            onAddImages,
          }}
        />
        {noImages && (
          <div style={{ marginTop: 40 }}>
            <Text style={{ marginBottom: 12 }}>
              Your project has no images. Get started by adding some
              images!
            </Text>
            <Button display="primary" onClick={onAddImages}>
              Add images
            </Button>
          </div>
        )}
        {!noImages && (
          <ImageTable
            data={images}
            loading={assetsLoading}
            onClickImage={asset => setClickedImage(asset)}
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
          />
        )}
        <AddImagesDialog
          missionGuid={missionData?.guid}
          open={addDialogOpen}
          onClose={() => setAddDialogOpen(false)}
        />
        <SelectedImageDialog
          asset={clickedImage}
          open={Boolean(clickedImage)}
          onClose={() => setClickedImage(null)}
        />
      </div>
      <BatchUpdateFooter
        missionGuid={id}
        open={footerOpen}
        selectedImages={selectedImages}
      />
    </div>
  );
}
