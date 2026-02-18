interface TaskCardProps {
  name: string;
  description: string;
  priority: string;
  status: string;
}

function TaskCard(props: TaskCardProps) {
  return (
    <div>
      <h1>{ props.name }</h1>
      <p>{props.description}</p>
      <p>{ props.priority }</p>
      <p>{ props.status }</p>
    </div>
  )
}

export default function TasksCard({ name, description, priority, status }: TaskCardProps) {
  return (
    <div className="flex justify-center">
      <TaskCard name={name} description={description} priority={priority} status={status} />
    </div>
  )
}
