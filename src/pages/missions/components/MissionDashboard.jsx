import React, { useState } from 'react';

import Button from '../../../components/Button';
import AddImagesDialog from './AddImagesDialog';

export default function MissionDashboard({
  missionData,
  projectName,
}) {
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const noImages = true;

  console.log(missionData);

  return (
    <div>
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
