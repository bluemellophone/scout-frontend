import axios from 'axios';
import { useMutation } from 'react-query';

export default function useDeleteMission() {
  const mutation = useMutation(async missionId => {
    const result = await axios.request({
      url: `${__houston_url__}/api/v1/missions/${missionId}`,
      withCredentials: true,
      method: 'delete',
    });
    if (result?.status === 200) {
      console.log('successfully deleted...', result);
      // window.location.href = '/';
    }
    return result;
  });

  const deleteMission = missionId => mutation.mutateAsync(missionId);

  const error = mutation?.error
    ? mutation?.error.toJSON().message
    : null;

  return {
    ...mutation,
    deleteMission,
    error,
  };
}
