import React, { useState } from 'react';

import useGetMissionAssets from '../../../models/assets/useGetMissionAssets';
import BodyHeader from '../../../components/BodyHeader';
import Text from '../../../components/Text';
import Button from '../../../components/ButtonNew';
import SelectedImageDialog from '../../../components/SelectedImageDialog';
import ImageDisplay from '../../../components/ImageDisplay';
import AddImagesDialog from './AddImagesDialog';
import MissionActionsMenu from './MissionActionsMenu';
import BatchUpdateFooter from './BatchUpdateFooter';
import { resultsPerPage } from '../../../constants/search';

export default function MissionDashboard({
  missionData,
  projectName,
  createdDate,
}) {
  const [clickedAssetGuid, setClickedAssetGuid] = useState(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [querySelected, setQuerySelected] = useState(false);
  const [searchParams, setSearchParams] = useState({
    limit: resultsPerPage,
    offset: 0,
  });
  const [imageQuery, setImageQuery] = useState({});

  const { data, isLoading: assetsLoading } = useGetMissionAssets(
    missionData?.guid,
    imageQuery,
    searchParams,
  );
  const { searchResults, resultCount } = data;
  const images = searchResults || [];

  const noImages = missionData?.asset_count === 0;
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
            missionGuid: missionData?.guid,
          }}
        />
        {noImages ? (
          <div style={{ marginTop: 40 }}>
            <Text style={{ marginBottom: 12 }}>
              Your project has no images. Get started by adding some
              images!
            </Text>
            <Button
              display="primary"
              icon="add"
              onClick={onAddImages}
            >
              Add images
            </Button>
          </div>
        ) : (
          <div style={{ marginTop: 24 }}>
            <ImageDisplay
              missionData={missionData}
              images={images}
              loading={assetsLoading}
              onClickImage={asset => setClickedAssetGuid(asset?.guid)}
              resultCount={resultCount}
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
              imageQuery={imageQuery}
              setImageQuery={setImageQuery}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              querySelected={querySelected}
              setQuerySelected={setQuerySelected}
            />
          </div>
        )}
        <AddImagesDialog
          missionGuid={missionData?.guid}
          open={addDialogOpen}
          onClose={() => setAddDialogOpen(false)}
        />
        <SelectedImageDialog
          missionAssets={searchResults}
          missionGuid={missionData?.guid}
          assetGuid={clickedAssetGuid}
          open={Boolean(clickedAssetGuid)}
          onClose={() => setClickedAssetGuid(null)}
        />
      </div>
      <BatchUpdateFooter
        resultCount={resultCount}
        missionData={missionData}
        open={footerOpen}
        allImages={images}
        selectedImages={selectedImages}
        imageQuery={querySelected ? imageQuery : null}
      />
    </div>
  );
}
