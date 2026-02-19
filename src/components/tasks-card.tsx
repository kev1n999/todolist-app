"use client";

import { Pencil, Trash2 } from "lucide-react";
import { deleteTasks } from "../services/todolistService";
import { useState } from "react";
import { EditCard } from "./edit-task-card";

type TaskCardProps =  {
  name: string;
  description: string;
  priority: string;
  status: string;
  reload: () => Promise<void>;
}

function TaskCard(props: TaskCardProps) {
  const [open, setOpen] = useState<boolean>(false);

  const deleteTask = async () => {
    try {
      await deleteTasks("name", props.name.toLowerCase());
      props.reload();
    } catch (err) {
      window.alert(`An error ocurred to delete this task!`);
      console.error(err);
    }
  }

  return (
    <div className="
      bg-neutral-800 border border-neutral-700
      px-6 py-5 rounded-2xl
      shadow-md hover:shadow-lg
      hover:border-neutral-500
      transition-all duration-300
    ">
      <div className="flex flex-col">
        <div>
          <h1 className="text-lg font-semibold text-green-300">
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
          </h1>
        </div>

        <p className="text-sm text-neutral-300 leading-relaxed">
          {props.description}
        </p>

        <div className="flex items-center justify-between mt-2 gap-2">
          <span className="
            text-xs px-3 py-1 rounded-full
            bg-yellow-500/20 text-yellow-300
            border border-yellow-500/30
          ">
            {props.priority}
          </span>

          <span className="
            text-xs px-3 py-1 rounded-full
            bg-blue-500/20 text-blue-300
            border border-blue-500/30
          ">
            {props.status}
          </span>
        </div>

        <div className="flex justify-end px-2 py-2 gap-1">
          <button onClick={deleteTask} className="p-2 cursor-pointer rounded-2xl transition-colors hover:bg-neutral-700">
            {<Trash2 className="text-red-400 size-4"/>}
          </button>
          <button onClick={() => setOpen(true)} className="p-2 cursor-pointer rounded-2xl transition-colors hover:bg-neutral-700">
            {<Pencil className="size-4"/>}
          </button>
        </div>

        {open && (
          <EditCard reload={props.reload} isOpen={open} />
        )}
      </div>
    </div>
  )
}


export default function TasksCard({ name, description, priority, status, reload }: TaskCardProps) {
  return (
    <div className="flex justify-center">
      <TaskCard name={name} description={description} priority={priority} status={status} reload={reload} />
    </div>
  )
}
