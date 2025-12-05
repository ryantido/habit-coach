import { useParams } from "react-router-dom";
import { MotionWrapper } from "../layouts/MotionWrapper";
import { Habits } from "@/constants/habits";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/Button";

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const habit = Habits.find((habit) => habit.id === +id!);
  // const navigate = useNavigate();

  const radius = 80;
  const stroke = 18;
  const value = habit?.range ?? 80;
  const duration = habit?.habit.duration ?? 80;
  const units =
    duration > 10
      ? Math.round((value * duration) / 100)
      : ((value * duration) / 100).toFixed(1);
  const circumference = 2 * Math.PI * radius;

  const progress = (value / 100) * circumference;

  return (
    <MotionWrapper
      ariaLabel={habit ? habit?.habit.title : "Habit details page"}
    >
      {!habit ? (
        <>
          <header className="mb-14 text-gray-600 flex items-center">
            <button
              className="px-4 py-2 items-center flex gap-x-2 cursor-pointer"
              onClick={() => history.back()}
            >
              <ArrowLeft size={20} strokeWidth={1.8} />
              <span>Back to Habits</span>
            </button>
          </header>
          <div className="grid h-[calc(100dvh-16rem)] place-content-center">
            <p className="text-gray-700 font-semibold">Habit non trouvé!</p>
          </div>
        </>
      ) : (
        <>
          <header className="mb-14 text-gray-600 flex items-center">
            <button
              className="px-4 py-2 items-center flex gap-x-2 cursor-pointer"
              onClick={() => history.back()}
            >
              <ArrowLeft size={20} strokeWidth={1.8} />
              <span>Back to Habits</span>
            </button>
          </header>
          <div className="flex flex-col items-center gap-y-14">
            <header className="space-y-1 text-gray-500 font-medium text-sm text-center">
              <h1 className="text-gray-900 font-bold text-4xl spacing max-w-[40ch] line-clamp-2">
                {habit.habit.title}
              </h1>
              <p className=" max-w-[40ch] mx-auto line-clamp-2">
                {habit.habit.description}
              </p>
            </header>
            <div className="flex items-center justify-center relative">
              <svg width="180" height="180" className="-rotate-90">
                {/* Cercle de fond */}
                <circle
                  cx="90"
                  cy="90"
                  r={radius}
                  stroke="#e5e7eb"
                  strokeWidth={stroke}
                  fill="transparent"
                />

                {/* Cercle animé */}
                <motion.circle
                  cx="90"
                  cy="90"
                  r={radius}
                  stroke="#2563eb"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  animate={{ strokeDashoffset: circumference - progress }}
                  transition={{ duration: 0.8, ease: "backInOut" }}
                />
              </svg>

              <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-bold">{value}%</span>
                <span className="text-xs text-gray-500">
                  {units}/{duration} day{duration > 2 && "s"}
                </span>
              </div>
            </div>
            <div className="flex gap-4 w-full items-center justify-center">
              <Button label="+1" className="px-14 py-2 max-md:px-8" />
              <Button
                label="Reset"
                className="px-12 py-2 bg-[#e5e7eb] hover:bg-[#e5e7eb] text-gray-700 max-md:px-8 focus:ring-gray-50"
              />
            </div>
          </div>
        </>
      )}
    </MotionWrapper>
  );
}
