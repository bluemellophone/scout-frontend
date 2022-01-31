import React, { useState } from 'react';

import BodyHeader from '../../../components/BodyHeader';
import Button from '../../../components/Button';
import AddImagesDialog from './AddImagesDialog';
import MissionActionsMenu from './MissionActionsMenu';

export default function MissionDashboard({
  missionData,
  projectName,
  createdDate,
}) {
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const noImages = true;

  console.log(missionData);

  return (
    <div style={{ margin: '20px 16px 40px 16px', width: '100%' }}>
      <BodyHeader
        title={projectName}
        subtitle={`Created on ${createdDate}`}
        MenuComponent={MissionActionsMenu}
      />
      {noImages && (
        <Button onClick={() => setAddDialogOpen(true)}>
          Add images
        </Button>
      )}
      <AddImagesDialog
        missionGuid={missionData?.guid}
        open={addDialogOpen}
        onClose={() => setAddDialogOpen(false)}
      />
    </div>
  );
}
