"use client";

import { useState } from "react";
import useTasks from "../hooks/useTasks";
import { createNewTask } from "../services/todolistService";
import SimpleButton from "./button";
import TasksCard from "./tasks-card";

export default function MainCard() {
  const { tasks, error } = useTasks();
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskPriority, setTaskPriority] = useState<string>("");

  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <form className="bg-neutral-800/40 flex justify-center flex-col gap-3 p-12 rounded-2xl">
        <h1 className="text-white font-extrabold text-3xl">Create a new task</h1>
        <label className="text-white">Task name</label>
        <input onChange={(i) => setTaskName(i.target.value)} type="text" placeholder="Type the name of task" className="bg-neutral-800 px-2 py-2 outline-none rounded-2xl min-w-full"></input>

        <label className="text-white">Task description</label>
        <input onChange={(i) => setTaskDescription(i.target.value)} type="text" placeholder="Type the description of task" className="bg-neutral-800 px-2 py-2 outline-none rounded-2xl min-w-full"></input>

        <label className="text-white">Task Priority</label>
        <input onChange={(i) => setTaskPriority(i.target.value)} type="text" placeholder="Type the task priority" className="bg-neutral-800 px-2 py-2 outline-none rounded-2xl min-w-full"></input>

        <SimpleButton label="Create Task" callback={() => createNewTask({ name: taskName, description: taskDescription, priority: taskPriority })} />

        <div className="flex justify-center items-center">
          {tasks && tasks.map((task) => (
            <TasksCard key={ task._id }  name={task.name} description={task.description} priority={task.priority} status={ task.status } />
          ))}
        </div>
      </form>
    </div>
  )
}
