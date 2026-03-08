"use client";
import { useActionState } from "react";
import { formRegister } from "../app/actions/register";

export default function Signup() {
  const [state, action] = useActionState(formRegister, null);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form action={action} className="flex flex-col gap-1.5 bg-neutral-900 p-10 rounded-2xl w-96">
        <h1 className="font-extrabold text-4xl relative bottom-4">Sign-in</h1>
        <label>Username</label>
        <input
          name="username"
          className="bg-neutral-800 text-white rounded-md outline-none p-1" type="text" placeholder="Type your username" required
        />

        <label>E-mail</label>
        <input
          name="email"
          className="bg-neutral-800 text-white rounded-md outline-none p-1" type="email" placeholder="Type your e-mail" required
        />

        <label>Password</label>
        <input
          name="password"
          className="bg-neutral-800 text-white rounded-md outline-none p-1" type="password" placeholder="Type your password" required
        />
        <p className="text-sm">Do you already have an account? <a className="text-blue-400 transition-all duration-200 hover:underline"  href="/sign-in">Sign-in</a></p>

        {state?.error && (
          <p className="text-sm text-red-400">{ state?.error }</p>
        )}
        {state?.success && (
          <p className="text-sm text-green-400">Register successfull!</p>
        )}
        <button type="submit" className="cursor-pointer bg-neutral-800 rounded-md p-1 transition-colors hover:bg-neutral-700">Sign-up</button>
      </form>
    </div>
  )
}
