import { usePatch } from '../../hooks/useMutate';
import { getMissionQueryKey } from '../../constants/queryKeys';

export default function useRemoveUserFromMission() {
  return usePatch({
    deriveUrl: ({ missionGuid }) => `/missions/${missionGuid}`,
    deriveData: ({ userGuid }) => [
      {
        op: 'remove',
        path: '/user',
        value: userGuid,
      },
    ],
    deriveQueryKeys: ({ missionGuid }) => [
      getMissionQueryKey(missionGuid),
    ],
  });
}
