import { Habits } from "@/constants/habits";
import { MotionWrapper } from "../layouts/MotionWrapper";
import { HabitCard } from "../ui/HabitCard";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

export default function Habitudes() {
  const navigate = useNavigate();
  return (
    <MotionWrapper ariaLabel="Toutes les habitudes">
      <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 mt-4 mb-9">
        Mes Habitudes
      </h1>
      <section className="space-y-5" aria-label="dashboard-content">
        {Habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit.habit}
            action={habit.action}
            more={() => navigate(`/habitude/${habit.id}`)}
            range={habit.range}
          />
        ))}
      </section>
      <Button
        icon
        label="Ajouter une habitude"
        className="ml-auto mt-12 max-md:mt-6 pr-4!"
      />
    </MotionWrapper>
  );
}
