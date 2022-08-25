import React from 'react';
import Text from '../../../../components/Text';
import { formatDate } from '../../../../utils/formatters';

function LineItem({ title, value }) {
  return (
    <Text variant="body2" component="p">
      <b>{`${title}: `}</b>
      <span>{value}</span>
    </Text>
  );
}

export default function Properties({ selectedAsset }) {
  function getProperty(property, format) {
    const value = selectedAsset?.[property];
    if (!value) return 'Unknown';
    return format ? formatDate(value) : value;
  }

  const dimensionsAvailable =
    selectedAsset?.dimensions?.width &&
    selectedAsset?.dimensions?.height;

  const dimensions = dimensionsAvailable
    ? `${selectedAsset?.dimensions?.width} Χ ${
        selectedAsset?.dimensions?.height
      } pixels `
    : 'Unknown';

  return (
    <div style={{ padding: '16px 20px' }}>
      <LineItem
        title="Filename"
        value={getProperty('filename', false)}
      />
      <LineItem
        title="Date added"
        value={getProperty('created', true)}
      />
      <LineItem
        title="Last updated"
        value={getProperty('updated', true)}
      />
      <LineItem title="Dimensions" value={dimensions} />
      <LineItem
        title="Dimensions"
        value={getProperty('size_bytes', false)}
      />
    </div>
  );
}
