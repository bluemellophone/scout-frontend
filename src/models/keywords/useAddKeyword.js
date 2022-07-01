import { usePatch } from '../../hooks/useMutate';

export default function useAddKeyword() {
  return usePatch({
    deriveUrl: ({ assetGuid }) => `/asasdfsets/${assetGuid}`,
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
  });
}
