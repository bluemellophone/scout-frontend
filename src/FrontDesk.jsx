import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTheme } from '@material-ui/core/styles';

import UnauthenticatedSwitch from './UnauthenticatedSwitch';
import AuthenticatedSwitch from './AuthenticatedSwitch';
import SadScreen from './components/SadScreen';
import useGetMe from './models/users/useGetMe';
import useGetAdminUserInitialized from './models/users/useGetAdminUserInitialized';
import CreateAdminUser from './pages/administration/CreateAdminUser';

export default function FrontDesk() {
  const theme = useTheme();

  const {
    data: initializedData,
    loading: initializedLoading,
    error: initializedError,
  } = useGetAdminUserInitialized();
  const { loading: meDataLoading, error: meDataError } = useGetMe();

  const loading = initializedLoading || meDataLoading;
  if (loading) {
    return (
      <Backdrop style={{ color: theme.palette.common.white }} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (!initializedData?.initialized) return <CreateAdminUser />;
  if (initializedError) return <SadScreen variant="serverUnavailable" />;
  if (meDataError) return <UnauthenticatedSwitch />;

  return <AuthenticatedSwitch />;
}
