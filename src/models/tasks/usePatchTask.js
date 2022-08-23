import {
  getMissionQueryKey,
  getTaskQueryKey,
} from '../../constants/queryKeys';
import { usePatch } from '../../hooks/useMutate';

export default function usePatchTask() {
  return usePatch({
    deriveUrl: ({ taskGuid }) => `/missions/tasks/${taskGuid}`,
    deriveData: ({ operations }) => operations,
    deriveInvalidateKeys: ({ taskGuid, missionGuid }) => [
      getTaskQueryKey(taskGuid),
      getMissionQueryKey(missionGuid),
    ],
  });
}
