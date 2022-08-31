import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

import Text from '../../../../components/Text';
import { formatDate } from '../../../../utils/formatters';
import ContentError from './ContentError';

function LineItem({ title, value, loading }) {
  if (loading) return <Skeleton />;
  return (
    <div>
      <Text
        variant="subtitle2"
        style={{ fontWeight: 'bold', margin: '8px 0 2px 0' }}
      >
        {title}
      </Text>
      {loading ? <Skeleton /> : <Text variant="body2">{value}</Text>}
    </div>
  );
}

export default function Properties({ selectedAssetQuery }) {
  const { data, isLoading, error } = selectedAssetQuery;

  function getProperty(property, format) {
    const value = data?.[property];
    if (!value) return 'Unknown';
    return format ? formatDate(value) : value;
  }

  const dimensionsAvailable =
    data?.dimensions?.width && data?.dimensions?.height;

  const dimensions = dimensionsAvailable
    ? `${data?.dimensions?.width} Χ ${
        data?.dimensions?.height
      } pixels `
    : 'Unknown';

  if (error) return <ContentError contentLabel="Image properties" />;

  return (
    <div style={{ padding: '16px 20px' }}>
      <LineItem
        title="Filename"
        value={getProperty('filename', false)}
        loading={isLoading}
      />
      <LineItem
        title="Date added"
        value={getProperty('created', true)}
        loading={isLoading}
      />
      <LineItem
        title="Last updated"
        value={getProperty('updated', true)}
        loading={isLoading}
      />
      <LineItem
        title="Dimensions"
        value={dimensions}
        loading={isLoading}
      />
    </div>
  );
}
