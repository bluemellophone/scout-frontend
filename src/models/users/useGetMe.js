import useGet from '../../hooks/useGet';
import queryKeys from '../../constants/queryKeys';

export default function useGetMe() {
  return useGet({
    queryKey: queryKeys.me,
    url: '/users/me',
    queryOptions: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  });
}
