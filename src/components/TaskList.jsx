import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, fetchTasks } from '../redux/tasks/tasksOperations';

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks.items);
  const isLoading = useSelector(state => state.tasks.isLoading);
  const error = useSelector(state => state.tasks.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>LOADING...</p>}

      {error && <p>ERROR!!!!!</p>}

      {tasks.length === 0 && <p>The task is empty. Please add a task</p>}

      {tasks.length > 0 && (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <p>{task.text}</p>
              <button onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
