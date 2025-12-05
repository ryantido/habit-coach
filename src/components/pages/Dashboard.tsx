import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { HabitCard } from "../ui/HabitCard";
import { useNavigate } from "react-router-dom";
import { Habits } from "@/constants/habits";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0, y: 15, x: -15 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      aria-label="dashboard"
      className="w-full"
    >
      <header
        className="flex flex-wrap gap-y-2 items-center justify-between py-2 mb-4"
        aria-label="dashboard-header"
      >
        <section aria-label="dashboard-title">
          <h1 className="text-3xl font-extrabold tracking-tighter text-gray-900 max-md:mb-2">
            Mes Habitudes du jour
          </h1>
          <span className="text-gray-400 text-[15px]" aria-label="sub-title">
            Continuez sur votre lanc&eacute;e ! Vous êtes sur la bonne voie
          </span>
        </section>
        <Button icon className="pr-4!" />
      </header>
      <section className="space-y-5" aria-label="dashboard-content">
        {Habits.slice(0, 4).map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit.habit}
            action={habit.action}
            more={() => navigate(`/habitude/${habit.id}`)}
            range={habit.range}
          />
        ))}
      </section>
    </motion.section>
  );
}
