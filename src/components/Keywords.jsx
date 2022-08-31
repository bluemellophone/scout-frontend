import React, { useState } from 'react';
import { get } from 'lodash-es';

import { useTheme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Cancel';
import Skeleton from '@material-ui/lab/Skeleton';

import CustomAlert from './Alert';
import EphemeralFeedback from './EphemeralFeedback';
import useDeleteKeyword from '../models/keywords/useDeleteKeyword';
import { getKeywordColor } from '../utils/colorUtils';

export default function Keywords({
  asset,
  missionGuid,
  loading = false,
  deletable = false,
  style,
  children,
  ...rest
}) {
  const theme = useTheme();
  const [deleteSuccessOpen, setDeleteSuccessOpen] = useState(false);
  const keywords = get(asset, 'tags', []);

  const {
    mutate: deleteKeyword,
    error: deleteError,
    clearError: clearDeleteError,
  } = useDeleteKeyword();

  async function onDelete(keywordGuid) {
    const result = await deleteKeyword({
      missionGuid,
      assetGuid: asset?.guid,
      keywordGuid,
    });
    if (result?.status === 200) setDeleteSuccessOpen(true);
  }

  return (
    <div>
      {deleteError && (
        <CustomAlert
          style={{ marginTop: 16, marginBottom: 8 }}
          severity="error"
          onClose={clearDeleteError}
          titleId="SERVER_ERROR"
          description={deleteError}
        />
      )}
      <EphemeralFeedback
        open={deleteSuccessOpen}
        setOpen={setDeleteSuccessOpen}
        message="Tag removed successfully."
      />
      <div
        style={{
          marginTop: 4,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          ...style,
        }}
        {...rest}
      >
        {loading &&
          [1, 2, 3].map(i => (
            <Skeleton
              key={i}
              variant="rect"
              height={32}
              width={80}
              style={{
                borderRadius: 16,
                marginTop: 4,
                marginRight: 4,
              }}
            />
          ))}
        {keywords.map(keyword => (
          <Chip
            key={keyword.value}
            style={{
              marginTop: 4,
              marginRight: 4,
              color: theme.palette.common.white,
              backgroundColor: getKeywordColor(keyword?.guid),
            }}
            label={keyword.value}
            deleteIcon={
              <DeleteIcon
                style={{ fill: theme.palette.common.white }}
              />
            }
            onDelete={
              deletable ? () => onDelete(keyword.guid) : undefined
            }
          />
        ))}
        {children}
      </div>
    </div>
  );
}
