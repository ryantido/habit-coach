import { useState, forwardRef } from "react";
import type { SwitchProps } from "@/types";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked,
      onCheckedChange,
      disabled,
      className,
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(
      defaultChecked ?? false
    );
    const isControlled = controlledChecked !== undefined;
    const actualChecked = isControlled ? controlledChecked : internalChecked;

    const handleToggle = () => {
      if (disabled) return;
      const newValue = !actualChecked;
      if (!isControlled) {
        setInternalChecked(newValue);
      }
      onCheckedChange?.(newValue);
    };

    return (
      <button
        type="button"
        role="switch"
        aria-checked={actualChecked}
        onClick={handleToggle}
        disabled={disabled}
        ref={ref}
        className={cn(
          "relative inline-flex items-center h-6 w-12 rounded-full transition-colors focus:outline-none shrink-0",
          actualChecked ? "bg-blue-500" : "bg-gray-300",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <motion.span
          layout
          initial={false}
          animate={{ x: actualChecked ? 26 : 2 }}
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
          className="inline-block h-5 w-5 bg-white rounded-full shadow transform"
        />
      </button>
    );
  }
);
