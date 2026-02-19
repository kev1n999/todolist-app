"use client";

import { useState } from "react";
import useTasks from "../hooks/useTasks";
import { createNewTask } from "../services/todolistService";
import SimpleButton from "./button";
import TasksCard from "./tasks-card";

export default function MainCard() {
  const { tasks, error, reload } = useTasks();
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskPriority, setTaskPriority] = useState<string>("low");

  if (error) return <h1>An error ocurred to load tasks!</h1>

  const createTask = async (e?: React.FormEvent) => {
    e?.preventDefault();

    try {
      await createNewTask({ name: taskName, description: taskDescription, priority: taskPriority });
      reload();
    } catch (err) {
      console.error(`An error ocurred to create the task!\n${err}`);
    }
  }

  return (
    <div className="flex justify-center flex-col md:grid grid-cols-2 place-items-center gap-2">
      <div className="flex flex-col items-center md:grid place-items-center grid-cols-3 mt-8 gap-3">
        {tasks && tasks.map((task) => (
          <TasksCard key={task._id} name={task.name} description={task.description} priority={task.priority} status={task.status} reload={reload} />
        ))}
      </div>

      <form onSubmit={createTask} className="bg-neutral-800/40 flex justify-center flex-col gap-3 p-12 rounded-2xl">
        <h1 className="text-white font-extrabold text-3xl">Create a new task</h1>
        <label className="text-white">Task name</label>
        <input value={taskName}  onChange={(i) => setTaskName(i.target.value)} type="text" placeholder="Type the name of task" className="bg-neutral-800 px-2 py-2 outline-none rounded-2xl min-w-full"></input>

        <label className="text-white">Task description</label>
        <input value={taskDescription} onChange={(i) => setTaskDescription(i.target.value)} type="text" placeholder="Type the description of task" className="bg-neutral-800 px-2 py-2 outline-none rounded-2xl min-w-full"></input>

        <label className="text-white">Task Priority</label>
        <select value={taskPriority} onChange={(i) => setTaskPriority(i.target.value)} className="bg-neutral-800 text-white px-2 py-2 outline-none rounded-2xl min-w-full">
          <option value="">
            Select a priority
          </option>
          <option value="low">
            Low
          </option>
          <option value="medium">
            Medium
          </option>
          <option value="high">
            High
          </option>
        </select>

        <SimpleButton label="Create Task" callback={createTask} />
      </form>
    </div>
  )
}
