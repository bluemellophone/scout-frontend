import useGet from '../../hooks/useGet';
import queryKeys from '../../constants/queryKeys';

export default function useGetKeywords() {
  return useGet({
    queryKey: queryKeys.keywords,
    url: '/keywords',
    queryOptions: {
      retry: false,
    },
  });
}
