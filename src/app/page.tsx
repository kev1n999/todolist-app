"use client";
import MainCard from "../components/main-card";

export default function Home() {
  return (
    <div className="gap-2 flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <a href="/sign-up" className="text-blue-500 underline">Sign-up</a>
      <a href="/sign-in" className="text-blue-500 underline">Sign-in</a>
    </div>
  );
}
