import React from 'react';
import { useParams } from 'react-router-dom';

import useGetMission from '../../models/missions/useGetMission';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import MissionDrawer from './components/MissionDrawer';

export default function Mission({ id: idFromProps }) {
  const { id: idFromUrl } = useParams();
  const id = idFromProps || idFromUrl;

  const { data, isLoading } = useGetMission(id);

  const projectName = data?.title || 'Untitled project';
  const displayProjectName = isLoading
    ? 'Loading project..'
    : projectName;
  useDocumentTitle(displayProjectName);

  return (
    <div>
      <MissionDrawer missionData={data} projectName={projectName} />
      <div>Center panel</div>
      <div>Right panel</div>
    </div>
  );
}
