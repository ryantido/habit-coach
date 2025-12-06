import { motion } from "motion/react";

export const MotionWrapper = ({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15, x: -15 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      aria-label={ariaLabel}
      className="w-full"
    >
      {children}
    </motion.section>
  );
};
