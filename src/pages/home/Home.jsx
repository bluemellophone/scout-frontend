import React from 'react';
import { get } from 'lodash-es';

import useGetMe from '../../models/users/useGetMe';
import LoadingScreen from '../../components/LoadingScreen';
import CreateMission from '../missions/CreateMission';
import Mission from '../missions/Mission';
import ProfileSetup from './ProfileSetup';

export default function Home() {
  const { data, loading } = useGetMe();
  const atLeastOneMission =
    get(data, 'owned_missions', []).length > 0;

  const fullName = get(data, ['full_name']);

  if (loading) return <LoadingScreen />;
  // if (error) handle error
  if (!fullName) return <ProfileSetup userData={data} />;
  if (!atLeastOneMission) return <CreateMission />;

  return <Mission id={get(data, ['owned_missions', '0', 'guid'])} />;
}
