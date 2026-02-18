import { ReactElement } from "react";

interface ButtonProps {
  label: string;
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SimpleButton({ label, callback }: ButtonProps ): ReactElement<HTMLButtonElement> {
  return (
    <button
      onClick={callback}
      className="bg-neutral-700 rounded-2xl min-w-max px-4 py-2 cursor-pointer transition-colors hover:bg-neutral-800 mt-4">
      { label }
    </button>
  )
}
