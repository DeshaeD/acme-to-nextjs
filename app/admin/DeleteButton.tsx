"use client";

import { useFormStatus } from "react-dom";

export default function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      onClick={(event) => {
        if (!window.confirm("Weet je zeker dat je dit product wilt verwijderen?")) {
          event.preventDefault();
        }
      }}
      className="rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Bezig..." : "Verwijderen"}
    </button>
  );
}
