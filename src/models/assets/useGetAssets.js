import useGet from '../../hooks/useGet';
import { getAssetQueryKey } from '../../constants/queryKeys';

function deriveQueryParams(guid) {
  return {
    queryKey: getAssetQueryKey(guid),
    url: `/assets/${guid}`,
    queryOptions: {
      enabled: Boolean(guid),
    },
  };
}

export default function useGetAssets(guids = []) {
  const firstAssetGuid = guids?.[0];
  const result1 = useGet(deriveQueryParams(firstAssetGuid));
  const secondAssetGuid = guids?.[1];
  const result2 = useGet(deriveQueryParams(secondAssetGuid));
  return [result1, result2];
}
