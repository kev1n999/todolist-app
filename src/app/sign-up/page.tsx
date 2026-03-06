"use client";
import { formRegister } from "../actions/register";

export default function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form action={formRegister} className="flex flex-col gap-1.5 bg-neutral-900 p-12 rounded-2xl w-96">
        <label>Username</label>
        <input
          name="username"
          className="bg-neutral-800 text-white rounded-md outline-none p-1" type="text" placeholder="Type your username" required
        />

        <label>E-mail</label>
        <input
          name="email"
          className="bg-neutral-800 text-white rounded-md outline-none p-1" type="text" placeholder="Type your e-mail" required
        />

        <label>Password</label>
        <input
          name="password"
          className="bg-neutral-800 text-white rounded-md outline-none p-1" type="password" placeholder="Type your password" required
        />

        <button type="submit" className="cursor-pointer bg-neutral-800 rounded-md p-1 transition-colors hover:bg-neutral-700">Sign-up</button>
      </form>
    </div>
  )
}
