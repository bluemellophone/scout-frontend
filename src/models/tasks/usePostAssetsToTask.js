import { usePost } from '../../hooks/useMutate';

export default function usePostAssetsToTask() {
  return usePost({
    deriveUrl: ({ taskGuid }) => `/missions/tasks/${taskGuid}`,
    deriveData: ({ operations }) => operations,
    onSuccess: result => {
      const newTaskId = result?.data?.guid;
      window.location.href = `/tasks/${newTaskId}`;
    },
  });
}
