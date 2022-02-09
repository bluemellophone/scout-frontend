import axios from 'axios';
import { useQueryClient, useMutation } from 'react-query';
import { getMissionAssetsQueryKey } from '../../constants/queryKeys';

export default function useAddKeywordToAssets() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async ({ missionGuid, imageGuids, keywordGuid, tag }) => {
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

      const result = await axios.request({
        url: `${__houston_url__}/api/v1/assets/`,
        withCredentials: true,
        method: 'patch',
        data: [testOperation, ...addOperations],
      });

      if (result?.status === 200) {
        queryClient.invalidateQueries(
          getMissionAssetsQueryKey(missionGuid),
        );
      }

      return result;
    },
  );

  const addKeywordToAssets = (
    missionGuid,
    imageGuids,
    keywordGuid,
    tag,
  ) =>
    mutation.mutateAsync({
      missionGuid,
      imageGuids,
      keywordGuid,
      tag,
    });

  const error = mutation?.error
    ? mutation?.error.toJSON().message
    : null;

  return {
    ...mutation,
    addKeywordToAssets,
    error,
  };
}
