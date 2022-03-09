import useGet from '../../hooks/useGet';
import { getMissionAssetsQueryKey } from '../../constants/queryKeys';

export default function useGetMissionAssets(id, data = {}) {
  return useGet({
    queryKey: getMissionAssetsQueryKey(id, data),
    method: 'post',
    url: `/missions/${id}/assets`,
    queryOptions: {
      enabled: Boolean(id),
    },
    data,
    params: {
      limit: 50,
      offset: 0,
      sort: 'path',
      reverse: false,
    },
  });
}
