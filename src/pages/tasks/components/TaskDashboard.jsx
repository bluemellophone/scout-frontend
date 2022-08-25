import React from 'react';
import { get } from 'lodash-es';

import PreviousIcon from '@material-ui/icons/ChevronLeft';
import NextIcon from '@material-ui/icons/ChevronRight';

import OneImageIcon from '../../../components/icons/OneImageIcon';
import HotdogImagesIcon from '../../../components/icons/HotdogImagesIcon';
import HamburgerImagesIcon from '../../../components/icons/HamburgerImagesIcon';
import BodyHeader from '../../../components/BodyHeader';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import IconButton from '../../../components/IconButton';
import viewModes from '../constants/viewModes';
import TaskActionsMenu from './TaskActionsMenu';

function getImageTagline(selectedAssets, assetCount)
{
  if (selectedAssets.length === 0) return 'No images selected';
  const firstImageNumber = get(selectedAssets, [0, 'index'], NaN) + 1;
  const secondImageNumber =
    get(selectedAssets, [1, 'index'], NaN) + 1;
  if (selectedAssets.length === 1)
    return `Image ${firstImageNumber} of ${assetCount}`;
  return `Images ${firstImageNumber} and ${secondImageNumber} of ${assetCount}`;
}

export default function TaskDashboard({
  taskData,
  taskName,
  createdDate,
  selectedAssets = [],
  setSelectedAssets,
  mode,
  setMode,
}) {
  const taskAssets = taskData?.assets || [];
  const hotdogView =
    selectedAssets.length > 1 && mode === viewModes.hotdog;
  const hamburgerView =
    selectedAssets.length > 1 && mode === viewModes.hamburger;

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
          maxHeight: 'calc(100vh - 12px)',
        }}
      >
        <BodyHeader
          title={taskName}
          showBackButton
          backButtonText="Back to project"
          backButtonHref={`/projects/${taskData?.mission?.guid}`}
          MenuComponent={TaskActionsMenu}
          menuComponentProps={{
            taskGuid: taskData?.guid,
            missionGuid: taskData?.mission?.guid,
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <Button
            style={{ borderRadius: 3 }}
            size="small"
            startIcon={<PreviousIcon />}
          >
            Previous
          </Button>
          <Text>
            {getImageTagline(selectedAssets, taskData?.asset_count)}
          </Text>
          <div>
            <Button
              style={{ borderRadius: 3 }}
              size="small"
              endIcon={<NextIcon />}
            >
              Next
            </Button>
            <IconButton
              size="small"
              active={mode === viewModes.one}
              onClick={() => {
                if (selectedAssets.length === 2)
                  setSelectedAssets([selectedAssets[0]]);
                setMode(viewModes.one);
              }}
            >
              <OneImageIcon />
            </IconButton>
            <IconButton
              size="small"
              active={mode === viewModes.hotdog}
              onClick={() => {
                if (selectedAssets.length === 1) {
                  const nextAssetIndex = selectedAssets[0]?.index + 1;
                  const nextAsset = taskAssets?.[nextAssetIndex];
                  if (nextAsset)
                    setSelectedAssets([...selectedAssets, nextAsset]);
                }
                setMode(viewModes.hotdog);
              }}
            >
              <HotdogImagesIcon />
            </IconButton>
            <IconButton
              size="small"
              active={mode === viewModes.hamburger}
              onClick={() => {
                if (selectedAssets.length === 1) {
                  const nextAssetIndex = selectedAssets[0]?.index + 1;
                  const nextAsset = taskAssets?.[nextAssetIndex];
                  if (nextAsset)
                    setSelectedAssets([...selectedAssets, nextAsset]);
                }
                setMode(viewModes.hamburger);
              }}
            >
              <HamburgerImagesIcon />
            </IconButton>
          </div>
        </div>
        {selectedAssets.length === 0 && (
          <Text style={{ marginTop: 40 }}>No image selected.</Text>
        )}
        {selectedAssets.length === 1 && (
          <img
            alt={selectedAssets[0].filename}
            src={selectedAssets[0].src}
            style={{ width: '100%', marginTop: 12 }}
          />
        )}
        {hotdogView && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 12,
            }}
          >
            <img
              alt={selectedAssets[0].filename}
              src={selectedAssets[0].src}
              style={{ width: '50%' }}
            />
            <img
              alt={selectedAssets[1].filename}
              src={selectedAssets[1].src}
              style={{ width: '50%', marginLeft: 4 }}
            />
          </div>
        )}
        {hamburgerView && (
          <div>
            <img
              alt={selectedAssets[0].filename}
              src={selectedAssets[0].src}
              style={{ width: '100%', marginTop: 12 }}
            />
            <img
              alt={selectedAssets[1].filename}
              src={selectedAssets[1].src}
              style={{ width: '100%', marginTop: 12 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
