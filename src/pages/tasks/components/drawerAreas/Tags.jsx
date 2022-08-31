import React from 'react';
import { get } from 'lodash-es';

import AddTagWidget from '../../../../components/AddTagWidget';
import Keywords from '../../../../components/Keywords';
import Text from '../../../../components/Text';
import ContentError from './ContentError';

export default function Tags({ selectedAssetQuery, taskData }) {
  const {
    data,
    isLoading,
    error,
    dataUpdatedAt,
  } = selectedAssetQuery;
  const missionGuid = taskData?.mission?.guid;

  if (error) return <ContentError contentLabel="Tag information" />;

  const tags = get(data, 'tags', []);

  return (
    <div style={{ padding: '16px 20px' }}>
      {tags.length === 0 ? (
        <Text>This image has no tags.</Text>
      ) : (
        <Keywords
          loading={isLoading}
          asset={data}
          deletable
          missionGuid={missionGuid}
        />
      )}
      <AddTagWidget
        asset={data}
        missionGuid={missionGuid}
        assetUpdatedTime={dataUpdatedAt}
        textFieldWidth={168}
        style={{ marginTop: 12 }}
      />
    </div>
  );
}
