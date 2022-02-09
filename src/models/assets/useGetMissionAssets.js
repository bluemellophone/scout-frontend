import axios from 'axios';
import { get } from 'lodash-es';
import { useQuery } from 'react-query';
import { getMissionAssetsQueryKey } from '../../constants/queryKeys';

export default function useGetMissionAssets(id) {
  const result = useQuery(
    getMissionAssetsQueryKey(id),
    async () => {
      const response = await axios.request({
        url: `${__houston_url__}/api/v1/missions/${id}/assets`,
        method: 'get',
      });
      return response;
    },
    {
      staleTime: Infinity,
    },
  );

  const { data, error } = result;

  return {
    ...result,
    data: get(data, 'data'),
    error: error ? error.toJSON().message : null,
  };
}
