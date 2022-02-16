import axios from 'axios';
import { useMutation } from 'react-query';

export default function useRemoveUserFromTask() {
  const mutation = useMutation(async ({ taskId, userId }) => {
    const result = await axios.request({
      url: `${__houston_url__}/api/v1/missions/tasks/${taskId}`,
      withCredentials: true,
      method: 'patch',
      data: [
        {
          op: 'remove',
          path: '/user',
          value: userId,
        },
      ],
    });

    return result;
  });

  const removeUserFromTask = (taskId, userId) =>
    mutation.mutateAsync({ taskId, userId });

  const error = mutation?.error
    ? mutation?.error.toJSON().message
    : null;

  return {
    ...mutation,
    removeUserFromTask,
    error,
  };
}
