import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/types";
import { Plus } from "lucide-react";
import { Activity } from "react";

export const Button = ({
  label = "Ajouter une habitude",
  icon = false,
  action,
  className,
}: ButtonProps & { className?: string }) => {
  return (
    <button
      aria-label={label}
      onClick={action}
      className={cn(
        "focus:ring-4 focus:ring-blue-600 max-sm:text-xs max-md:px-2",
        "bg-blue-700/80 text-blue-50 px-4 py-2 rounded-full flex",
        "hover:bg-blue-600 transition duration-300 focus:outline-2",
        "justify-center items-center gap-x-2 cursor-pointer",
        className
      )}
    >
      <Activity mode={icon ? "visible" : "hidden"}>
        <Plus size={22} />
      </Activity>
      <span className="font-semibold">{label}</span>
    </button>
  );
};
