import useGet from '../../hooks/useGet';
import { getMissionAssetsQueryKey } from '../../constants/queryKeys';

export default function useGetMissionAssets(id) {
  // return useGet({
  //   queryKey: getMissionAssetsQueryKey(id),
  //   url: `/missions/${id}/assets`,
  // });

  return useGet({
    queryKey: getMissionAssetsQueryKey(id),
    method: 'post',
    url: `/missions/${id}/assets`,
    data: {
      query: {
        query_string: {
          query: 'B74f2fad7050',
        },
      },
    },
  });
}
