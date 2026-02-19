import { env } from "../env";

interface TaskFields {
  name: string;
  description: string;
  priority: string;
}

interface TaskUpdate extends TaskFields {
  status: string;
}

// Function to create a new task
export async function createNewTask({ name, description, priority }: TaskFields) {
  const req = await fetch(`${env.server_url}/create-task`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      description: description,
      priority: priority,
    })
  });

  if (!req.ok) {
    const errorResponse = await req.text();
    throw new Error(errorResponse || "an error ocurred to create task!");
  }
  const response = await req.json();
  return response;
}

// Function to fetch existing tasks
export async function fetchTasks() {
  const req = await fetch(`${env.server_url}/find-tasks`);
  if (!req.ok) {
    const errorResponse = await req.json();
    throw new Error(errorResponse || "an error ocurred to fetch tasks!");
  }
  const response = await req.json();
  return response;
}

// Function to delete a specific task
export async function deleteTasks(filter: string, filterContent: string) {
  const req = await fetch(`${env.server_url}/delete-task?filter=${filter}&filter_content=${filterContent}`, {
    method: "DELETE",
  });
  if (!req.ok) {
    const errorResponse = await req.text();
    throw new Error(errorResponse || "an error ocurred to delete the task!");
  }
}

// Function to update a specific task
export async function updateTask(filter: string, filterContent: string, fields: TaskUpdate) {
  const params = new URLSearchParams({
    filter: filter,
    filter_content: filterContent,
    name: fields.name.trim(),
    description: fields.description.trim(),
    priority: fields.priority.trim(),
    status: fields.status.trim(),
  });

  const req = await fetch(`${env.server_url}/update-task?${params.toString()}`, {
    method: "PATCH",
  });
  if (!req.ok) {
    const errorResponse = await req.text();
    throw new Error(errorResponse || "an error ocurred to update the task!");
  }
}
