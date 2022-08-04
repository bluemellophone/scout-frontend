import { usePatch } from '../../hooks/useMutate';
import queryKeys, {
  getAllMissionAssetsQueryKeys,
} from '../../constants/queryKeys';

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
    /* Note: for some reason when using fetch keys here it causes an erroneous
     * fetch to occur in the form of POST /missions/undefined/assets */
    deriveInvalidateKeys: ({ missionGuid }) => {
      return [
        queryKeys.keywords,
        getAllMissionAssetsQueryKeys(missionGuid),
      ];
    },
  });
}
