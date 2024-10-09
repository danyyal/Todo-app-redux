import React from 'react';
import { useSelector } from 'react-redux';
export const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  const searchKey = useSelector((state) => state.search);
  const filteredTasks = tasks.length ? tasks.filter((task) =>
    task?.toLocaleLowerCase().includes(searchKey?.toLocaleLowerCase())
  ): [];
  return (
    <ul>
      {filteredTasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}