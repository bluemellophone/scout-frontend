import axios from 'axios';
import { useMutation } from 'react-query';

export default function useDeleteTask() {
  const mutation = useMutation(async taskId => {
    const result = await axios.request({
      url: `${__houston_url__}/api/v1/missions/tasks/${taskId}`,
      withCredentials: true,
      method: 'delete',
    });
    if (result?.status === 204) window.location.href = '/';
    return result;
  });

  const deleteTask = taskId => mutation.mutateAsync(taskId);

  const error = mutation?.error
    ? mutation?.error.toJSON().message
    : null;

  return {
    ...mutation,
    deleteTask,
    error,
  };
}
