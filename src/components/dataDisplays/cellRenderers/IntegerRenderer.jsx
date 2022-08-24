import React from 'react';
import { isNaN, round } from 'lodash-es';

import Text from '../../Text';

export default function IntegerRenderer({ value, fallback = '-' }) {
  const roundedNumber = round(value);
  const displayNumber = isNaN(roundedNumber)
    ? fallback
    : roundedNumber;
  return <Text variant="body2">{displayNumber}</Text>;
}
