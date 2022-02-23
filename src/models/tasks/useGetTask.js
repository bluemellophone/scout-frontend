import useGet from '../../hooks/useGet';
import { getTaskQueryKey } from '../../constants/queryKeys';

export default function useGetTask(id) {
  return useGet({
    queryKey: getTaskQueryKey(id),
    url: `/missions/tasks/${id}`,
  });
}
