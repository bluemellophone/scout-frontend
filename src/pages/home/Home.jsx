import React from 'react';
import { get } from 'lodash-es';

import useGetMe from '../../models/users/useGetMe';
import useGetMyMissions from '../../models/users/useGetMyMissions';
import LoadingScreen from '../../components/LoadingScreen';
import CreateMission from '../missions/CreateMission';
import Mission from '../missions/Mission';
import ProfileSetup from './ProfileSetup';
import AnnotatorDashboard from './AnnotatorDashboard';

export default function Home() {
  const { data, loading } = useGetMe();
  const { data: myMissions } = useGetMyMissions();
  const atLeastOneMission = myMissions.length > 0;

  const isBasicUser = !data?.is_admin && !data?.is_data_manager;

  const fullName = get(data, ['full_name']);

  if (loading) return <LoadingScreen />;
  // if (error) handle error
  if (!fullName) return <ProfileSetup userData={data} />;
  if (isBasicUser) return <AnnotatorDashboard userData={data} />;
  if (!atLeastOneMission) return <CreateMission />;

  return <Mission id={get(myMissions, ['0', 'guid'])} />;
}
