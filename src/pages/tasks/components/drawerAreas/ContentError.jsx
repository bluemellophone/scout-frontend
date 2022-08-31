import React from 'react';
import CustomAlert from '../../../../components/Alert';

export default function ContentError({ contentLabel = 'Data' }) {
  return (
    <CustomAlert
      severity="error"
      style={{ width: '100%', margin: '16px 12px 0' }}
    >
      {`${contentLabel} could not be loaded.`}
    </CustomAlert>
  );
}
