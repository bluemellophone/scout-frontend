import { usePatch } from '../../hooks/useMutate';
import queryKeys from '../../constants/queryKeys';

export default function usePatchUser() {
  return usePatch({
    deriveUrl: ({ userGuid }) => `/users/${userGuid}`,
    deriveData: ({ operations, password }) => {
      if (!password) return operations;
      return [
        {
          op: 'test',
          path: '/current_password',
          value: password,
        },
        ...operations,
      ];
    },
    fetchKeys: [queryKeys.me, queryKeys.users],
  });
}
