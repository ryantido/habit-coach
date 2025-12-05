import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils"; // ton utilitaire pour merg­er les classes
import type { TabBarProps } from "@/types";

export function TabBar({ tabs, value, onValueChange, className }: TabBarProps) {
  const [activeRect, setActiveRect] = React.useState<{
    x: number;
    width: number;
  } | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current.querySelector<HTMLButtonElement>(
      `[data-value="${value}"]`
    );
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = containerRef.current.getBoundingClientRect();
      setActiveRect({
        x: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  }, [value, tabs]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center gap-2 rounded-2xl bg-gray-500 p-1",
        className
      )}
    >
      <React.Activity mode={activeRect ? "visible" : "hidden"}>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1 rounded-full bg-gray-50 shadow h-[3.5ch]"
          style={{
            width: activeRect?.width,
            x: activeRect?.x,
          }}
        />
      </React.Activity>

      {tabs.map((tab) => (
        <button
          key={tab.value}
          data-value={tab.value}
          onClick={() => onValueChange(tab.value)}
          className={cn(
            "relative z-10 px-3 py-1.5 text-sm font-medium transition-colors",
            value === tab.value
              ? "text-blue-600"
              : "text-gray-800/95 hover:text-foreground"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
