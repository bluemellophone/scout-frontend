import { usePatch } from '../../hooks/useMutate';
import queryKeys, {
  getAllMissionAssetsQueryKeys,
  getAssetQueryKey,
} from '../../constants/queryKeys';

export default function useDeleteKeyword() {
  return usePatch({
    deriveUrl: ({ assetGuid }) => `/assets/${assetGuid}`,
    deriveData: ({ keywordGuid }) => [
      {
        op: 'remove',
        path: '/tags',
        value: keywordGuid,
      },
    ],
    deriveInvalidateKeys: ({ missionGuid, assetGuid }) => [
      queryKeys.keywords,
      getAssetQueryKey(assetGuid),
      getAllMissionAssetsQueryKeys(missionGuid),
    ],
  });
}
