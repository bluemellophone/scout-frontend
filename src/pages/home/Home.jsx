import React, { useState } from 'react';
import { get } from 'lodash-es';

import useGetMe from '../../models/users/useGetMe';
import LoadingScreen from '../../components/LoadingScreen';
import UserProfile from '../../components/UserProfile';
import Button from '../../components/Button';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import ProfileSetup from './ProfileSetup';

export default function Home() {
  const [crash, setCrash] = useState(false);

  const { data, loading } = useGetMe();

  const fullName = get(data, ['full_name']);
  const userId = get(data, 'guid');

  useDocumentTitle('HOME', { refreshKey: fullName });

  if (crash) {
    const b = a.b.c.d.e.f;
  }

  if (loading) return <LoadingScreen />;
  // if (error) handle error
  if (!fullName) return <ProfileSetup userData={data} />;

  return (
    <UserProfile
      someoneElse={false}
      userData={data}
      userId={userId}
      userDataLoading={loading}
      noCollaborate
    >
      <Button onClick={() => setCrash(true)}>Crash!!!!</Button>
    </UserProfile>
  );
}
