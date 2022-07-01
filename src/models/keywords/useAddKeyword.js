import { usePatch } from '../../hooks/useMutate';
import { getAllMissionAssetsQueryKeys } from '../../constants/queryKeys';

export default function useAddKeyword() {
  return usePatch({
    deriveUrl: ({ assetGuid }) => `/assets/${assetGuid}`,
    deriveData: ({ keywordGuid, keywordValue }) => {
      const payload = keywordGuid || {
        value: keywordValue,
        source: 'user',
      };

      return [
        {
          op: 'add',
          path: '/tags',
          value: payload,
        },
      ];
    },
    deriveInvalidateKeys: ({ missionGuid }) =>
      getAllMissionAssetsQueryKeys(missionGuid),
  });
}
