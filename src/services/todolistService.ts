import { env } from "../env";

interface TaskFields {
  name: string;
  description: string;
  priority: string;
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
    const errorResponse = await req.json();
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
