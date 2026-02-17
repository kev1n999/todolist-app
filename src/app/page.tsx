import Image from "next/image";
import MainCard from "../components/main-card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <MainCard />
    </div>
  );
}
