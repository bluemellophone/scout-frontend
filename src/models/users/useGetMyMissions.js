import { get, uniqBy } from 'lodash-es';
import useGetMe from './useGetMe';

export default function useGetMyMissions() {
  const { data, ...rest } = useGetMe();
  const userMissions = [
    ...get(data, 'owned_missions', []),
    ...get(data, 'assigned_missions', []),
  ];
  return {
    data: uniqBy(userMissions, 'guid'),
    ...rest,
  };
}
