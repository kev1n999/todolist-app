import SimpleButton from "./button";

export default function MainCard() {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <form className="bg-neutral-800/40 flex justify-center flex-col gap-3 p-12 rounded-2xl">
        <h1 className="text-white font-extrabold text-3xl">Create a new task</h1>
        <label className="text-white">Task name</label>
        <input type="text" placeholder="Type the name of task" className="bg-neutral-800 px-2 py-2 outline-none rounded-2xl min-w-full"></input>

        <label className="text-white">Task description</label>
        <input type="text" placeholder="Type the description of task" className="bg-neutral-800 px-2 py-2 outline-none rounded-2xl min-w-full"></input>

        <label className="text-white">Task Priority</label>
        <input type="text" placeholder="Type the task priority" className="bg-neutral-800 px-2 py-2 outline-none rounded-2xl min-w-full"></input>

        <SimpleButton label="Create Task"/>
      </form>
    </div>
  )
}
