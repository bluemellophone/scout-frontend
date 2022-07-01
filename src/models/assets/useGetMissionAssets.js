import useGet from '../../hooks/useGet';
import { getMissionAssetsQueryKey } from '../../constants/queryKeys';

export default function useGetMissionAssets(
  guid,
  data = {},
  params = {},
) {
  return useGet({
    queryKey: getMissionAssetsQueryKey(guid, data, params),
    method: 'post',
    url: `/missions/${guid}/assets`,
    queryOptions: {
      enabled: Boolean(guid),
    },
    data,
    params: {
      limit: 50,
      offset: 0,
      sort: 'path',
      reverse: false,
      ...params,
    },
  });
}
