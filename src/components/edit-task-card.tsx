"use client";

import { useState } from "react"
import SimpleButton from "./button";
import { updateTask } from "../services/todolistService";

interface CardProps {
  reload: () => Promise<void>;
  isOpen: boolean;
}

function EditTaskCard({ reload, isOpen }: CardProps) {
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskPriority, setTaskPriority] = useState<string>("");
  const [taskStatus, setTaskStatus] = useState<string>("");

  if (!isOpen) return;

  const editTask = async () => {
    try {
      await updateTask("name", taskName.trim(), {
        name: taskName.trim(),
        description: taskDescription.trim(),
        priority: taskPriority.trim(),
        status: taskStatus.trim()
      });
      reload();
    } catch (err) {
      window.alert("An error ocurred to update the task!");
      console.error(err);
    }
  }

  return (
    <div className="fixed inset-0
      flex justify-center items-center
      bg-black/50 backdrop-blur-sm
      z-50">
      <form className="bg-neutral-800/40 flex justify-center flex-col gap-3 p-12 rounded-2xl">
       <h1 className="text-white font-extrabold text-3xl">Create a new task</h1>
        <label className="text-white">Task name</label>
        <input value={taskName}  onChange={(i) => setTaskName(i.target.value)} type="text" placeholder="Type the name of task" className="bg-neutral-800 px-2 py-2 outline-none rounded-2xl min-w-full"></input>

        <label className="text-white">Task description</label>
        <input value={taskDescription} onChange={(i) => setTaskDescription(i.target.value)} type="text" placeholder="Type the description of task" className="bg-neutral-800 px-2 py-2 outline-none rounded-2xl min-w-full"></input>

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

        <select value={taskStatus} onChange={(i) => setTaskStatus(i.target.value)} className="bg-neutral-800 text-white px-2 py-2 outline-none rounded-2xl min-w-full">
          <option value="">
            Edit status
          </option>
          <option value="low">
            Created
          </option>
          <option value="medium">
            Pending
          </option>
          <option value="high">
            Completed
          </option>
        </select>

        <SimpleButton label="Edit" callback={editTask} />
        <SimpleButton label="Cancel" callback={() => isOpen = false} />
      </form>
    </div>
  )
}

export function EditCard({ reload, isOpen }: CardProps) {
  return (
    <div className="flex justify-center items-center">
      <EditTaskCard reload={reload} isOpen={isOpen} />
    </div>
  )
}
