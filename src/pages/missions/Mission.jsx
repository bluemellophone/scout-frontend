import React from 'react';
import { useParams } from 'react-router-dom';

import { formatDate } from '../../utils/formatters';
import useGetMission from '../../models/missions/useGetMission';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import MissionDrawer from './components/MissionDrawer';
import MissionDashboard from './components/MissionDashboard';

export default function Mission({ id: idFromProps }) {
  const { id: idFromUrl } = useParams();
  const id = idFromProps || idFromUrl;

  const { data, isLoading } = useGetMission(id);

  const projectName = data?.title || 'Untitled project';
  const createdDate = formatDate(data?.created, true);

  const displayProjectName = isLoading
    ? 'Loading project..'
    : projectName;
  useDocumentTitle(displayProjectName);

  return (
    <div style={{ display: 'flex' }}>
      <MissionDrawer
        missionData={data}
        projectName={projectName}
        createdDate={createdDate}
      />
      <MissionDashboard
        missionData={data}
        projectName={projectName}
        createdDate={createdDate}
      />
    </div>
  );
}
