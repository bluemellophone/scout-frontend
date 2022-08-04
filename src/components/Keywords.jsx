import React from 'react';
import { get } from 'lodash-es';

import { useTheme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Cancel';

import CustomAlert from './Alert';
import useDeleteKeyword from '../models/keywords/useDeleteKeyword';
import { getKeywordColor } from '../utils/colorUtils';

export default function Keywords({
  asset,
  missionGuid,
  deletable = false,
  style,
  children,
  ...rest
}) {
  const theme = useTheme();
  const keywords = get(asset, 'tags', []);

  const {
    mutate: deleteKeyword,
    error: deleteError,
    clearError: clearDeleteError,
  } = useDeleteKeyword();

  async function onDelete(keywordId) {
    const successful = await deleteKeyword({
      missionGuid,
      assetGuid: asset?.guid,
      keywordGuid: keywordId,
    });
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
