import { usePost } from '../../hooks/useMutate';
import {
  getTaskQueryKey,
  getMissionQueryKey,
} from '../../constants/queryKeys';

export default function usePostAssetsToTask() {
  return usePost({
    deriveUrl: ({ taskGuid }) => `/missions/tasks/${taskGuid}`,
    deriveData: ({ operations }) => operations,
    deriveFetchKeys: ({ taskGuid, missionGuid }) => [
      getTaskQueryKey(taskGuid),
      getMissionQueryKey(missionGuid),
    ],
    onSuccess: (result, args) => {
      const { goToTask = true } = args;
      const newTaskId = result?.data?.guid;
      if (goToTask) window.location.href = `/tasks/${newTaskId}`;
    },
  });
}
