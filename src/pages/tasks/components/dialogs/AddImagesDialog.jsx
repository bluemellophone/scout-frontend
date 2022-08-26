import React, { useState } from 'react';

import useGetMissionAssets from '../../../../models/assets/useGetMissionAssets';
import usePostAssetsToTask from '../../../../models/tasks/usePostAssetsToTask';
import Alert from '../../../../components/Alert';
import ImageDisplay from '../../../../components/ImageDisplay';
import SelectedImageDialog from '../../../../components/SelectedImageDialog';
import StandardDialog from '../../../../components/StandardDialogNew';
import { resultsPerPage } from '../../../../constants/search';

export default function AddImagesDialog({
  open,
  onClose,
  missionGuid,
  taskGuid,
}) {
  const [clickedAssetGuid, setClickedAssetGuid] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [querySelected, setQuerySelected] = useState(false);
  const [searchParams, setSearchParams] = useState({
    limit: resultsPerPage,
    offset: 0,
  });
  const [imageQuery, setImageQuery] = useState({});

  const missionData = {};

  const {
    data,
    isLoading,
    error: getAssetsError,
  } = useGetMissionAssets(missionGuid, imageQuery, searchParams);
  const { searchResults, resultCount } = data;
  const images = searchResults || [];

  const {
    mutate: postAssetsToTask,
    isLoading: postAssetsLoading,
    error: postAssetsError,
  } = usePostAssetsToTask();

  function handleClose() {
    onClose();
  }

  const error = getAssetsError || postAssetsError;

  return (
    <StandardDialog
      fullScreen
      open={open}
      onClose={handleClose}
      onSubmit={async () => {
        const operations = [
          {
            op: 'union',
            path: '/assets',
            value: selectedImages,
          },
        ];
        const result = await postAssetsToTask({
          taskGuid,
          missionGuid,
          operations,
        });
        if (result?.status === 200) handleClose();
      }}
      submitDisabled={isLoading || postAssetsLoading}
      submitButtonLoading={postAssetsLoading}
      submitButtonLabel="Add images"
      title="Add images to task"
    >
      <SelectedImageDialog
        missionAssets={searchResults}
        missionGuid={missionGuid}
        assetGuid={clickedAssetGuid}
        open={Boolean(clickedAssetGuid)}
        onClose={() => setClickedAssetGuid(null)}
      />
      <ImageDisplay
        missionData={missionData}
        images={images}
        loading={isLoading}
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
      {error && (
        <Alert
          style={{ marginBottom: 8, width: '100%' }}
          severity="error"
          title="Error loading images"
        >
          {error}
        </Alert>
      )}
    </StandardDialog>
  );
}
