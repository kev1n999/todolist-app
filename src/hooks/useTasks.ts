"use client";

import { useEffect, useState } from "react";
import { fetchTasks } from "../services/todolistService";
import { Task } from "../interfaces/task";

export default function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<boolean>(false);

  const loadTasks = async () => {
    try {
      const tasksData = await fetchTasks();
      setTasks(tasksData);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return { tasks, error, reload: loadTasks }
}
