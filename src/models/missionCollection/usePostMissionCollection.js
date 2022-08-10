import { usePost } from '../../hooks/useMutate';
import { getMissionAssetsQueryKey } from '../../constants/queryKeys';

export default function usePostMissionCollection() {
  return usePost({
    deriveUrl: ({ missionGuid }) =>
      `/missions/${missionGuid}/tus/collect/`,
    deriveData: ({ transactionId }) => ({
      description: 'Scout mission image upload',
      transaction_id: transactionId,
    }),
    deriveFetchKeys: ({ missionGuid }) => [
      getMissionAssetsQueryKey(missionGuid),
    ],
  });
}
