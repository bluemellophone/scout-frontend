import { useDelete } from '../../hooks/useMutate';

export default function useDeleteMission() {
  return useDelete({
    deriveUrl: ({ missionGuid }) => `/missions/${missionGuid}`,
    onSuccess: () => {
      window.location.href = '/';
    },
  });
}
