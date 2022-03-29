import { usePatch } from '../../hooks/useMutate';
import { getMissionQueryKey } from '../../constants/queryKeys';

export default function useAddUserToMission() {
  return usePatch({
    deriveUrl: ({ missionGuid }) => `/missions/${missionGuid}`,
    deriveData: ({ userGuid }) => [
      {
        op: 'add',
        path: '/user',
        value: userGuid,
      },
    ],
    deriveFetchKeys: ({ missionGuid }) => [
      getMissionQueryKey(missionGuid),
    ],
  });
}
