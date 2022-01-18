import { useState } from 'react';
import axios from 'axios';
import { get } from 'lodash-es';
import { useQuery } from 'react-query';
import queryKeys from '../../constants/queryKeys';

export default function useGetAdminUserInitialized() {
  const [errorMessage, setErrorMessage] = useState(null);
  const result = useQuery(
    queryKeys.assetGroupSightings,
    async () =>
      axios.request({
        url: `${__houston_url__}/api/v1/users/admin_user_initialized`,
        method: 'get',
      }),
    {
      staleTime: Infinity,
      refetchOnMount: false,
      onError: error => {
        console.log('Error determining admin user initialization');
        console.log(error);
        setErrorMessage(error.toJSON().message);
      },
    },
  );

  return {
    data: get(result, ['data', 'data']),
    loading: get(result, 'isLoading'),
    error: errorMessage,
    setError: setErrorMessage,
  };
}
