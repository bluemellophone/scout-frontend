import useGet from '../../hooks/useGet';
import { getMissionAssetsQueryKey } from '../../constants/queryKeys';

export default function useGetMissionAssets(id) {
  return useGet({
    queryKey: getMissionAssetsQueryKey(id),
    url: `/missions/${id}/assets`,
  });
}
