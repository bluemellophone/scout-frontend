import React from 'react';

import BodyHeader from '../../../components/BodyHeader';
import Text from '../../../components/Text';
import TaskActionsMenu from './TaskActionsMenu';

export default function TaskDashboard({
  taskData,
  taskName,
  createdDate,
  selectedAsset,
}) {
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
          subtitle={`Created on ${createdDate}`}
          showBackButton
          backButtonText="Back to project"
          backButtonHref={`/projects/${taskData?.mission?.guid}`}
          MenuComponent={TaskActionsMenu}
          menuComponentProps={{
            taskGuid: taskData?.guid,
            missionGuid: taskData?.mission?.guid,
          }}
        />
        {selectedAsset ? (
          <img
            alt={selectedAsset?.filename}
            src={selectedAsset?.src}
            style={{ width: '100%', marginTop: 12 }}
          />
        ) : (
          <Text style={{ marginTop: 40 }}>No image selected.</Text>
        )}
      </div>
    </div>
  );
}
