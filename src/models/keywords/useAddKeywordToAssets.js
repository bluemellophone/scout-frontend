import { usePatch } from '../../hooks/useMutate';
import queryKeys, {
  getAllMissionAssetsQueryKeys,
} from '../../constants/queryKeys';

export default function useAddKeywordToAssets() {
  return usePatch({
    url: '/assets/',
    deriveData: ({ imageGuids, keywordGuid, tag }) => {
      const testOperation = keywordGuid
        ? { op: 'test', path: '/tags', value: keywordGuid }
        : {
            op: 'test',
            path: '/tags',
            value: { value: tag, source: 'user' },
          };
      const addOperations = imageGuids.map(guid => ({
        op: 'add',
        path: '/tags',
        guid,
        value: '[0]',
      }));
      return [testOperation, ...addOperations];
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
