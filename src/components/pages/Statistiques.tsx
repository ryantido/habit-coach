import { MotionWrapper } from "../layouts/MotionWrapper";

export default function Statistiques() {
  return (
    <MotionWrapper ariaLabel="Statistiques - Habit Coach">
      <div className="grid place-content-center h-[calc(100vh-10rem)]">
        <span className="text-lg font-medium text-gray-600 text-center">
          Il n'y a pas encore de statistiques.
        </span>
      </div>
    </MotionWrapper>
  );
}
