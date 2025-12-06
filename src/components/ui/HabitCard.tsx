import type { HabitCardProps } from "@/types";
import { motion } from "motion/react";
import { Button } from "./Button";

export const HabitCard = ({ habit, range, more, action }: HabitCardProps) => {
  return (
    <div
      className="py-3 px-4 space-y-2 rounded-2xl shadow-xs border border-gray-200 flex flex-col justify-center"
      aria-label={`habit-card-${habit.title}`}
    >
      <section aria-label={`${habit.title} - ${habit.duration}`}>
        <h2 className="text-lg text-gray-700 font-semibold mb-2">
          {habit.title}
        </h2>
        <div className="h-2 w-full bg-blue-100/50 rounded-full">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(range, 100)}%` }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: 0.5,
            }}
            className="h-full bg-blue-500 rounded-full"
          />
        </div>
      </section>
      <section
        className="flex items-center justify-between"
        aria-label="habit-card-actions"
      >
        <button
          className="text-blue-500 hover:text-blue-600 transition-colors cursor-pointer bg-none border-none self-end"
          aria-label="voir details"
          onClick={more}
        >
          Voir details
        </button>
        <Button label="+1" action={action} className="px-8! py-1!" />
      </section>
    </div>
  );
};
