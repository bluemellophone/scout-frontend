import axios from 'axios';
import { useMutation } from 'react-query';

export default function usePostTask() {
  const mutation = useMutation(
    async ({ missionGuid, operations }) => {
      const result = await axios.request({
        url: `${__houston_url__}/api/v1/missions/${missionGuid}/tasks`,
        withCredentials: true,
        method: 'post',
        data: operations,
      });
      if (result?.status === 200) {
        const newTaskId = result?.data?.guid;
        window.location.href = `/tasks/${newTaskId}`;
      }
      return result;
    },
  );

  const postTask = (missionGuid, operations) =>
    mutation.mutateAsync({ missionGuid, operations });

  const error = mutation?.error
    ? mutation?.error.toJSON().message
    : null;

  return {
    ...mutation,
    postTask,
    error,
  };
}
