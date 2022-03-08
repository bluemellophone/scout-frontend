import useGet from '../../hooks/useGet';
import { getMissionQueryKey } from '../../constants/queryKeys';

export default function useGetMission(id) {
  return useGet({
    queryKey: getMissionQueryKey(id),
    url: `/missions/${id}`,
    queryOptions: {
      enabled: Boolean(id),
    },
  });
}
