import { usePost } from '../../hooks/useMutate';

export default function usePostMission() {
  return usePost({
    url: '/missions',
    deriveData: ({ title }) => ({ title }),
    onSuccess: result => {
      const newMissionGuid = result?.data?.guid;
      window.location.href = `/projects/${newMissionGuid}`;
    },
  });
}
